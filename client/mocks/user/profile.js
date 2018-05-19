/*
  request: {}
*/

export default (/* request */) => {
  return {
    data: {
      id: '123',
      login: 'jkowalski',
      email: 'jan.kowalski@netgis.com.pl',
      nip: '1234567890',
      regon: '012345678',
      phone: '234645654',
      admin: true
    },
    functions: [{
      id: 'USER_CHANGE_PASSWORD'
    }, {
      id: 'USER_COURSES'
    }]
  };
};
