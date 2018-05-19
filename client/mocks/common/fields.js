const FIELD_FORMATS = {
  BASIC: 'basic',
  COMPLEX: 'complex',
  LIST: 'list'
};

const field = ({ value = null, errors = null, hints = null, warnings = null, required = false, fieldType = 'str', widgetProps = {} } = {}) => {
  const fieldFormat = FIELD_FORMATS.BASIC;
  return {
      value,
      errors,
      hints,
      warnings,
      widget: {
        required,
        fieldFormat,
        fieldType,
        ...(fieldWidgetProps[fieldType] || {}),
        ...widgetProps
      }
  };
};

const complexField = (subFields, { errors = null, hints = null, warnings = null, fieldType, required = false } = {}) => {
  const fieldFormat = FIELD_FORMATS.COMPLEX;
  const fieldKeys = Object.keys(subFields);
  const baseStructure = { value: {}, errors, hints, warnings, widget: { fieldFormat, fieldType, fieldKeys, required } };
  return fieldKeys.reduce((result, subKey) => {
    const subField = field(subFields[subKey]);
    const { widget, ...props } = subField;
    result.value[subKey] = props;
    result.widget[subKey] = widget;
    return result;
  }, baseStructure);
};

const listField = (subFields, { errors = null, hints = null, warnings = null } = {}) => {
  const fieldFormat = FIELD_FORMATS.LIST;
  const fieldKeys = Object.keys(subFields);
  const baseStructure = { value: [], errors, hints, warnings, widget: { fieldFormat, fieldKeys } };
  // return fieldKeys.reduce((result, subKey) => {
  //   const subField = field(subfields[subKey]);
  //   return Object.keys(subField).reduce((res, prop) => {
  //     res[prop][subKey] = subfields[prop];
  //   }, result);
  // }, baseStructure);
};

const fieldWidgetProps = {
  account: {
    maxLen: 32,
    minLen: 26,
    regex: '^[0-9 ]+$'
  },
  autocomplete: {},
  bool: {},
  choice: {},
  date: {},
  email: {
    regex: '^[\\w-.]+@([\\w-]+\\.)+[\\w-]+$'
  },
  'float': {
    regex: '^[0-9]+((\\.|\\,)[0-9]+)?$'
  },
  iban: {
    maxLen: 30,
    minLen: 6,
    regex: '^[A-Za-z]{2}[0-9]{2}[A-Za-z0-9]{2,26}'
  },
  'int': {
    regex: '^[0-9]+$'
  },
  login: {
    minLen: 5,
    regex: '^[A-Za-z0-9][A-Za-z0-9_.]+[A-Za-z0-9]$'
  },
  nip: {
    maxLen: 13,
    minLen: 10,
    regex: '^[0-9\\-]+$'
  },
  nrdow: {
    maxLen: 9,
    minLen: 9,
    regex: '^[A-Za-z]{3}[0-9]{6}$'
  },
  multiChoice: {},
  passport: {
    maxLen: 9,
    minLen: 9,
    regex: '^[A-Za-z]{2}[0-9]{7}$'
  },
  password: {
    minLen: 5,
    regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*\\(\\)\\-\\_\\+\\=\\{\\{\\}\\[\\]:;\\"\\\'\\<\\>,./?]).+$'
  },
  regon: {
    maxLen: 14,
    minLen: 9,
    regex: '^([0-9]{9}|[0-9]{14})$'
  },
  search: {
    minLen: 3,
    regex: '^[\\w\\. ]+$'
  },
  str: {}
};

const accountField = ({ value, errors, hints, warnings, required, widgetProps } = {}) => {
  const fieldType = 'account';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const autocompleteField = ({ value, errors, hints, warnings, required, widgetProps } = {}) => {
  const fieldType = 'autocomplete';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const boolField = ({ value, errors, hints, warnings, required, widgetProps } = {}) => {
  const fieldType = 'bool';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const choiceField = ({ value, errors, hints, warnings, required, widgetProps = { items: [] } } = {}) => {
  const fieldType = 'bool';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const dateField = ({ value, errors, hints, warnings, required, widgetProps } = {}) => {
  const fieldType = 'date';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const dateRangeField = ({ dateFrom = {}, dateTo = {} } = {}, { errors, hints, warnings, required } = {}) => {
  const fieldType = 'dateRange';
  return complexField({ dateFrom: { ...dateFrom, fieldType: 'date' }, dateTo: { ...dateTo, fieldType: 'date' } }, { errors, hints, warnings, fieldType, required });
};

const emailField = ({ value, errors, hints, warnings, required = true, widgetProps } = {}) => {
    const fieldType = 'email';
    return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const floatField = ({ value, errors, hints, warnings, required, widgetProps } = {}) => {
    const fieldType = 'float';
    return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const ibanField = ({ value, errors, hints, warnings, required, widgetProps } = {}) => {
  const fieldType = 'iban';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const intField = ({ value, errors, hints, warnings, required, widgetProps } = {}) => {
  const fieldType = 'int';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const loginField = ({ value, errors, hints, warnings, required = true, widgetProps } = {}) => {
  const fieldType = 'login';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const multiChoiceField = ({ value, errors, hints, warnings, required = true, widgetProps = { items: [] } } = {}) => {
  const fieldType = 'multiChoice';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const nipField = ({ value, errors, hints, warnings, required, widgetProps } = {}) => {
  const fieldType = 'nip';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const nrdowField = ({ value, errors, hints, warnings, required, widgetProps } = {}) => {
  const fieldType = 'nrdow';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const passportField = ({ value, errors, hints, warnings, required, widgetProps } = {}) => {
  const fieldType = 'passport';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const passwordField = ({ value, errors, hints, warnings, required = true, widgetProps } = {}) => {
  const fieldType = 'password';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const regonField = ({ value, errors, hints, warnings, required, widgetProps } = {}) => {
  const fieldType = 'regon';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const searchField = ({ value, errors, hints, warnings, required, widgetProps } = {}) => {
  const fieldType = 'search';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

const strField = ({ value, errors, hints, warnings, required, widgetProps } = {}) => {
  const fieldType = 'str';
  return field({ value, errors, hints, warnings, required, fieldType, widgetProps });
};

export {
  accountField,
  autocompleteField,
  boolField,
  choiceField,
  dateField,
  dateRangeField,
  emailField,
  floatField,
  ibanField,
  intField,
  loginField,
  multiChoiceField,
  nipField,
  nrdowField,
  passportField,
  passwordField,
  regonField,
  searchField,
  strField
};

export default field;
