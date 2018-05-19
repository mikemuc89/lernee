import React from 'react';
import Loader from './Loader';
import update from '../utils/update';
import request from '../../App/utils/request';
import handlers from '../utils/handlers';


class Component extends React.Component {
  constructor() {
    super();
    this.fetched = false;
    this.fieldHandlerOptions = {};
    this.fieldValueGet = {};
  }

  viewHandler() {
    return {
      updateState: this.updateState
    };
  }

  fetchData() {
    const url = this.getUrl();
    const params = {
      ...this.getDefaultRequestParams(),
      ...this.getRequestParams()
    };
    if (url) {
      const oldState = Object.assign({}, this.state);
      return request(url, params).then((response) => {
        this.fetched = true;
        this.setState({ ...this.state, data: response }, () => {
          this.afterFetch(oldState);
        });
      });
    } else {
      this.setState(this.state);
      this.fetched = true;
    }
  }

  afterFetch(/* oldState */) {}

  shouldFetchData(/* oldProps, newProps */) {
    return false;
  }

  getUrl() {
    return this.state && this.state.config && this.state.config.api;
  }

  getRequestParams() {
    return this.state && this.state.config && this.state.config.request || {};
  }

  getDefaultRequestParams() {
    return {};
  }

  componentWillMount() {}

  componentWillReceiveProps(newProps) {
    if (this.shouldFetchData(this.props, newProps)) {
      this.fetched = false;
      this.fetchData();
    }
  }

  getHandlers() {
    return handlers;
  }

  getHandlerFunction(key) {
    const field = this.state.data.fields[key] || {};
    const { widget: { fieldType, fieldFormat } } = field;
    const handlers = this.getHandlers();

    return handlers[fieldType] || handlers[key] || ((fieldFormat === 'complex' && handlers.complex) || (fieldFormat === 'list' && handlers.list) || handlers.defaultHandler);
  }

  fieldHandler(key, opts = {}) {
    const { customErrors, getValue, ...restOpts } = opts;
    const options = {
      errorsConfig: {
        ...this.getErrorConfig(),
        ...customErrors
      },
      ...restOpts
    };

    this.fieldHandlerOptions[key] = options;
    this.fieldValueGet[key] = getValue;

    return this.getHandlerFunction(key).call(this, {
      field: this.state.data.fields[key],
      key,
      state: this.state,
      updateFields: (spec, callback) => {
        this.setState(update(this.state, { data: { fields: spec } }), callback);
      },
      options
    });
  }

  getFieldHandlerOptions(key) {
    return this.fieldHandlerOptions[key];
  }

  getFieldValue(key) {
    const { fields } = this.state.data;
    if (key in this.fieldValueGet && typeof this.fieldValueGet[key] === 'function') {
      return this.fieldValueGet[key].call(this, fields[key]);
    }
    return fields[key].value;
  }

  getData() {
    const { fields } = this.state.data;
    return Object.keys(fields).reduce((result, key) => {
      return Object.assign(result, {
        [key]: this.getFieldValue(key)
      });
    }, {});
  }

  getErrors() {
    const { fields } = this.state.data;
    const errors = {};
    const spec = Object.keys(fields).reduce((result, key) => {
      const err = validateValue(fields[key].value, fields[key].widget, this.getFieldHandlerOptions(key));
      if (err) {
        Object.assign(errors, {
          [key]: err
        });
      }
      return Object.assign(result, {
        [key]: {
          errors: { $set: err }
        }
      });
    }, {});
    this.updateState({
      fields: {
        spec
      }
    });
    return spec;
  }

  getErrorConfig() {
    return null;
    //To override
  }

  onFinish(/* response */) {}

  componentDidMount() {
    this._isMounted = true;
    this.fetchData();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  navigate(/* id, params */) {
    // To override
  }

  getContent() {
    if (!this.fetched) {
      return Loader;
    }
    return this.getViews();
  }

  getViews() {
    // To override
    return null;
  }

  updateState(spec, callback) {
    this.setState(update(this.state, { data: spec }), callback);
  }
}


export default Component;
