import Component from './Component';
import createHistory from 'history/createBrowserHistory';
import {
  createUrlFromIdAndParams,
  getNavigationIdFromLocation,
  getNavigationTree,
  getPathParamsFromLocation,
  getRequestParamsFromLocation
} from '../utils/location';


class RootComponent extends Component {
  constructor() {
    super();
    this.history = createHistory();
    this.historyUnlisten = this.history.listen((location/* , action*/) => {
      const { id, params } = this.getNavigationParamsFromLocation(location);
      const { state } = location;
      if (!state.hold) {
        this.setNavigationState(id, params);
      }
    });
  }

  componentWillMount() {
    this.makeInitialNavigation(() => {
      super.componentWillMount();
    });
  }

  componentWillUnmount() {
    this.historyUnlisten();
    super.componentWillUnmount();
  }

  viewHandler() {
    return {
      ...super.viewHandler(),
      contentState: this.state,
      navigate: this.navigate
    };
  }

  navigate(id, params, callback, state={}) {
    this.setNavigationState(id, params, callback);
    this.changeWindowLocation(id, params, state);
  }

  getConfiguration() {
    throw 'Not implemented error';
    // To override
    // return {
    //   tree: null,
    //   parents: null,
    //   paths: null,
    //   api: null
    // }
  }

  getDefaultNavigationParams() {
    // To override
  }

  getInitialNavigationParams() {
    const { pathname } = this.history.location;
    const path = pathname.replace(/^\/+(.*)/, '$1');

    if (path === '') {
      return this.getDefaultNavigationParams();
    }

    return this.getNavigationParamsFromLocation();
  }

  makeInitialNavigation(callback) {
    const { id, params } = this.getInitialNavigationParams();
    this.navigate(id, params, callback, { hold: true });
  }

  getNavigationParamsFromLocation(location = this.history.location) {
    const { paths } = this.getConfiguration();

    const id = getNavigationIdFromLocation(location, paths);
    const pathParams = getPathParamsFromLocation(location, paths);
    const reqParams = getRequestParamsFromLocation(location);
    const params = {
      ...pathParams,
      ...reqParams
    };

    return {
      id,
      params
    };
  }

  changeWindowLocation(id, params={}, state={}) {
    const { paths } = this.getConfiguration();
    const url = createUrlFromIdAndParams(id, params, paths);
    const [path, request] = url.split('?');
    const search = request ? '?' + request : '';
    const pathname = path.startsWith('/') ? path : '/' + path;

    this.history.push(Object.assign({
      pathname,
      state,
      search
    }));
  }

  setNavigationState(id, params, callback) {
    const { tree, parents, paths, api } = this.getConfiguration();
    const currentTree = getNavigationTree(id, parents);
    const currentId = currentTree.shift();

    let treeElement = tree[currentId];

    const newState = {
      content: currentId,
      contentState: {},
      state: {
        config: {
          api: api[currentId],
          path: paths[currentId][0],
          title: treeElement.title,
          request: params
        }
      }
    };

    currentTree.reduce((result, currentId) => {
      const nextTier = {
        content: currentId,
        contentState: {},
        state: {
          config: {
            api: api[currentId],
            path: paths[currentId][0],
            title: treeElement.title,
            request: params
          }
        }
      };
      result.contentState = nextTier;
      treeElement = treeElement.children[currentId];
      return nextTier;
    }, newState);

    this.setState(newState, callback);
  }
}


export default RootComponent;
