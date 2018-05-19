export const validateValue = (value, widget = {}, options = {}) => {
  const {
    errorsConfig: E,
    checkEmptyOnBlur = true,
    customValidator
  } = options;

  if ('required' in widget && widget.required === true && checkEmptyOnBlur && !value) {
    return E.FLD_VALUE_REQUIRED();
  }

  if (value && 'maxLen' in widget) {
    const length = value.length;
    if (length > widget.maxLen) {
      return E.FLD_MAX_LEN_EXCEEDED(widget.maxLen, length);
    }
  }

  if (value && 'minLen' in widget) {
    const length = value.length;
    if (length < widget.minLen) {
      return E.FLD_MIN_LEN_EXCEEDED(widget.minLen, length);
    }
  }

  if (value && 'maxValue' in widget) {
    const val = parseFloat(value);
    if (isNaN(val)) {
      return E.FLD_INVLD_VALUE();
    }
    if (val > widget.maxValue) {
      return E.FLD_MAX_VALUE_EXCEEDED(widget.maxValue, val);
    }
  }

  if (value && 'minValue' in widget) {
    const val = parseFloat(value);
    if (isNaN(val)) {
      return E.FLD_INVLD_VALUE();
    }
    if (val < widget.minValue) {
      return E.FLD_MIN_VALUE_EXCEEDED(widget.minValue, val);
    }
  }

  if (value && 'regex' in widget) {
    const r = new RegExp(widget.regex, 'g');
    if (!value.match(r)) {
      return E.FLD_INVLD_REGEX_MATCH();
    }
  }

  if (value && 'items' in widget) {
    const item = widget.items.find((elm) => (elm.id === value));
    if (!item) {
      return E.FLD_INVLD_ITEM_SELECTED();
    }
  }

  if (customValidator && typeof customValidator === 'function') {
    return customValidator(value, widget, E);
  }

  return null;
};


export const sanitizeValue = (value) => {
  return value || '';
};


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
  const { value, widget: { required, disabled, ...widget }, errors, hints, warnings, focused } = field;
  const { validateOnBlur, /*preventInvalidCharacters = false, */preventExceedMaxLength = true } = options;
  const cache = sanitizeValue(value);

  const updateField = (spec, callback) => {
    updateFields({
      [key]: spec
    }, callback);
  };

  return {
    onBlur(e) {
      console.debug('blur', e);
      const $set = validateOnBlur ? errors || validateValue(value, widget, options) : null;
      updateField({
        errors: { $set },
        focused: { $set: false }
      });
    },
    onFocus(e) {
      console.debug('focus', e);
      updateField({
        errors: { $set: null },
        focused: { $set: true },
        hints: { $set: null },
        warnings: { $set: null }
      });
    },
    onChangeValue(newValue, e) {
      console.debug('change', newValue, e);
      updateField({
        errors: { $set: null },
        hints: { $set: null },
        warnings: { $set: null },
        value: { $set: (newValue.length > widget.maxLen && preventExceedMaxLength) ? value : newValue }
      });
    },
    onDelete() {},
    onEnter() {},
    onTab() {},
    onBackspace() {},
    onKeyDown() {},
    onKeyPress() {},
    onKeyUp(e) {
      const isContentEditable = e.target.tagName.toLowerCase !== 'input' && e.target.contentEditable === 'true';
      const newValue = e.target.innerText;
      if (isContentEditable && newValue !== value) {
        updateField({
          errors: { $set: null },
          hints: { $set: null },
          warnings: { $set: null },
          value: { $set: (newValue.length > widget.maxLen && preventExceedMaxLength) ? value : newValue }
        });
      }
    },
    onMouseDown() {},
    onMouseUp() {},
    cache,
    disabled,
    focused,
    hints,
    errors,
    required,
    value,
    warnings,
    widget
  };
};
