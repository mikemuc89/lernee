import flow from '../common/flow';

const transitions = {
  step_1: 'step_2',
  step_2: '_end_'
};

const form = {
  step_1: {
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
    text: 'Pomyślna zmiana hasła'
  }]
};

/*
  request: { action, data, step }
*/

export default (request) => {
  return flow({ form, end, transitions, request });
};
