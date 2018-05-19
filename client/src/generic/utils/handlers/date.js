import { validateValue, sanitizeValue } from './defaultHandler';
import { dateToString, stringToDate } from '../converters/date';
import dateValidator, { FULL_DATE_REGEX, PARTIAL_DATE_REGEX } from '../validators/date';


const LITERALS = {
  DATE_INPUT_GO_TO_TODAY: 'Dziś',
  DATE_INPUT_PLACEHOLDER: '____-__-__'
};

const MONTHS = [
  'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
];

const WEEKDAYS_LONG = [
  'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'
];

const WEEKDAYS_SHORT = [
  'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'
];

const commonDayPickerProps = {
  format: 'YYYY-MM-DD',
  parseDate: stringToDate,
  placeholder: LITERALS.DATE_INPUT_PLACEHOLDER,
  showOutsideDays: true,
  todayButton: LITERALS.DATE_INPUT_GO_TO_TODAY,
  inputProps: {
    className: 'input'
  },
  dayPickerProps: {
    firstDayOfWeek: 1,
    locale: 'pl',
    showOutsideDays: true,
    months: MONTHS,
    weekdaysShort: WEEKDAYS_SHORT,
    weekdaysLong: WEEKDAYS_LONG
  }
};

const validateDate = (value, widget, options) => {
  const {
    errorsConfig: E,
    checkEmptyOnBlur
  } = options;

  if ('required' in widget && widget.required === true && checkEmptyOnBlur && !value) {
    return E.FLD_VALUE_REQUIRED();
  }

  const valueDate = new Date(value);

  if (value && (!value.match(FULL_DATE_REGEX) || isNaN(valueDate.getDate()) || !dateValidator(value))) {
    return E.FLD_INVLD_VALUE();
  }

  if (value && 'maxDate' in widget) {
    const maxDate = new Date(widget.maxDate);
    if (valueDate > maxDate) {
      return E.FLD_MAX_DATE_EXCEEDED(widget.maxDate, value);
    }
  }

  if (value && 'minDate' in widget) {
    const minDate = new Date(widget.minDate);
    if (valueDate < minDate) {
      return E.FLD_MIN_DATE_EXCEEDED(widget.minDate, value);
    }
  }

  if (value && 'disabledDays' in widget) {
    const { disabledDays } = widget;
    if (disabledDays.find((item) => ((new Date(item)).getDate() === valueDate.getDate()))) {
      return E.FLD_INVLD_VALUE();
    }
  }

  return null;
};

const validatePartialDate = (value, widget, options) => {
  const { errorsConfig: E } = options;

  if (!value.match(PARTIAL_DATE_REGEX)) {
    return E.FLD_INVLD_VALUE();
  }
  return null;
};

const getDisabledDays = (widget) => {
  const { maxDate, minDate, disabledDays } = widget;
  return [Object.assign({}, maxDate && {
    after: new Date(maxDate)
  }, minDate && {
    before: new Date(minDate)
  })].concat(disabledDays ? disabledDays.map((item) => (new Date(item))) : []);
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
  const { value, widget: { required, disabled, ...widget }, errors, hints, warnings } = field;
  const { validateOnBlur = true } = options;
  const cache = sanitizeValue(value);

  const updateField = (spec, callback) => {
    updateFields({
      [key]: spec
    }, callback);
  };

  return {
    ...commonDayPickerProps,

    onDayChange: (newDate) => {
      const newDateString = newDate ? dateToString(newDate) : '';
      updateField({
        value: { $set: newDateString },
        errors: { $set: null }
      });
    },

    inputProps: {
      ...commonDayPickerProps.inputProps,
      onFocus(e) {
        console.debug('focus', e);
        updateField({
          errors: { $set: null },
          focused: { $set: true },
          hints: { $set: null },
          warnings: { $set: null }
        });
      },
      onBlur(e) {
        console.debug('blur', e);
        const $set = validateOnBlur ? errors || validateValue(value, widget, options) || validateDate(value, widget, options) : null;
        updateField({
          errors: { $set },
          focused: { $set: false }
        });
      },
      onChange(e) {
        const newValue = e.target.value.replace(/-/g, '').split('').reduce((result, item, index) => {
          if (index === 4 || index === 6) {
            return result.concat('-').concat(item);
          }
          return result.concat(item);
        }, []).concat(e.target.value[e.target.value.length - 1] === '-' ? '-' : '').join('');
        console.debug('change', newValue, e);
        const $set = validatePartialDate(newValue, widget, options) ? value : newValue;
        e.target.value = $set;
        updateField({
          errors: { $set: null },
          hints: { $set: null },
          warnings: { $set: null },
          value: { $set }
        });
      }
    },

    dayPickerProps: {
      ...commonDayPickerProps.dayPickerProps,
      disabledDays: getDisabledDays(widget)
    },

    value: cache,
    errors,
    warnings,
    hints,
    disabled,
    required
  };
};
