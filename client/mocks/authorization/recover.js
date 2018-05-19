import flow from '../common/flow';

const transitions = {
  step_1: '_end_'
};

const form = {
  step_1: {
    email: {
      value: 'asdasdff.fdf.98@asdasd.pl',
      fieldType: 'email'
    }
  }
};

const end = {
  redirect: {
    id: 'HOME',
    params: {}
  },
  notices: [{
    id: 'MAIL_SENT',
    text: 'E-mail został wysłany na skrzynkę pocztową powiązaną z kontem w serwisie'
  }]
};

/*
  request: { action, data, step }
*/

export default (request) => {
  return flow({ form, end, transitions, request });
};
