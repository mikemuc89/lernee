import flow from '../common/flow';

const transitions = {
  step_1: 'step_2',
  step_2: '_end_'
};

const form = {
  step_1: {
    acceptTerms: {
      value: true,
      fieldType: 'bool'
    }
  }
};

const data = {
  step_1: {
    courseTitle: 'Lorem ipsum dolor sit amet.'
  }
};

const end = {
  redirect: {
    id: 'HOME',
    params: {}
  },
  notices: [{
    id: 'REGISTERED',
    text: 'Zarejestrowany. Sprawdź mail.'
  }]
};

/*
  request: { action, data, step }
*/

export default (request) => {
  return flow({ form, data, end, transitions, request });
};
