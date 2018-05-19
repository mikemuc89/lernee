const PATH_PARAMS_GROUP_RE = /\([^)]+\)/gi;
const PATH_TRIM_RE = /^\^(.*)\$$/i;
const PATH_TRIM_SLASHES_RE = /^\/*(.*)\/*$/i;
const REQ_PARAMS_LEADING_QMARK_RE = /^\?(.*)/;

const preparePathFromRegex = (pathRegex) => pathRegex.replace(PATH_TRIM_RE, '$1');

const getPathParamsFromLocation = (location, pathConfig) => {
  const navId = getNavigationIdFromLocation(location, pathConfig);
  if (!navId) {
    return {};
  }
  const matches = location.pathname.replace(PATH_TRIM_SLASHES_RE, '$1').match(new RegExp(pathConfig[navId][0]));
  if (!matches) {
    throw 'Invalid location';
  }
  matches.shift();
  const paramNames = pathConfig[navId][1];
  if (!paramNames) {
    return {};
  }
  if (paramNames.length !== matches.length) {
    throw 'Wrong number of path parameters';
  }
  return matches.reduce((result, param, idx) => Object.assign(result, {
    [paramNames[idx]]: param
  }), {});
};

const getRequestParamsFromLocation = (location) => (location.search ? location.search.replace(REQ_PARAMS_LEADING_QMARK_RE, '$1').split('&').reduce((result, param) => {
  const [key, value] = param.split('=');
  return Object.assign(result, {
    [key]: value
  });
}, {}) : {});

const getNavigationIdFromLocation = (location, pathConfig) => {
  const path = location.pathname.replace(PATH_TRIM_SLASHES_RE, '$1');
  return Object.getOwnPropertySymbols(pathConfig).find((navId) => (
    new RegExp(pathConfig[navId][0], 'i').test(path)
  ));
};

const createUrlFromIdAndParams = (navId, params, pathConfig) => {
  const copiedParams = Object.assign({}, params);
  const path = pathConfig[navId][0].replace(PATH_TRIM_RE, '$1');
  const pathGroups = pathConfig[navId][1];
  const matches = path.match(PATH_PARAMS_GROUP_RE) || [];
  if (pathGroups.length !== matches.length) {
    throw 'Wrong number of parameters';
  }
  return matches.reduce((result, matchingPart, idx) => {
    const currentParam = copiedParams[pathGroups[idx]];
    if (!currentParam) {
      throw 'Not enough parameters';
    }
    delete copiedParams[pathGroups[idx]];
    return result.replace(matchingPart, currentParam);
  }, path).concat(Object.keys(copiedParams).length ? '?' + Object.keys(copiedParams).reduce((res, key) => res.concat(
    key + '=' + copiedParams[key]
  ), []).join('&') : '');
};

const getNavigationTree = (id, parentsConfig, result = []) => {
  const previousContent = parentsConfig[id];
  result.unshift(id);
  if (previousContent) {
    getNavigationTree(previousContent, parentsConfig, result);
  }
  return result;
};

export {
  createUrlFromIdAndParams,
  getNavigationIdFromLocation,
  getNavigationTree,
  getPathParamsFromLocation,
  getRequestParamsFromLocation,
  preparePathFromRegex
};
