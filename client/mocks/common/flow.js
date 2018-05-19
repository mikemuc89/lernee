import {
  accountField,
  boolField,
  choiceField,
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
} from './fields';

const typeToFieldMap = {
  account: accountField,
  bool: boolField,
  choice: choiceField,
  email: emailField,
  'float': floatField,
  iban: ibanField,
  'int': intField,
  login: loginField,
  multiChoice: multiChoiceField,
  nip: nipField,
  nrdow: nrdowField,
  passport: passportField,
  password: passwordField,
  regon: regonField,
  search: searchField,
  str: strField
};

const isEndStep = (step, transitions) => {
  return transitions[step] === '_end_';
};

const getPreviousStep = (step, transitions) => {
  return Object.keys(transitions).find((key) => {
    return transitions[key] === step;
  });
};

const getNextStep = (step, transitions) => {
  return transitions[step];
};

const prepareStep = (step, form, data, reqData, fillForm = false) => {
  return Object.assign({
    step
  }, form['step_1'] && {
    fields: {
      errors: null,
      ...(Object.keys(form[step]).reduce((result, key) => {
        const specField = form[step][key];
        const { fieldType, required, widgetProps, value, prefill = false } = specField;
        const field = typeToFieldMap[fieldType];
        return Object.assign(result, {
          [key]: field({ value: (fillForm || prefill) ? value : null, errors: null, required, widgetProps })
        });
      }, {}))
    }
  }, (data[step] || reqData) && {
    data: {
      ...(reqData || {}),
      ...(data[step] || {})
    }
  });
};

export default ({ form, data, end, transitions, request }) => {
  const { action, data: reqData = {}, step } = request;

  if (!step && !action) {
    if (!form && !data) {
      return end;
    }
    return prepareStep('step_1', form, data, reqData);
  }

  if (action === 'submit') {
    const nextStep = getNextStep(step, transitions);
    return prepareStep(nextStep, form, data, reqData);
  }

  if (isEndStep(step, transitions) && action === 'submit') {
    return end;
  }

  if (action === 'back') {
    const prevStep = getPreviousStep(step, transitions);
    return prepareStep(prevStep, form, data, {}, true);
  }

  return {
    errors: 'Błąd zaślepkowy aplikacji, nieobsłużony przypadek wywołania'
  };
};
