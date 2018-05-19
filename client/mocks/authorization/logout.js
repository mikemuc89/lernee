import flow from '../common/flow';

const end = {
  redirect: {
    id: 'HOME',
    params: {}
  },
  notices: [{
    id: 'LOGGED_OUT',
    text: 'Wylogowano pomyślnie'
  }],
  user: null
};

/*
  request: { action, data, step }
*/

export default (request) => {
  return flow({ end, request });
};
