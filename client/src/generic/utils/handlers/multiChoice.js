import defaultHandler from './defaultHandler';


export default ({
  field,
  key,
  /* state, */
  updateFields,
  options = {
    errorsConfig: {}
  }
}) => {
  const defaultHandlerProps = defaultHandler({ field, key, /* state, */updateFields, options });

  const { value } = field;

  const updateField = (spec, callback) => {
    updateFields({
      [key]: spec
    }, callback);
  };

  return Object.assign(defaultHandlerProps, {
    onChangeValue(id, e) {
      console.debug('change', id, e);
      const $set = Array.isArray(value) && (value.includes(id) ? value.filter((item) => item !== id) : value.concat([id])) || [id];
      updateField({
        value: { $set },
        errors: { $set: null }
      });
    },
    value
  });
};
