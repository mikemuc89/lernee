import autocomplete from './autocomplete';
import date from './date';
import defaultHandler from './defaultHandler';
import multiChoice from './multiChoice';


const subHandlers = {
  autocomplete,
  date,
  defaultHandler,
  multiChoice
};


export default ({
  field,
  key,
  /* state, */
  updateFields,
  options = {
    errorsConfig: {}
  }
}) => {
  const { value, errors, widget, hints, warnings } = field;
  const { required = false, disabled = false } = widget;
  const subFieldKeys = Object.keys(value);

  const updateField = (spec, callback) => {
    updateFields({
      [key]: spec
    }, callback);
  };

  const subFieldHandler = (subKey) => {
    const subWidget = widget[subKey];
    const subField = value[subKey];
    const { fieldType } = subWidget;
    const handlerFunction = subHandlers[fieldType] || subHandlers[subKey] || subHandlers.defaultHandler;
    return () => handlerFunction({ field: Object.assign({}, subField, { widget: subWidget }), key: subKey, /* state, */ updateFields: (spec, callback) => {
      updateField({
        value: spec
      }, callback);
    }, options });
  };

  return Object.assign({
    errors,
    hints,
    warnings,
    required,
    disabled
  }, subFieldKeys.reduce((result, key) => Object.assign(result, {
    [key]: subFieldHandler(key)
  }), {}));
};
