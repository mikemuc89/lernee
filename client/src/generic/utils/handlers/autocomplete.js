import defaultHandler from './defaultHandler';


export default ({
  field,
  key,
  /* state, */
  updateFields,
  options = {
    validateOnBlur: true,
    checkEmptyOnBlur: true,
    errorsConfig: {}
  }
}) => {
  const defaultHandlerProps = defaultHandler({ field, key, /* state, */updateFields, options });

  const { value, widget } = field;
  const { multiChoice, items } = widget;

  const updateField = (spec, callback) => {
    updateFields({
      [key]: spec
    }, callback);
  };

  return Object.assign(defaultHandlerProps, {
    onFocus(e) {
      console.debug('focus', e);
      updateField({
        errors: { $set: null },
        hints: { $set: null },
        warnings: { $set: null }
      });
    },
    onOpen() {
      updateField({
        errors: { $set: null },
        hints: { $set: null },
        warnings: { $set: null }
      });
    },
    onClear(e) {
      console.debug('clear', e);
      updateField({
        value: { $set: null }
      });
    },
    onChangeValue(newOptions, e) {
      console.debug('change', newOptions, e);
      const $set = multiChoice ? newOptions.map(({ id }) => (id)) : newOptions.id;
      updateField({
        value: { $set },
        errors: { $set: null }
      });
    },
    onClose() {
      console.debug('close');
    },
    value,
    items
  });
};
