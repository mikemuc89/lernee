import flow from '../common/flow';

const transitions = {
  step_1: '_end_'
};

const form = {
  step_1: {
    login: {
      value: 'asdasdff.fdf.98',
      fieldType: 'login'
    },
    password: {
      value: '',
      fieldType: 'password'
    }
  }
};

const end = {
  redirect: {
    id: 'HOME',
    params: {}
  },
  notices: [{
    id: 'LOGGED_IN',
    text: 'Zalogowano pomyślnie, żadnych przyciskow i akcji'
  }],
  user: {
    admin: true,
    email: 'j.kowalski.login@netgis.com.pl',
    login: 'j.kowalski.login',
    name: 'Jan Kowalski Logowany'
  }
};

/*
  request: { action, data, step }
*/

export default (request) => {
  return flow({ form, end, transitions, request });
};
