import axios from 'axios';

const MOCK_DATA = false;
const MOCK_TIMEOUT = 500;
const ERROR_RESPONSE_URLS = [];
const API_HOST = 'http://127.0.0.1:7003/';

const snakeToCamel = (s) => (s.replace(/(_\w)/g, (m) => (m[1].toUpperCase())));
const camelToSnake = (s) => (s.replace(/\.?([A-Z]+)/g, (x, y) => ('_' + y.toLowerCase())).replace(/^_/, ''));

const requireMocks = () => {
  return require('../fakeRoutes').default;
};

const deserializeResponse = (data) => {
  if (data && Array.isArray(data)) {
    return data.map((item) => (deserializeResponse(item)));
  } else if (data && typeof data === 'object') {
    return Object.keys(data).reduce((result, key) => (
      Object.assign(result, {
        [snakeToCamel(key)]: deserializeResponse(data[key])
      })
    ), {});
  } else {
    return data;
  }
};

const serializeRequest = (data) => {
  if (data && Array.isArray(data)) {
    return data.map((item) => (serializeRequest(item)));
  } else if (data && typeof data === 'object') {
    return Object.keys(data).reduce((result, key) => (
      Object.assign(result, {
        [camelToSnake(key)]: serializeRequest(data[key])
      })
    ), {});
  } else {
    return data;
  }
};

export default (url, data) => {
  const reqData = serializeRequest(data);
  const apiUrl = `${API_HOST}${url}`;
  if (MOCK_DATA) {
    const fakeRoutes = requireMocks();
    const errorsMockHandler = fakeRoutes['api/errors'];
    console.debug(url);
    console.debug('REQUEST:', reqData);
    return new Promise((resolve, reject) => {
      if (ERROR_RESPONSE_URLS.includes(url)) {
        const errors = (typeof errorsMockHandler === 'function') ? errorsMockHandler(reqData) : errorsMockHandler;
        console.debug('RESPONSE ERROR:', errors);
        setTimeout(() => reject(deserializeResponse(errors)), MOCK_TIMEOUT); // fake async
        return;
      } else {
        if ('errors' in reqData) {
          const errors = (typeof errorsMockHandler === 'function') ? errorsMockHandler(reqData) : errorsMockHandler;
          console.debug('RESPONSE ERROR:', errors);
          setTimeout(() => reject(deserializeResponse(errors)), MOCK_TIMEOUT); // fake async
          return;
        }
        const fakeRoute = fakeRoutes[url];
        if (!fakeRoute) {
          return axios.post(url, reqData);
        }
        const response = (typeof fakeRoute === 'function') ? fakeRoute(reqData) : fakeRoute;
        console.debug('RESPONSE:', response);
        setTimeout(() => resolve(deserializeResponse(response)), MOCK_TIMEOUT); // fake asnyc
        return;
      }
    });
  }
  return new Promise(function(resolve) {
    axios.post(apiUrl, reqData).then(
      ({ data, status }) => resolve(deserializeResponse({ ...data, status })),
      (errors) => {
        if (errors && errors.config && errors.statusText) {
          resolve({ errors: errors.config.statusText });
        } else {
          resolve({ errors: 'Application error.' });
        }
      }
    );
  });
};
