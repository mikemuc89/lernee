import flow from '../common/flow';

const transitions = {
  step_1: 'step_2',
  step_2: '_end_'
};

const form = {
  step_1: {
    email: {
      value: 'j.kowalski.abc@netgis.com.pl',
      widgetProps: { disabled: true },
      prefill: true,
      fieldType: 'email'
    },
    password: {
      value: '',
      fieldType: 'password'
    },
    passwordRe: {
      value: '',
      fieldType: 'password'
    }
  }
};

const end = {
  redirect: {
    id: 'COURSES_FREE',
    params: {}
  },
  notices: [{
    id: 'CONFIRMED',
    text: 'Wylogowano pomyślnie'
  }]
};

/*
  request: { action, data, step }
*/

export default (request) => {
  return flow({ form, end, transitions, request });
};
