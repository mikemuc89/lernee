/*
  request: { action, data, step }
*/

export default (/* request */) => {
  return {
    step: '_end_',
    notices: [{
      id: 'EMAIL_CONFIRMED',
      text: 'Potwierdzono mail'
    }]
  };
};
