import flow from '../common/flow';

const transitions = {
  step_1: 'step_2',
  step_2: '_end_'
};

const form = {
  step_1: {
    login: {
      value: 'j.kowalski',
      fieldType: 'login'
    },
    email: {
      value: 'j.kowalski.abc@netgis.com.pl',
      fieldType: 'email'
    },
    emailRe: {
      value: 'j.kowalski.abc@netgis.com.pl',
      fieldType: 'email'
    },
    password: {
      value: '',
      fieldType: 'password'
    },
    passwordRe: {
      value: '',
      fieldType: 'password'
    },
    name: {
      value: 'Jan Kowalski',
      fieldType: 'str'
    },
    acceptTerms: {
      value: true,
      fieldType: 'bool'
    },
    isBusiness: {
      value: false,
      fieldType: 'bool'
    }
  }
};

const end = {
  redirect: {
    id: 'COURSES_FREE',
    params: {}
  },
  notices: [{
    id: 'MAIL_SENT',
    text: 'Rejestracja pomyślna. Wysłano mail potwierdzający.'
  }]
};

/*
  request: { action, data, step }
*/

export default (request) => {
  return flow({ form, end, transitions, request });
};
