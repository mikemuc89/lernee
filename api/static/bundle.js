webpackJsonp([0],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errors = __webpack_require__(116);

var _errors2 = _interopRequireDefault(_errors);

var _home = __webpack_require__(117);

var _home2 = _interopRequireDefault(_home);

var _init = __webpack_require__(118);

var _init2 = _interopRequireDefault(_init);

var _notify = __webpack_require__(119);

var _notify2 = _interopRequireDefault(_notify);

var _search = __webpack_require__(120);

var _search2 = _interopRequireDefault(_search);

var _contact = __webpack_require__(121);

var _contact2 = _interopRequireDefault(_contact);

var _info = __webpack_require__(122);

var _info2 = _interopRequireDefault(_info);

var _a = __webpack_require__(123);

var _a2 = _interopRequireDefault(_a);

var _a3 = __webpack_require__(124);

var _a4 = _interopRequireDefault(_a3);

var _b = __webpack_require__(125);

var _b2 = _interopRequireDefault(_b);

var _x = __webpack_require__(126);

var _x2 = _interopRequireDefault(_x);

var _dashboard = __webpack_require__(127);

var _dashboard2 = _interopRequireDefault(_dashboard);

var _payments = __webpack_require__(128);

var _payments2 = _interopRequireDefault(_payments);

var _users = __webpack_require__(129);

var _users2 = _interopRequireDefault(_users);

var _confirmMail = __webpack_require__(130);

var _confirmMail2 = _interopRequireDefault(_confirmMail);

var _confirmRecover = __webpack_require__(131);

var _confirmRecover2 = _interopRequireDefault(_confirmRecover);

var _login = __webpack_require__(132);

var _login2 = _interopRequireDefault(_login);

var _logout = __webpack_require__(133);

var _logout2 = _interopRequireDefault(_logout);

var _recover = __webpack_require__(134);

var _recover2 = _interopRequireDefault(_recover);

var _register = __webpack_require__(135);

var _register2 = _interopRequireDefault(_register);

var _details = __webpack_require__(136);

var _details2 = _interopRequireDefault(_details);

var _exam = __webpack_require__(137);

var _exam2 = _interopRequireDefault(_exam);

var _free = __webpack_require__(138);

var _free2 = _interopRequireDefault(_free);

var _premium = __webpack_require__(139);

var _premium2 = _interopRequireDefault(_premium);

var _register3 = __webpack_require__(140);

var _register4 = _interopRequireDefault(_register3);

var _topic = __webpack_require__(141);

var _topic2 = _interopRequireDefault(_topic);

var _topics = __webpack_require__(142);

var _topics2 = _interopRequireDefault(_topics);

var _changePassword = __webpack_require__(143);

var _changePassword2 = _interopRequireDefault(_changePassword);

var _courses = __webpack_require__(144);

var _courses2 = _interopRequireDefault(_courses);

var _profile = __webpack_require__(145);

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  'api/errors': _errors2.default,
  'api/home': _home2.default,
  'api/init': _init2.default,
  'api/notify': _notify2.default,
  'api/search': _search2.default,

  'api/about/contact': _contact2.default,
  'api/about/info': _info2.default,
  'api/about/info/a': _a2.default,
  'api/about/info/a/a': _a4.default,
  'api/about/info/a/b': _b2.default,
  'api/about/x': _x2.default,

  'api/administration/dashboard': _dashboard2.default,
  'api/administration/payments': _payments2.default,
  'api/administration/users': _users2.default,

  'api/authorization/confirm-mail': _confirmMail2.default,
  'api/authorization/confirm-recover': _confirmRecover2.default,
  'api/authorization/login': _login2.default,
  'api/authorization/logout': _logout2.default,
  'api/authorization/recover': _recover2.default,
  'api/authorization/register': _register2.default,

  'api/courses/details': _details2.default,
  'api/courses/exam': _exam2.default,
  'api/courses/free': _free2.default,
  'api/courses/premium': _premium2.default,
  'api/courses/register': _register4.default,
  'api/courses/topic': _topic2.default,
  'api/courses/topics': _topics2.default,

  'api/user/change-password': _changePassword2.default,
  'api/user/courses': _courses2.default,
  'api/user/profile': _profile2.default
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/App/fakeRoutes.js');
}();

;

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {
    errors: 'Zaślepkowy błąd aplikacji'
  };
};

/*
  request: {}
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/errors.js');
}();

;

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {
    news: [{
      title: 'Tytuł newsa 1',
      text: 'Fusce vel nisi eget metus porta consectetur malesuada eget mauris. Etiam consectetur varius dui, a aliquam dui condimentum eget. Ut gravida arcu eget dui accumsan, vitae fermentum nisl ultricies.',
      pubDate: '2017-09-01 12:13',
      author: {
        name: 'Nazwa Użytkownika',
        login: 'nazwa_uzytkownika',
        email: 'uzytkownik@netgis.com.pl',
        admin: true
      }
    }, {
      title: 'Tytuł newsa 2',
      text: 'Fusce vel nisi eget metus porta consectetur malesuada eget mauris. Etiam consectetur varius dui, a aliquam dui condimentum eget. Ut gravida arcu eget dui accumsan, vitae fermentum nisl ultricies.',
      pubDate: '2017-08-23 18:13',
      author: {
        name: 'Nazwa Użytkownika 3',
        login: 'nazwa_uzytkownika_3',
        email: 'uzytkownik3@netgis.com.pl',
        admin: true
      }
    }, {
      title: 'Tytuł newsa 3',
      text: 'Fusce vel nisi eget metus porta consectetur malesuada eget mauris. Etiam consectetur varius dui, a aliquam dui condimentum eget. Ut gravida arcu eget dui accumsan, vitae fermentum nisl ultricies.',
      pubDate: '2017-08-16 11:13',
      author: {
        name: 'Nazwa Użytkownika 2',
        login: 'nazwa_uzytkownika_2',
        email: 'uzytkownik2@netgis.com.pl',
        admin: true
      }
    }, {
      title: 'Tytuł newsa 4',
      text: 'Fusce vel nisi eget metus porta consectetur malesuada eget mauris. Etiam consectetur varius dui, a aliquam dui condimentum eget. Ut gravida arcu eget dui accumsan, vitae fermentum nisl ultricies.',
      pubDate: '2017-09-01 12:13',
      author: {
        name: 'Nazwa Użytkownika',
        login: 'nazwa_uzytkownika',
        email: 'uzytkownik@netgis.com.pl',
        admin: true
      }
    }]
  };
};

/*
  request: {}
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/home.js');
}();

;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fields = __webpack_require__(39);

/*
  request: {}
*/

var _default = function _default() /* request */{
  return {
    fields: {
      search: (0, _fields.searchField)({ value: 'Abcde Fgh', widgetProps: { maxLen: 55, disabled: false } }),
      datedate: (0, _fields.dateField)({ required: true }),
      daterange: (0, _fields.dateRangeField)({ required: true }),
      autocom: (0, _fields.autocompleteField)({ value: [3, 5, 6], errors: 'asdasd asdasd', widgetProps: { disabled: true, required: true, items: [{ id: 1, data: 'Zagłębie Sosnowiec' }, { id: 2, data: 'Zagłębie Lubin' }, { id: 3, data: 'Legia Chełmża' }, { id: 4, data: 'Legia Warszawa' }, { id: 5, data: 'Arka Gdynia' }, { id: 6, data: 'KTS Weszło' }, { id: 7, data: 'Śląsk Wrocław' }, { id: 8, data: 'Jagiellonia Białystok' }, { id: 9, data: 'Sandecja Nowy Sącz' }, { id: 10, data: 'Bruk-Bet Nieciecza' }, { id: 11, data: 'Lech Poznań' }, { id: 12, data: 'Gornik Zabrze' }, { id: 13, data: 'Gornik Łęczna' }, { id: 14, data: 'Pogoń Szczecin' }, { id: 15, data: 'Piast Gliwice' }, { id: 16, data: 'Wisła Krakow' }, { id: 17, data: 'Wisła Płock' }], multiChoice: true } }),
      rdgrp: (0, _fields.choiceField)({ value: 2, errors: 'Asdasd', widgetProps: { disabled: true, required: true, items: [{ id: 1, data: 'Zagłębie Sosnowiec' }, { id: 2, data: 'Zagłębie Lubin' }, { id: 3, data: 'Legia Chełmża' }, { id: 4, data: 'Legia Warszawa' }] } }),
      multichk: (0, _fields.multiChoiceField)({ value: [1, 2], widgetProps: { required: true, hints: 'FsdfF SDfsf', items: [{ id: 1, data: 'Zagłębie Sosnowiec' }, { id: 2, data: 'Zagłębie Lubin' }, { id: 3, data: 'Legia Chełmża' }, { id: 4, data: 'Legia Warszawa' }] } }),
      chk: (0, _fields.boolField)({ value: true, widgetProps: { required: true, disabled: true } }),
      rdo: (0, _fields.boolField)({ value: true, widgetProps: { required: true, disabled: true } })
    },
    links: [{
      id: 'facebook',
      url: 'http://www.facebook.com'
    }, {
      id: 'twitter',
      url: 'http://www.twitter.com'
    }, {
      id: 'mail',
      url: 'mailto:biuro@netgis.com.pl'
    }],
    menu: [{
      id: 'HOME'
    }, {
      id: 'ABOUT_INFO'
    }, {
      id: 'COURSES_FREE'
    }, {
      id: 'COURSES_PREMIUM'
    }, {
      id: 'USER_PROFILE'
    }, {
      id: 'ADMINISTRATION_DASHBOARD'
    }],
    notices: [{
      id: 'COOKIES',
      actions: ['close'],
      text: 'Notice z linkiem wewnętrznym jako id i akcją SS na linku zewn.',
      icon: 'info',
      button: {
        link: 'ADMINISTRATION_DASHBOARD',
        text: 'Administracja'
      },
      link: {
        link: 'http://www.onet.pl',
        text: 'Przejdź na Onet',
        action: 'onet'
      }
    }, {
      id: 'NOTICE_2',
      actions: ['accept', 'reject'],
      text: 'Notice z linkiem wewnętrznym jako path i akcją SS na linku zewn.',
      icon: 'exclamation',
      button: {
        link: 'courses/free',
        text: 'Administracja'
      },
      link: {
        link: 'http://www.onet.pl',
        text: 'Przejdź na Onet',
        action: 'goto'
      }
    }, {
      id: 'NOTICE_3',
      text: 'Notice bez ikonki i bez przyciskow'
    }, {
      id: 'NOTICE_ERROR',
      text: 'Notice, na ktorym akcja powoduje błędny status odpowiedzi'
    }],
    user: {
      admin: true,
      email: 'j.kowalski@netgis.com.pl',
      login: 'j.kowalski',
      name: 'Jan Kowalski'
    }
  };
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/init.js');
}();

;

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(request) {
  var id = request.id;


  if (id === 'NOTICE_ERROR') {
    return {
      status: 'NOT-OK'
    };
  }

  return {
    status: 'OK'
  };
};

/*
  request: { id, action }
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/notify.js');
}();

;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var mapItems = function mapItems(items, data, functions) {
  return items.map(function (item) {
    return {
      cells: Object.keys(item).map(function (key) {
        return {
          columnId: key,
          value: item[key]
        };
      }, []),
      data: data,
      functions: functions
    };
  });
};

var filterFieldTypes = {
  hasCertificate: 'bool',
  hasQuestions: 'bool',
  hasToAnswerQuestions: 'bool',
  isPassed: 'bool',
  isTaken: 'bool',
  price: 'amountRangePrice',
  title: 'str'
};

var filterWidgetProps = {
  amountRange: {},
  amountRangePrice: {},
  bool: { items: [{ id: 'yes', data: 'Tak' }, { id: 'no', data: 'Nie' }], required: false },
  _default: { minLen: 3, required: false },
  str: { minLen: 3, required: false }
};

var mapFilters = function mapFilters(filtersSpec, filters) {
  return filtersSpec.map(function (key) {
    var filterWidgetPropsKey = key in filterWidgetProps && key || filterFieldTypes[key] in filterWidgetProps && filterFieldTypes[key] || '_default';
    return {
      value: key in filters ? filters[key] : null,
      errors: null,
      widget: Object.assign({
        fieldType: filterFieldTypes[key] || 'str'
      }, filterWidgetProps[filterWidgetPropsKey])
    };
  });
};

var _default = function _default(_ref) {
  var columns = _ref.columns,
      items = _ref.items,
      itemFunctions = _ref.itemFunctions,
      itemData = _ref.itemData,
      filters = _ref.filters,
      sorting = _ref.sorting,
      page = _ref.page,
      filtersSpec = _ref.filtersSpec,
      data = _ref.data,
      functions = _ref.functions;

  return Object.assign({
    columns: columns,
    items: mapItems(items, itemData, itemFunctions),
    filters: mapFilters(filtersSpec, filters),
    sorting: sorting,
    page: page
  }, data && {
    data: data
  }, functions && {
    functions: functions
  });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapItems, 'mapItems', '/var/projects/netgis-tutorials/client/mocks/common/pager.js');

  __REACT_HOT_LOADER__.register(filterFieldTypes, 'filterFieldTypes', '/var/projects/netgis-tutorials/client/mocks/common/pager.js');

  __REACT_HOT_LOADER__.register(filterWidgetProps, 'filterWidgetProps', '/var/projects/netgis-tutorials/client/mocks/common/pager.js');

  __REACT_HOT_LOADER__.register(mapFilters, 'mapFilters', '/var/projects/netgis-tutorials/client/mocks/common/pager.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/common/pager.js');
}();

;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pager = __webpack_require__(12);

var _pager2 = _interopRequireDefault(_pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  request: { filters, sorting, page }
*/

var columns = [{
  id: 'title',
  sortable: true
}, {
  id: 'type',
  sortable: true
}, {
  id: 'text',
  sortable: false
}];

var items = [{
  title: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut.',
  text: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut, ullamcorper tempus ex. Aliquam mauris elit, hendrerit ac sollicitudin quis, porttitor nec dui. Cras volutpat venenatis ipsum.',
  type: 'Kurs'
}, {
  title: 'Praesent sodales diam nibh, eu laoreet ante tristique quis.',
  text: 'Praesent sodales diam nibh, eu laoreet ante tristique quis. Praesent facilisis, lectus id porttitor sollicitudin, purus felis consectetur purus, id malesuada lacus nisi in metus. Morbi vel gravida nibh, eget malesuada dui.',
  type: 'Temat'
}, {
  title: 'Nulla maximus maximus nunc, at convallis ex gravida a.',
  text: 'Integer in nisi vel sapien placerat luctus. Aenean aliquam mi ut est sagittis laoreet. Proin rhoncus eleifend tortor egestas suscipit. Vivamus in risus sed diam fringilla euismod.',
  type: 'Kurs'
}];

var itemData = {
  id: '532'
};

var filtersSpec = [];

var _default = function _default(request) {
  var filters = request.filters,
      sorting = request.sorting,
      page = request.page;


  return (0, _pager2.default)({ columns: columns, items: items, itemData: itemData, filters: filters, sorting: sorting, page: page, filtersSpec: filtersSpec });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(columns, 'columns', '/var/projects/netgis-tutorials/client/mocks/search.js');

  __REACT_HOT_LOADER__.register(items, 'items', '/var/projects/netgis-tutorials/client/mocks/search.js');

  __REACT_HOT_LOADER__.register(itemData, 'itemData', '/var/projects/netgis-tutorials/client/mocks/search.js');

  __REACT_HOT_LOADER__.register(filtersSpec, 'filtersSpec', '/var/projects/netgis-tutorials/client/mocks/search.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/search.js');
}();

;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {
    address: 'Al. Jerozolimskie 1, 43-423 Warszawa',
    contactDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' + 'Suspendisse molestie tortor rhoncus quam vehicula rhoncus.' + 'Sed ultrices, nulla nec dapibus venenatis, erat sem gravida nulla, et fringilla massa quam eget quam.' + 'Aliquam tristique, augue sed euismod placerat, augue metus imperdiet nisi, ac facilisis dui eros eu mi.' + 'Curabitur sagittis, quam at molestie ornare, leo diam fringilla nisi, et tincidunt justo tortor quis nibh.' + 'Proin eget placerat metus. In nec neque iaculis, lacinia tellus a, hendrerit quam.' + 'Nulla laoreet convallis ipsum, pulvinar blandit nisl porta quis.' + 'Donec risus purus, imperdiet eget leo nec, lacinia lobortis metus. Phasellus et accumsan metus.',
    facebook: 'http://www.facebook.com',
    googleplus: 'http://www.google.com',
    mail: 'asd@asdasdasd.asd.asd.asd.pl',
    name: 'Zaślepkowa nazwa serwisu',
    nip: '4236543411',
    phone: '+48 123 456 789',
    regon: '123456789',
    twitter: 'http://www.twitter.com'
  };
};

/*
  request: {}
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/about/contact.js');
}();

;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {
    facebook: 'http://www.facebook.com',
    mail: 'asd@asdasdasd.asd.asd.asd.pl',
    name: 'Zaślepkowa nazwa serwisu',
    info: 'Sed consectetur diam a dictum tempor. Nunc aliquet suscipit eleifend.' + 'Suspendisse suscipit egestas commodo. Nullam nec nulla ac tortor interdum commodo.' + 'Suspendisse facilisis ornare arcu eu facilisis. Pellentesque non tellus nibh.' + 'Cras at commodo elit, in posuere arcu. Aenean vulputate libero vel lectus fringilla, ut pellentesque lacus rhoncus.' + 'Phasellus vel dui ut mauris pellentesque gravida id elementum quam.' + 'Vivamus faucibus mi arcu, at malesuada orci pellentesque nec.' + 'Suspendisse vel facilisis purus. Cras scelerisque leo quis ultricies efficitur.' + 'Quisque vestibulum eget arcu ac consequat.',
    terms: [{
      elType: 'paragraph',
      params: {
        text: 'Aenean eu cursus dolor. Praesent fringilla sit amet lorem in tincidunt. Phasellus libero ex, ornare at pharetra vitae, consequat ac dolor. Etiam pulvinar ligula non nulla pretium, et faucibus augue sodales. Aliquam dolor enim, posuere et pulvinar porttitor, luctus eu nunc.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Donec varius fermentum tempus. Aliquam sed porttitor nisl, ornare faucibus nunc. Phasellus ac odio varius, scelerisque velit at, pellentesque dui.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras vulputate lorem diam, nec dapibus mauris suscipit et. Praesent faucibus magna eu orci tincidunt efficitur.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Nunc aliquet suscipit eleifend. Suspendisse suscipit egestas commodo. Nullam nec nulla ac tortor interdum commodo. Suspendisse facilisis ornare arcu eu facilisis.'
      }
    }]
  };
};

/*
  request: {}
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/about/info.js');
}();

;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {
    a: '1',
    d: '4'
  };
};

/*
  request: {}
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/about/info/a.js');
}();

;

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {
    d: '4',
    b: '2',
    c: '3',
    e: '5'
  };
};

/*
  request: {}
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/about/info/a/a.js');
}();

;

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {
    a: '1',
    b: '2'
  };
};

/*
  request: {}
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/about/info/a/b.js');
}();

;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {
    a: '1',
    b: '2',
    c: '3',
    d: '4'
  };
};

/*
  request: {}
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/about/x.js');
}();

;

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {
    functions: [{
      id: 'ADMINISTRATION_PAYMENTS'
    }, {
      id: 'ADMINISTRATION_EXAMS'
    }, {
      id: 'ADMINISTRATION_USERS'
    }, {
      id: 'ADMINISTRATION_QUESTIONS'
    }]
  };
};

/*
  request: {}
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/administration/dashboard.js');
}();

;

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {};
};

/*
  request: { ... }
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/var/projects/netgis-tutorials/client/mocks/administration/__payments.js");
}();

;

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {};
};

/*
  request: { ... }
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/var/projects/netgis-tutorials/client/mocks/administration/__users.js");
}();

;

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var validateValue = exports.validateValue = function validateValue(value) {
  var widget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var E = options.errorsConfig,
      _options$checkEmptyOn = options.checkEmptyOnBlur,
      checkEmptyOnBlur = _options$checkEmptyOn === undefined ? true : _options$checkEmptyOn,
      customValidator = options.customValidator;


  if ('required' in widget && widget.required === true && checkEmptyOnBlur && !value) {
    return E.FLD_VALUE_REQUIRED();
  }

  if (value && 'maxLen' in widget) {
    var length = value.length;
    if (length > widget.maxLen) {
      return E.FLD_MAX_LEN_EXCEEDED(widget.maxLen, length);
    }
  }

  if (value && 'minLen' in widget) {
    var _length = value.length;
    if (_length < widget.minLen) {
      return E.FLD_MIN_LEN_EXCEEDED(widget.minLen, _length);
    }
  }

  if (value && 'maxValue' in widget) {
    var val = parseFloat(value);
    if (isNaN(val)) {
      return E.FLD_INVLD_VALUE();
    }
    if (val > widget.maxValue) {
      return E.FLD_MAX_VALUE_EXCEEDED(widget.maxValue, val);
    }
  }

  if (value && 'minValue' in widget) {
    var _val = parseFloat(value);
    if (isNaN(_val)) {
      return E.FLD_INVLD_VALUE();
    }
    if (_val < widget.minValue) {
      return E.FLD_MIN_VALUE_EXCEEDED(widget.minValue, _val);
    }
  }

  if (value && 'regex' in widget) {
    var r = new RegExp(widget.regex, 'g');
    if (!value.match(r)) {
      return E.FLD_INVLD_REGEX_MATCH();
    }
  }

  if (value && 'items' in widget) {
    var item = widget.items.find(function (elm) {
      return elm.id === value;
    });
    if (!item) {
      return E.FLD_INVLD_ITEM_SELECTED();
    }
  }

  if (customValidator && typeof customValidator === 'function') {
    return customValidator(value, widget, E);
  }

  return null;
};

var sanitizeValue = exports.sanitizeValue = function sanitizeValue(value) {
  return value || '';
};

var _default = function _default(_ref) {
  var field = _ref.field,
      key = _ref.key,
      updateFields = _ref.updateFields,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? {
    validateOnBlur: true,
    checkEmptyOnBlur: true,
    errorsConfig: {}
  } : _ref$options;

  var value = field.value,
      _field$widget = field.widget,
      required = _field$widget.required,
      disabled = _field$widget.disabled,
      widget = _objectWithoutProperties(_field$widget, ['required', 'disabled']),
      errors = field.errors,
      hints = field.hints,
      warnings = field.warnings,
      focused = field.focused;

  var validateOnBlur = options.validateOnBlur,
      _options$preventExcee = options.preventExceedMaxLength,
      preventExceedMaxLength = _options$preventExcee === undefined ? true : _options$preventExcee;

  var cache = sanitizeValue(value);

  var updateField = function updateField(spec, callback) {
    updateFields(_defineProperty({}, key, spec), callback);
  };

  return {
    onBlur: function onBlur(e) {
      console.debug('blur', e);
      var $set = validateOnBlur ? errors || validateValue(value, widget, options) : null;
      updateField({
        errors: { $set: $set },
        focused: { $set: false }
      });
    },
    onFocus: function onFocus(e) {
      console.debug('focus', e);
      updateField({
        errors: { $set: null },
        focused: { $set: true },
        hints: { $set: null },
        warnings: { $set: null }
      });
    },
    onChangeValue: function onChangeValue(newValue, e) {
      console.debug('change', newValue, e);
      updateField({
        errors: { $set: null },
        hints: { $set: null },
        warnings: { $set: null },
        value: { $set: newValue.length > widget.maxLen && preventExceedMaxLength ? value : newValue }
      });
    },
    onDelete: function onDelete() {},
    onEnter: function onEnter() {},
    onTab: function onTab() {},
    onBackspace: function onBackspace() {},
    onKeyDown: function onKeyDown() {},
    onKeyPress: function onKeyPress() {},
    onKeyUp: function onKeyUp(e) {
      var isContentEditable = e.target.tagName.toLowerCase !== 'input' && e.target.contentEditable === 'true';
      var newValue = e.target.innerText;
      if (isContentEditable && newValue !== value) {
        updateField({
          errors: { $set: null },
          hints: { $set: null },
          warnings: { $set: null },
          value: { $set: newValue.length > widget.maxLen && preventExceedMaxLength ? value : newValue }
        });
      }
    },
    onMouseDown: function onMouseDown() {},
    onMouseUp: function onMouseUp() {},

    cache: cache,
    disabled: disabled,
    focused: focused,
    hints: hints,
    errors: errors,
    required: required,
    value: value,
    warnings: warnings,
    widget: widget
  };
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(validateValue, 'validateValue', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/defaultHandler.js');

  __REACT_HOT_LOADER__.register(sanitizeValue, 'sanitizeValue', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/defaultHandler.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/defaultHandler.js');
}();

;

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {
    step: '_end_',
    notices: [{
      id: 'EMAIL_CONFIRMED',
      text: 'Potwierdzono mail'
    }]
  };
};

/*
  request: { action, data, step }
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/authorization/confirm-mail.js');
}();

;

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flow = __webpack_require__(9);

var _flow2 = _interopRequireDefault(_flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transitions = {
  step_1: 'step_2',
  step_2: '_end_'
};

var form = {
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

var end = {
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

var _default = function _default(request) {
  return (0, _flow2.default)({ form: form, end: end, transitions: transitions, request: request });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(transitions, 'transitions', '/var/projects/netgis-tutorials/client/mocks/authorization/confirm-recover.js');

  __REACT_HOT_LOADER__.register(form, 'form', '/var/projects/netgis-tutorials/client/mocks/authorization/confirm-recover.js');

  __REACT_HOT_LOADER__.register(end, 'end', '/var/projects/netgis-tutorials/client/mocks/authorization/confirm-recover.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/authorization/confirm-recover.js');
}();

;

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flow = __webpack_require__(9);

var _flow2 = _interopRequireDefault(_flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transitions = {
  step_1: '_end_'
};

var form = {
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

var end = {
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

var _default = function _default(request) {
  return (0, _flow2.default)({ form: form, end: end, transitions: transitions, request: request });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(transitions, 'transitions', '/var/projects/netgis-tutorials/client/mocks/authorization/login.js');

  __REACT_HOT_LOADER__.register(form, 'form', '/var/projects/netgis-tutorials/client/mocks/authorization/login.js');

  __REACT_HOT_LOADER__.register(end, 'end', '/var/projects/netgis-tutorials/client/mocks/authorization/login.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/authorization/login.js');
}();

;

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flow = __webpack_require__(9);

var _flow2 = _interopRequireDefault(_flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var end = {
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

var _default = function _default(request) {
  return (0, _flow2.default)({ end: end, request: request });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(end, 'end', '/var/projects/netgis-tutorials/client/mocks/authorization/logout.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/authorization/logout.js');
}();

;

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flow = __webpack_require__(9);

var _flow2 = _interopRequireDefault(_flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transitions = {
  step_1: '_end_'
};

var form = {
  step_1: {
    email: {
      value: 'asdasdff.fdf.98@asdasd.pl',
      fieldType: 'email'
    }
  }
};

var end = {
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

var _default = function _default(request) {
  return (0, _flow2.default)({ form: form, end: end, transitions: transitions, request: request });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(transitions, 'transitions', '/var/projects/netgis-tutorials/client/mocks/authorization/recover.js');

  __REACT_HOT_LOADER__.register(form, 'form', '/var/projects/netgis-tutorials/client/mocks/authorization/recover.js');

  __REACT_HOT_LOADER__.register(end, 'end', '/var/projects/netgis-tutorials/client/mocks/authorization/recover.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/authorization/recover.js');
}();

;

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flow = __webpack_require__(9);

var _flow2 = _interopRequireDefault(_flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transitions = {
  step_1: 'step_2',
  step_2: '_end_'
};

var form = {
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

var end = {
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

var _default = function _default(request) {
  return (0, _flow2.default)({ form: form, end: end, transitions: transitions, request: request });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(transitions, 'transitions', '/var/projects/netgis-tutorials/client/mocks/authorization/register.js');

  __REACT_HOT_LOADER__.register(form, 'form', '/var/projects/netgis-tutorials/client/mocks/authorization/register.js');

  __REACT_HOT_LOADER__.register(end, 'end', '/var/projects/netgis-tutorials/client/mocks/authorization/register.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/authorization/register.js');
}();

;

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {
    data: {
      title: 'Lorem ipsum dolor sit amet.',
      subtitle: 'Nullam dignissim eros consequat augue bibendum, sed tempor sem vulputate. Aliquam euismod erat nulla, vel condimentum ligula pharetra vitae. In maximus aliquet enim sed ultrices.',
      description: 'Mauris bibendum, arcu vitae hendrerit sollicitudin, urna ipsum tincidunt arcu, id tincidunt leo ligula nec lorem. Morbi auctor felis in mauris ultrices, at placerat justo malesuada. Maecenas placerat, magna vel auctor sodales, odio leo aliquet neque, id interdum erat libero semper odio. Aliquam commodo, arcu eu vehicula dignissim, purus arcu sodales velit, eu accumsan orci velit a risus. Cras magna tellus, feugiat quis eros vitae, faucibus convallis metus. Quisque et purus vehicula eros fermentum pulvinar at quis libero. Vestibulum posuere lacus dignissim augue rutrum mollis. Nam nec orci dapibus, ornare risus quis, scelerisque metus. Nullam luctus, magna quis commodo imperdiet, turpis enim tempor lorem, vel sagittis nisl dolor vitae arcu. Sed pulvinar purus ipsum, nec pharetra leo finibus eu. Cras at porttitor eros.',
      icon: 'exclamation',
      isFree: false,
      price: {
        withCertificate: '123,54 PLN',
        withoutCertificate: '434,54 PLN'
      },
      theory: ['Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.', 'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.', 'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.', 'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.', 'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.', 'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.'],
      practice: ['Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.', 'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.', 'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.', 'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.', 'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.', 'Curabitur egestas, libero quis euismod semper, ligula quam consequat tellus, a vulputate nulla sem sed lectus. Maecenas id tincidunt ligula.']
    },
    functions: [{
      id: 'COURSES_REGISTER'
    }]
  };
};

/*
  request: { id }
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/courses/details.js');
}();

;

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {
    course: {
      id: '555',
      title: 'Nunc aliquet suscipit eleifend. Suspendisse suscipit egestas commodo. Nullam nec nulla ac tortor interdum commodo. Suspendisse facilisis ornare arcu eu facilisis.'
    },
    questions: [{
      text: 'Sed accumsan aliquam tellus, convallis pellentesque erat ultrices non?',
      questionType: 'single',
      answers: [{
        id: '1',
        text: 'Vestibulum libero sapien.'
      }, {
        id: '2',
        text: 'Cras vulputate lorem diam.'
      }],
      points: 1
    }, {
      text: 'Morbi ac laoreet ipsum. In ultricies ut lacus quis aliquet?',
      questionType: 'single',
      answers: [{
        id: '5',
        text: 'Vestibulum posuere lobortis.'
      }, {
        id: '23',
        text: 'Etiam pulvinar ligula non nulla pretium, et faucibus augue sodales.'
      }, {
        id: '55',
        text: 'Sed accumsan aliquam tellus, convallis pellentesque erat ultrices non.'
      }],
      points: 3
    }, {
      text: 'Morbi ac laoreet ipsum. In ultricies ut lacus quis aliquet?',
      questionType: 'multi',
      answers: [{
        id: '5',
        text: 'Aliquam posuere lobortis.'
      }, {
        id: '23',
        text: 'Aliquam pulvinar ligula non nulla pretium, et faucibus augue sodales.'
      }, {
        id: '55',
        text: 'Sed accumsan aliquam tellus, posuere pellentesque erat ultrices non.'
      }, {
        id: '65',
        text: 'Aliquam accumsan aliquam tellus, convallis pellentesque erat ultrices non.'
      }],
      points: 4
    }, {
      text: 'Curabitur sed lacus nec lectus posuere eleifend id ac justo?',
      questionType: 'open',
      points: 4
    }]
  };
};

/*
  request: { id }
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/courses/exam.js');
}();

;

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pager = __webpack_require__(12);

var _pager2 = _interopRequireDefault(_pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  request: { filters, sorting, page }
*/

var columns = [{
  id: 'title',
  sortable: true
}, {
  id: 'shortDescription',
  sortable: false
}, {
  id: 'hasCertificate',
  sortable: true
}];

var items = [{
  title: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut.',
  shortDescription: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut, ullamcorper tempus ex. Aliquam mauris elit, hendrerit ac sollicitudin quis, porttitor nec dui. Cras volutpat venenatis ipsum.',
  hasCertificate: true
}, {
  title: 'Praesent sodales diam nibh, eu laoreet ante tristique quis.',
  shortDescription: 'Praesent sodales diam nibh, eu laoreet ante tristique quis. Praesent facilisis, lectus id porttitor sollicitudin, purus felis consectetur purus, id malesuada lacus nisi in metus. Morbi vel gravida nibh, eget malesuada dui.',
  hasCertificate: false
}, {
  title: 'Nulla maximus maximus nunc, at convallis ex gravida a.',
  shortDescription: 'Integer in nisi vel sapien placerat luctus. Aenean aliquam mi ut est sagittis laoreet. Proin rhoncus eleifend tortor egestas suscipit. Vivamus in risus sed diam fringilla euismod.',
  hasCertificate: true
}];

var itemFunctions = [{
  id: 'COURSES_REGISTER'
}, {
  id: 'COURSES_EXAM'
}, {
  id: 'COURSES_TOPICS'
}, {
  id: 'COURSES_DETAILS'
}];

var itemData = {
  id: '532'
};

var filtersSpec = ['hasCertificate', 'title'];

var _default = function _default(request) {
  var filters = request.filters,
      sorting = request.sorting,
      page = request.page;


  return (0, _pager2.default)({ columns: columns, items: items, itemFunctions: itemFunctions, itemData: itemData, filters: filters, sorting: sorting, page: page, filtersSpec: filtersSpec });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(columns, 'columns', '/var/projects/netgis-tutorials/client/mocks/courses/free.js');

  __REACT_HOT_LOADER__.register(items, 'items', '/var/projects/netgis-tutorials/client/mocks/courses/free.js');

  __REACT_HOT_LOADER__.register(itemFunctions, 'itemFunctions', '/var/projects/netgis-tutorials/client/mocks/courses/free.js');

  __REACT_HOT_LOADER__.register(itemData, 'itemData', '/var/projects/netgis-tutorials/client/mocks/courses/free.js');

  __REACT_HOT_LOADER__.register(filtersSpec, 'filtersSpec', '/var/projects/netgis-tutorials/client/mocks/courses/free.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/courses/free.js');
}();

;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pager = __webpack_require__(12);

var _pager2 = _interopRequireDefault(_pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  request: { filters, sorting, page }
*/

var columns = [{
  id: 'title',
  sortable: true
}, {
  id: 'shortDescription',
  sortable: false
}, {
  id: 'price',
  sortable: ['withCertificate', 'withoutCertificate']
}, {
  id: 'hasCertificate',
  sortable: true
}];

var items = [{
  title: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut.',
  shortDescription: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut, ullamcorper tempus ex. Aliquam mauris elit, hendrerit ac sollicitudin quis, porttitor nec dui. Cras volutpat venenatis ipsum.',
  price: {
    withoutCertificate: '43,22 PLN',
    withCertificate: '432,43 PLN'
  },
  hasCertificate: true
}, {
  title: 'Praesent sodales diam nibh, eu laoreet ante tristique quis.',
  shortDescription: 'Praesent sodales diam nibh, eu laoreet ante tristique quis. Praesent facilisis, lectus id porttitor sollicitudin, purus felis consectetur purus, id malesuada lacus nisi in metus. Morbi vel gravida nibh, eget malesuada dui.',
  price: {
    withoutCertificate: '11,94 PLN'
  },
  hasCertificate: false
}, {
  title: 'Nulla maximus maximus nunc, at convallis ex gravida a.',
  shortDescription: 'Integer in nisi vel sapien placerat luctus. Aenean aliquam mi ut est sagittis laoreet. Proin rhoncus eleifend tortor egestas suscipit. Vivamus in risus sed diam fringilla euismod.',
  price: {
    withoutCertificate: '22,99 PLN',
    withCertificate: '123,00 PLN'
  },
  hasCertificate: true
}];

var itemFunctions = [{
  id: 'COURSES_REGISTER'
}, {
  id: 'COURSES_EXAM'
}, {
  id: 'COURSES_TOPICS'
}, {
  id: 'COURSES_DETAILS'
}];

var itemData = {
  id: '532'
};

var filtersSpec = ['hasCertificate', 'title', 'price'];

var _default = function _default(request) {
  var filters = request.filters,
      sorting = request.sorting,
      page = request.page;


  return (0, _pager2.default)({ columns: columns, items: items, itemFunctions: itemFunctions, itemData: itemData, filters: filters, sorting: sorting, page: page, filtersSpec: filtersSpec });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(columns, 'columns', '/var/projects/netgis-tutorials/client/mocks/courses/premium.js');

  __REACT_HOT_LOADER__.register(items, 'items', '/var/projects/netgis-tutorials/client/mocks/courses/premium.js');

  __REACT_HOT_LOADER__.register(itemFunctions, 'itemFunctions', '/var/projects/netgis-tutorials/client/mocks/courses/premium.js');

  __REACT_HOT_LOADER__.register(itemData, 'itemData', '/var/projects/netgis-tutorials/client/mocks/courses/premium.js');

  __REACT_HOT_LOADER__.register(filtersSpec, 'filtersSpec', '/var/projects/netgis-tutorials/client/mocks/courses/premium.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/courses/premium.js');
}();

;

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PagerComponent = function (_ViewComponent) {
  _inherits(PagerComponent, _ViewComponent);

  function PagerComponent() {
    _classCallCheck(this, PagerComponent);

    return _possibleConstructorReturn(this, (PagerComponent.__proto__ || Object.getPrototypeOf(PagerComponent)).apply(this, arguments));
  }

  return PagerComponent;
}(_ViewComponent3.default);

var _default = PagerComponent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PagerComponent, 'PagerComponent', '/var/projects/netgis-tutorials/client/src/generic/components/PagerComponent.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/PagerComponent.js');
}();

;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flow = __webpack_require__(9);

var _flow2 = _interopRequireDefault(_flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transitions = {
  step_1: 'step_2',
  step_2: '_end_'
};

var form = {
  step_1: {
    acceptTerms: {
      value: true,
      fieldType: 'bool'
    }
  }
};

var data = {
  step_1: {
    courseTitle: 'Lorem ipsum dolor sit amet.'
  }
};

var end = {
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

var _default = function _default(request) {
  return (0, _flow2.default)({ form: form, data: data, end: end, transitions: transitions, request: request });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(transitions, 'transitions', '/var/projects/netgis-tutorials/client/mocks/courses/register.js');

  __REACT_HOT_LOADER__.register(form, 'form', '/var/projects/netgis-tutorials/client/mocks/courses/register.js');

  __REACT_HOT_LOADER__.register(data, 'data', '/var/projects/netgis-tutorials/client/mocks/courses/register.js');

  __REACT_HOT_LOADER__.register(end, 'end', '/var/projects/netgis-tutorials/client/mocks/courses/register.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/courses/register.js');
}();

;

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
  return {
    course: {
      id: '555',
      title: 'Nunc aliquet suscipit eleifend. Suspendisse suscipit egestas commodo. Nullam nec nulla ac tortor interdum commodo. Suspendisse facilisis ornare arcu eu facilisis.'
    },
    data: {
      hasToAnswerQuestions: false,
      id: '124',
      subtitle: 'Aliquam sed porttitor nisl, ornare faucibus nunc. Phasellus ac odio varius, scelerisque velit at, pellentesque dui. Maecenas ultricies ipsum quis enim aliquam varius.',
      title: 'Donec varius fermentum tempus'
    },
    functions: [{
      id: 'COURSES_TOPIC:QUESTIONS'
    }, {
      id: 'COURSES_TOPIC:MARK_AS_TAKEN'
    }, {
      id: 'COURSES_TOPIC:UNMARK_AS_TAKEN'
    }],
    navigation: {
      next: {
        id: '125',
        title: 'Vestibulum libero sapien'
      },
      prev: {
        id: '123',
        title: 'Praesent fringilla sit amet lorem in tincidunt'
      }
    },
    questions: [{
      text: 'Sed accumsan aliquam tellus, convallis pellentesque erat ultrices non?',
      questionType: 'single',
      answers: [{
        id: '1',
        text: 'Vestibulum libero sapien.'
      }, {
        id: '2',
        text: 'Cras vulputate lorem diam.'
      }],
      points: 1
    }, {
      text: 'Morbi ac laoreet ipsum. In ultricies ut lacus quis aliquet?',
      questionType: 'single',
      answers: [{
        id: '5',
        text: 'Vestibulum posuere lobortis.'
      }, {
        id: '23',
        text: 'Etiam pulvinar ligula non nulla pretium, et faucibus augue sodales.'
      }, {
        id: '55',
        text: 'Sed accumsan aliquam tellus, convallis pellentesque erat ultrices non.'
      }],
      points: 3
    }, {
      text: 'Morbi ac laoreet ipsum. In ultricies ut lacus quis aliquet?',
      questionType: 'multi',
      answers: [{
        id: '5',
        text: 'Aliquam posuere lobortis.'
      }, {
        id: '23',
        text: 'Aliquam pulvinar ligula non nulla pretium, et faucibus augue sodales.'
      }, {
        id: '55',
        text: 'Sed accumsan aliquam tellus, posuere pellentesque erat ultrices non.'
      }, {
        id: '65',
        text: 'Aliquam accumsan aliquam tellus, convallis pellentesque erat ultrices non.'
      }],
      points: 4
    }, {
      text: 'Curabitur sed lacus nec lectus posuere eleifend id ac justo?',
      questionType: 'open',
      points: 4
    }],
    content: [{
      params: {
        elType: 'autotoc',
        elements: [{
          id: '1',
          text: 'Sekcja pierwsza pierwszego poziomu',
          elements: [{
            id: '1_1',
            text: 'Sekcja pierwsza drugiego poziomu',
            elements: []
          }, {
            id: '1_2',
            text: 'Sekcja druga drugiego poziomu',
            elements: []
          }]
        }, {
          id: '2',
          text: 'Sekcja druga pierwszego poziomu',
          elements: []
        }]
      }
    }, {
      elType: 'sect1',
      params: {
        id: '1',
        text: 'Sekcja pierwsza pierwszego poziomu'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ##nazwa_zmiennej##.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Donec auctor cursus ex eu gravida. Duis quis iaculis mauris, sed consequat justo.'
      }
    }, {
      elType: 'sect2',
      params: {
        id: '1_1',
        text: 'Sekcja pierwsza drugiego poziomu'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Pellentesque lacus nisl, laoreet vitae lacus vel, semper lobortis ante.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Nullam quis leo ac lacus venenatis laoreet eu convallis lorem.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Suspendisse aliquet eu lacus a vulputate.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Aenean finibus leo non ante blandit pellentesque.'
      }
    }, {
      elType: 'sect2',
      params: {
        id: '1_2',
        text: 'Sekcja druga drugiego poziomu'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras pretium venenatis ipsum, id viverra justo ultrices eu.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Mauris vel iaculis metus, ac venenatis ex.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'In euismod enim ut enim ullamcorper convallis.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi non bibendum est. Mauris scelerisque ex et augue ultricies, non feugiat odio imperdiet.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras pretium venenatis ipsum, id viverra justo ultrices eu.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Mauris vel iaculis metus, ac venenatis ex.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'In euismod enim ut enim ullamcorper convallis.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi non bibendum est. Mauris scelerisque ex et augue ultricies, non feugiat odio imperdiet.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras pretium venenatis ipsum, id viverra justo ultrices eu.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Mauris vel iaculis metus, ac venenatis ex.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'In euismod enim ut enim ullamcorper convallis.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi non bibendum est. Mauris scelerisque ex et augue ultricies, non feugiat odio imperdiet.'
      }
    }, {
      elType: 'quote',
      params: {
        lines: ['Mauris vel iaculis metus, ac venenatis ex.', 'In euismod enim ut enim ullamcorper convallis.', 'Morbi non bibendum est. Mauris scelerisque ex et augue ultricies, non feugiat odio imperdiet.']
      }
    }, {
      elType: 'sect1',
      params: {
        id: '2',
        text: 'Sekcja druga pierwszego poziomu'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras pretium venenatis ipsum, id viverra justo ultrices eu.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Mauris vel iaculis metus, ac venenatis ex.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'In euismod enim ut enim ullamcorper convallis.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi non bibendum est. Mauris scelerisque ex et augue ultricies, non feugiat odio imperdiet.'
      }
    }, {
      elType: 'info',
      params: {
        lines: ['Aliquam commodo risus arcu, in venenatis eros commodo a.', 'Cras lobortis lectus non egestas gravida.', 'Quisque et enim dictum, congue dolor vel, malesuada erat. Aliquam et semper libero. Maecenas tempus neque eu dui tincidunt molestie. Donec egestas massa non ornare ultricies. Sed in leo convallis, vehicula dui ac, vehicula nunc.']
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Nunc pharetra justo turpis, eget dictum ante faucibus id.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Aenean tempus dictum commodo.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Nam purus ante, viverra aliquam molestie quis, tincidunt vitae dui.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Aliquam ac dictum ligula.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Suspendisse consectetur volutpat tempus.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Nulla vel sodales justo, <a class="ng-topic-inlinelink" href="http://www.onet.pl" target="_blank">Nazwa linku</a> finibus feugiat mi. Duis pharetra iaculis urna suscipit laoreet.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi eu hendrerit nisi. <span class="ng-topic-inlineemph">Integer id magna semper</span>, ornare nunc vel, pellentesque neque.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi semper, felis quis mattis dignissim, sem urna hendrerit ipsum, eu ultrices lorem magna ac diam. Ut non pharetra ante.'
      }
    }, {
      elType: 'code',
      params: {
        lines: ['class Course(models.Model):', '    ident = IdentField()', '    title = TitleField()', '    short_description = models.TextField()', '    long_description = models.TextField()', '    icon = IconField()', '    image = ImageField()', '    is_free = models.BooleanField(default=False)', '    has_certificate = models.BooleanField(default=False)', '    price = models.DecimalField(max_digits=6, decimal_places=2)', '    price_with_certificate = models.DecimalField(max_digits=6, decimal_places=2)', '    visible = models.BooleanField(default=True)', '    certificate_title = TitleField(blank=True, null=True)', '    certificate_background = URLField(blank=True, null=True)']
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi at efficitur sapien. Duis nec posuere lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur elementum odio velit, id porttitor dolor lacinia ut. Ut tellus arcu, consequat et ultricies in, mollis vel mauris. Proin metus augue, porttitor nec rutrum a, cursus ut enim. In turpis neque, tincidunt vehicula mauris quis, malesuada tempus magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque fermentum eget elit id feugiat. Donec sed sem magna. Sed dui nisi, porttitor eget scelerisque dapibus, convallis eget sem. Ut erat tellus, condimentum sed lacus at, blandit vehicula tellus. Cras non dolor eget arcu elementum sodales. Etiam tempor magna at sollicitudin fringilla. Vivamus at porttitor orci. Etiam dictum blandit mattis.'
      }
    }, {
      elType: 'warning',
      params: {
        lines: ['Donec pretium, lectus id lacinia fermentum, velit erat condimentum urna, sit amet pharetra orci felis interdum velit.']
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras tempus ac sapien sed maximus. Donec dictum faucibus fringilla. Vestibulum et cursus nisi.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Suspendisse vitae velit at risus cursus maximus a id mi.'
      }
    }, {
      elType: 'link',
      params: {
        lines: ['Podpis pod linkiem'],
        title: 'Nazwa linku',
        url: 'http://www.onet.pl'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras luctus massa eu ornare egestas.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi porttitor suscipit mi aliquet pharetra.'
      }
    }, {
      elType: 'link',
      params: {
        lines: ['Podpis pod linkiem 2 afsdf sd gsgdfgdfg lacinia fermentum, velit erat condimentum urna.'],
        title: 'Nazwa linku 2, wewn.',
        url: '/about'
      }
    }, {
      elType: 'link',
      params: {
        title: 'Nazwa linku bez podpisu',
        url: 'http://www.onet.pl'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras luctus massa eu ornare egestas.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi porttitor suscipit mi aliquet pharetra.'
      }
    }, {
      elType: 'link',
      params: {
        title: 'Nazwa linku 2, wewn. bez podpisu',
        url: '/about'
      }
    }, {
      elType: 'link',
      params: {
        url: 'http://www.onet.pl'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Cras luctus massa eu ornare egestas.'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi porttitor suscipit mi aliquet pharetra.'
      }
    }, {
      elType: 'link',
      params: {
        url: '/about'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Morbi hendrerit blandit nisl, non aliquet nulla volutpat sit amet.'
      }
    }, {
      elType: 'image',
      params: {
        lines: ['Podpis pod obrazkiem'],
        url: 'https://globalgamejam.org/sites/default/files/styles/game_sidebar__normal/public/game/featured_image/promo_5.png?itok=9dymM8JD'
      }
    }, {
      elType: 'image',
      params: {
        url: 'https://globalgamejam.org/sites/default/files/styles/game_sidebar__normal/public/game/featured_image/promo_5.png?itok=9dymM8JD'
      }
    }, {
      elType: 'paragraph',
      params: {
        text: 'Nullam ornare dolor odio, pretium pharetra odio aliquam non. Donec pretium, lectus id lacinia fermentum, velit erat condimentum urna, sit amet pharetra orci felis interdum velit. Donec fermentum accumsan fermentum. Vestibulum facilisis, dui vitae pretium molestie, purus ante fringilla elit, lobortis convallis orci mauris non purus. Maecenas viverra convallis dignissim. Aliquam justo augue, iaculis in mi ac, sollicitudin lobortis magna. Curabitur sit amet porttitor turpis. Vivamus sagittis orci ac nisi sollicitudin, a semper nunc ultricies.'
      }
    }]
  };
};

/*
  request: { id }
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/courses/topic.js');
}();

;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pager = __webpack_require__(12);

var _pager2 = _interopRequireDefault(_pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  request: { filters, sorting, page }
*/

var columns = [{
  id: 'title',
  sortable: true
}, {
  id: 'isTaken',
  sortable: true
}, {
  id: 'isPassed',
  sortable: true
}, {
  id: 'hasQuestions',
  sortable: true
}, {
  id: 'hasToAnswerQuestions',
  sortable: true
}];

var items = [{
  title: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut.',
  isPassed: true,
  isTaken: false,
  hasQuestions: true,
  hasToAnswerQuestions: false
}, {
  title: 'Praesent sodales diam nibh, eu laoreet ante tristique quis.',
  isPassed: false,
  isTaken: true,
  hasQuestions: true,
  hasToAnswerQuestions: false
}, {
  title: 'Nulla maximus maximus nunc, at convallis ex gravida a.',
  isPassed: false,
  isTaken: true,
  hasQuestions: true,
  hasToAnswerQuestions: false
}];

var itemFunctions = [{
  id: 'COURSES_TOPIC'
}, {
  id: 'COURSES_TOPIC:QUESTIONS'
}, {
  id: 'COURSES_TOPIC:MARK_AS_TAKEN'
}, {
  id: 'COURSES_TOPIC:UNMARK_AS_TAKEN'
}];

var itemData = {
  id: '532'
};

var filtersSpec = ['isPassed', 'isTaken', 'hasQuestions', 'hasToAnswerQuestions', 'title'];

var _default = function _default(request) {
  var filters = request.filters,
      sorting = request.sorting,
      page = request.page;


  return (0, _pager2.default)({ columns: columns, items: items, itemFunctions: itemFunctions, itemData: itemData, filters: filters, sorting: sorting, page: page, filtersSpec: filtersSpec });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(columns, 'columns', '/var/projects/netgis-tutorials/client/mocks/courses/topics.js');

  __REACT_HOT_LOADER__.register(items, 'items', '/var/projects/netgis-tutorials/client/mocks/courses/topics.js');

  __REACT_HOT_LOADER__.register(itemFunctions, 'itemFunctions', '/var/projects/netgis-tutorials/client/mocks/courses/topics.js');

  __REACT_HOT_LOADER__.register(itemData, 'itemData', '/var/projects/netgis-tutorials/client/mocks/courses/topics.js');

  __REACT_HOT_LOADER__.register(filtersSpec, 'filtersSpec', '/var/projects/netgis-tutorials/client/mocks/courses/topics.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/courses/topics.js');
}();

;

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flow = __webpack_require__(9);

var _flow2 = _interopRequireDefault(_flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transitions = {
  step_1: 'step_2',
  step_2: '_end_'
};

var form = {
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

var end = {
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

var _default = function _default(request) {
  return (0, _flow2.default)({ form: form, end: end, transitions: transitions, request: request });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(transitions, 'transitions', '/var/projects/netgis-tutorials/client/mocks/user/change-password.js');

  __REACT_HOT_LOADER__.register(form, 'form', '/var/projects/netgis-tutorials/client/mocks/user/change-password.js');

  __REACT_HOT_LOADER__.register(end, 'end', '/var/projects/netgis-tutorials/client/mocks/user/change-password.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/user/change-password.js');
}();

;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pager = __webpack_require__(12);

var _pager2 = _interopRequireDefault(_pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  request: { filters, sorting, page }
*/

var columns = [{
  id: 'title',
  sortable: true
}, {
  id: 'shortDescription',
  sortable: false
}, {
  id: 'hasCertificate',
  sortable: true
}];

var items = [{
  title: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut.',
  shortDescription: 'Sed eu pharetra ligula. Mauris nisl nisl, condimentum ac tellus ut, ullamcorper tempus ex. Aliquam mauris elit, hendrerit ac sollicitudin quis, porttitor nec dui. Cras volutpat venenatis ipsum.',
  hasCertificate: true
}, {
  title: 'Praesent sodales diam nibh, eu laoreet ante tristique quis.',
  shortDescription: 'Praesent sodales diam nibh, eu laoreet ante tristique quis. Praesent facilisis, lectus id porttitor sollicitudin, purus felis consectetur purus, id malesuada lacus nisi in metus. Morbi vel gravida nibh, eget malesuada dui.',
  hasCertificate: false
}, {
  title: 'Nulla maximus maximus nunc, at convallis ex gravida a.',
  shortDescription: 'Integer in nisi vel sapien placerat luctus. Aenean aliquam mi ut est sagittis laoreet. Proin rhoncus eleifend tortor egestas suscipit. Vivamus in risus sed diam fringilla euismod.',
  hasCertificate: true
}];

var itemFunctions = [{
  id: 'COURSES_REGISTER'
}, {
  id: 'COURSES_EXAM'
}, {
  id: 'COURSES_TOPICS'
}, {
  id: 'COURSES_DETAILS'
}];

var itemData = {
  id: '532'
};

var filtersSpec = ['hasCertificate', 'title'];

var _default = function _default(request) {
  var filters = request.filters,
      sorting = request.sorting,
      page = request.page;


  return (0, _pager2.default)({ columns: columns, items: items, itemFunctions: itemFunctions, itemData: itemData, filters: filters, sorting: sorting, page: page, filtersSpec: filtersSpec });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(columns, 'columns', '/var/projects/netgis-tutorials/client/mocks/user/courses.js');

  __REACT_HOT_LOADER__.register(items, 'items', '/var/projects/netgis-tutorials/client/mocks/user/courses.js');

  __REACT_HOT_LOADER__.register(itemFunctions, 'itemFunctions', '/var/projects/netgis-tutorials/client/mocks/user/courses.js');

  __REACT_HOT_LOADER__.register(itemData, 'itemData', '/var/projects/netgis-tutorials/client/mocks/user/courses.js');

  __REACT_HOT_LOADER__.register(filtersSpec, 'filtersSpec', '/var/projects/netgis-tutorials/client/mocks/user/courses.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/user/courses.js');
}();

;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() /* request */{
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

/*
  request: {}
*/

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/user/profile.js');
}();

;

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autocomplete = __webpack_require__(40);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _complex = __webpack_require__(147);

var _complex2 = _interopRequireDefault(_complex);

var _date = __webpack_require__(41);

var _date2 = _interopRequireDefault(_date);

var _defaultHandler = __webpack_require__(13);

var _defaultHandler2 = _interopRequireDefault(_defaultHandler);

var _multiChoice = __webpack_require__(43);

var _multiChoice2 = _interopRequireDefault(_multiChoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  autocomplete: _autocomplete2.default,
  complex: _complex2.default,
  date: _date2.default,
  defaultHandler: _defaultHandler2.default,
  multiChoice: _multiChoice2.default
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers.js');
}();

;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autocomplete = __webpack_require__(40);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _date = __webpack_require__(41);

var _date2 = _interopRequireDefault(_date);

var _defaultHandler = __webpack_require__(13);

var _defaultHandler2 = _interopRequireDefault(_defaultHandler);

var _multiChoice = __webpack_require__(43);

var _multiChoice2 = _interopRequireDefault(_multiChoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var subHandlers = {
  autocomplete: _autocomplete2.default,
  date: _date2.default,
  defaultHandler: _defaultHandler2.default,
  multiChoice: _multiChoice2.default
};

var _default = function _default(_ref) {
  var field = _ref.field,
      key = _ref.key,
      updateFields = _ref.updateFields,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? {
    errorsConfig: {}
  } : _ref$options;
  var value = field.value,
      errors = field.errors,
      widget = field.widget,
      hints = field.hints,
      warnings = field.warnings;
  var _widget$required = widget.required,
      required = _widget$required === undefined ? false : _widget$required,
      _widget$disabled = widget.disabled,
      disabled = _widget$disabled === undefined ? false : _widget$disabled;

  var subFieldKeys = Object.keys(value);

  var updateField = function updateField(spec, callback) {
    updateFields(_defineProperty({}, key, spec), callback);
  };

  var subFieldHandler = function subFieldHandler(subKey) {
    var subWidget = widget[subKey];
    var subField = value[subKey];
    var fieldType = subWidget.fieldType;

    var handlerFunction = subHandlers[fieldType] || subHandlers[subKey] || subHandlers.defaultHandler;
    return function () {
      return handlerFunction({ field: Object.assign({}, subField, { widget: subWidget }), key: subKey, /* state, */updateFields: function updateFields(spec, callback) {
          updateField({
            value: spec
          }, callback);
        }, options: options });
    };
  };

  return Object.assign({
    errors: errors,
    hints: hints,
    warnings: warnings,
    required: required,
    disabled: disabled
  }, subFieldKeys.reduce(function (result, key) {
    return Object.assign(result, _defineProperty({}, key, subFieldHandler(key)));
  }, {}));
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(subHandlers, 'subHandlers', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/complex.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/complex.js');
}();

;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringToDate = exports.dateToString = undefined;

var _date = __webpack_require__(42);

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATE_REGEX = new RegExp('^([0-9]{4})\-([0-9]{2})\-([0-9]{2})([ T]([0-9]{1,2})\:([0-9]{1,2})(\:[0-9]{1,2})?)?$', 'g');

var prepareDateString = function prepareDateString(dateParams, options) {
  var year = dateParams.year,
      month = dateParams.month,
      day = dateParams.day,
      hour = dateParams.hour,
      minute = dateParams.minute,
      second = dateParams.second;
  var _options$dateSeparato = options.dateSeparator,
      dateSeparator = _options$dateSeparato === undefined ? '-' : _options$dateSeparato,
      _options$timeDateSepa = options.timeDateSeparator,
      timeDateSeparator = _options$timeDateSepa === undefined ? 'T' : _options$timeDateSepa,
      _options$timeSeparato = options.timeSeparator,
      timeSeparator = _options$timeSeparato === undefined ? ':' : _options$timeSeparato,
      _options$includeTime = options.includeTime,
      includeTime = _options$includeTime === undefined ? false : _options$includeTime;

  var padString = function padString(subject, length) {
    var character = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

    return (new Array(length).join(character) + String(subject)).slice(-length);
  };

  var datePart = [year, padString(month, 2), padString(day, 2)].join(dateSeparator);

  if (!includeTime) {
    return datePart;
  }

  var timePart = [].concat(hour ? padString(hour, 2) : '12', minute ? padString(minute, 2) : '00', second ? padString(second, 2) : '00').join(timeSeparator);

  return [datePart, timePart].join(timeDateSeparator);
};

var dateToString = function dateToString(dateObj) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$dateSeparator = _ref.dateSeparator,
      dateSeparator = _ref$dateSeparator === undefined ? '-' : _ref$dateSeparator,
      _ref$timeDateSeparato = _ref.timeDateSeparator,
      timeDateSeparator = _ref$timeDateSeparato === undefined ? 'T' : _ref$timeDateSeparato,
      _ref$timeSeparator = _ref.timeSeparator,
      timeSeparator = _ref$timeSeparator === undefined ? ':' : _ref$timeSeparator,
      _ref$includeTime = _ref.includeTime,
      includeTime = _ref$includeTime === undefined ? false : _ref$includeTime;

  if (typeof dateObj === 'string') {
    var matches = DATE_REGEX.exec(dateObj);
    var _year = parseInt(matches[1], 10);
    var _month = parseInt(matches[2], 10);
    var _day = parseInt(matches[3], 10);
    var _hour = parseInt(matches[5], 10);
    var _minute = parseInt(matches[6], 10);
    var _second = parseInt(matches[7], 10);
    return prepareDateString({ year: _year, month: _month, day: _day, hour: _hour, minute: _minute, second: _second }, { dateSeparator: dateSeparator, timeDateSeparator: timeDateSeparator, timeSeparator: timeSeparator, includeTime: includeTime });
  }

  if (typeof dateObj.getMonth !== 'function') {
    throw 'Invalid date object';
  }

  var year = dateObj.getFullYear();
  var month = dateObj.getMonth() + 1;
  var day = dateObj.getDate();
  var hour = dateObj.getHours();
  var minute = dateObj.getMinutes();
  var second = dateObj.getSeconds();
  return prepareDateString({ year: year, month: month, day: day, hour: hour, minute: minute, second: second }, { dateSeparator: dateSeparator, timeDateSeparator: timeDateSeparator, timeSeparator: timeSeparator, includeTime: includeTime });
};

var stringToDate = function stringToDate(dateString) {
  var params = (0, _date2.default)(dateString);
  if (!params) {
    return undefined;
  }
  var year = params.year,
      month = params.month,
      day = params.day,
      hour = params.hour,
      minute = params.minute,
      second = params.second;

  return new Date(year, month, day, hour, minute, second);
};

exports.dateToString = dateToString;
exports.stringToDate = stringToDate;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DATE_REGEX, 'DATE_REGEX', '/var/projects/netgis-tutorials/client/src/generic/utils/converters/date.js');

  __REACT_HOT_LOADER__.register(prepareDateString, 'prepareDateString', '/var/projects/netgis-tutorials/client/src/generic/utils/converters/date.js');

  __REACT_HOT_LOADER__.register(dateToString, 'dateToString', '/var/projects/netgis-tutorials/client/src/generic/utils/converters/date.js');

  __REACT_HOT_LOADER__.register(stringToDate, 'stringToDate', '/var/projects/netgis-tutorials/client/src/generic/utils/converters/date.js');
}();

;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PATH_PARAMS_GROUP_RE = /\([^)]+\)/gi;
var PATH_TRIM_RE = /^\^(.*)\$$/i;
var PATH_TRIM_SLASHES_RE = /^\/*(.*)\/*$/i;
var REQ_PARAMS_LEADING_QMARK_RE = /^\?(.*)/;

var preparePathFromRegex = function preparePathFromRegex(pathRegex) {
  return pathRegex.replace(PATH_TRIM_RE, '$1');
};

var getPathParamsFromLocation = function getPathParamsFromLocation(location, pathConfig) {
  var navId = getNavigationIdFromLocation(location, pathConfig);
  if (!navId) {
    return {};
  }
  var matches = location.pathname.replace(PATH_TRIM_SLASHES_RE, '$1').match(new RegExp(pathConfig[navId][0]));
  if (!matches) {
    throw 'Invalid location';
  }
  matches.shift();
  var paramNames = pathConfig[navId][1];
  if (!paramNames) {
    return {};
  }
  if (paramNames.length !== matches.length) {
    throw 'Wrong number of path parameters';
  }
  return matches.reduce(function (result, param, idx) {
    return Object.assign(result, _defineProperty({}, paramNames[idx], param));
  }, {});
};

var getRequestParamsFromLocation = function getRequestParamsFromLocation(location) {
  return location.search ? location.search.replace(REQ_PARAMS_LEADING_QMARK_RE, '$1').split('&').reduce(function (result, param) {
    var _param$split = param.split('='),
        _param$split2 = _slicedToArray(_param$split, 2),
        key = _param$split2[0],
        value = _param$split2[1];

    return Object.assign(result, _defineProperty({}, key, value));
  }, {}) : {};
};

var getNavigationIdFromLocation = function getNavigationIdFromLocation(location, pathConfig) {
  var path = location.pathname.replace(PATH_TRIM_SLASHES_RE, '$1');
  return Object.getOwnPropertySymbols(pathConfig).find(function (navId) {
    return new RegExp(pathConfig[navId][0], 'i').test(path);
  });
};

var createUrlFromIdAndParams = function createUrlFromIdAndParams(navId, params, pathConfig) {
  var copiedParams = Object.assign({}, params);
  var path = pathConfig[navId][0].replace(PATH_TRIM_RE, '$1');
  var pathGroups = pathConfig[navId][1];
  var matches = path.match(PATH_PARAMS_GROUP_RE) || [];
  if (pathGroups.length !== matches.length) {
    throw 'Wrong number of parameters';
  }
  return matches.reduce(function (result, matchingPart, idx) {
    var currentParam = copiedParams[pathGroups[idx]];
    if (!currentParam) {
      throw 'Not enough parameters';
    }
    delete copiedParams[pathGroups[idx]];
    return result.replace(matchingPart, currentParam);
  }, path).concat(Object.keys(copiedParams).length ? '?' + Object.keys(copiedParams).reduce(function (res, key) {
    return res.concat(key + '=' + copiedParams[key]);
  }, []).join('&') : '');
};

var getNavigationTree = function getNavigationTree(id, parentsConfig) {
  var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var previousContent = parentsConfig[id];
  result.unshift(id);
  if (previousContent) {
    getNavigationTree(previousContent, parentsConfig, result);
  }
  return result;
};

exports.createUrlFromIdAndParams = createUrlFromIdAndParams;
exports.getNavigationIdFromLocation = getNavigationIdFromLocation;
exports.getNavigationTree = getNavigationTree;
exports.getPathParamsFromLocation = getPathParamsFromLocation;
exports.getRequestParamsFromLocation = getRequestParamsFromLocation;
exports.preparePathFromRegex = preparePathFromRegex;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PATH_PARAMS_GROUP_RE, 'PATH_PARAMS_GROUP_RE', '/var/projects/netgis-tutorials/client/src/generic/utils/location.js');

  __REACT_HOT_LOADER__.register(PATH_TRIM_RE, 'PATH_TRIM_RE', '/var/projects/netgis-tutorials/client/src/generic/utils/location.js');

  __REACT_HOT_LOADER__.register(PATH_TRIM_SLASHES_RE, 'PATH_TRIM_SLASHES_RE', '/var/projects/netgis-tutorials/client/src/generic/utils/location.js');

  __REACT_HOT_LOADER__.register(REQ_PARAMS_LEADING_QMARK_RE, 'REQ_PARAMS_LEADING_QMARK_RE', '/var/projects/netgis-tutorials/client/src/generic/utils/location.js');

  __REACT_HOT_LOADER__.register(preparePathFromRegex, 'preparePathFromRegex', '/var/projects/netgis-tutorials/client/src/generic/utils/location.js');

  __REACT_HOT_LOADER__.register(getPathParamsFromLocation, 'getPathParamsFromLocation', '/var/projects/netgis-tutorials/client/src/generic/utils/location.js');

  __REACT_HOT_LOADER__.register(getRequestParamsFromLocation, 'getRequestParamsFromLocation', '/var/projects/netgis-tutorials/client/src/generic/utils/location.js');

  __REACT_HOT_LOADER__.register(getNavigationIdFromLocation, 'getNavigationIdFromLocation', '/var/projects/netgis-tutorials/client/src/generic/utils/location.js');

  __REACT_HOT_LOADER__.register(createUrlFromIdAndParams, 'createUrlFromIdAndParams', '/var/projects/netgis-tutorials/client/src/generic/utils/location.js');

  __REACT_HOT_LOADER__.register(getNavigationTree, 'getNavigationTree', '/var/projects/netgis-tutorials/client/src/generic/utils/location.js');
}();

;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopMenuLink = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

var _formatPhoneNumber = __webpack_require__(158);

var _formatPhoneNumber2 = _interopRequireDefault(_formatPhoneNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTTPS_REGEX = new RegExp('^https?://.*');
var TOP_MENU_LINK_ICONS = {
  facebook: 'facebook',
  googleplus: 'google-plus',
  instagram: 'instagram',
  linkedin: 'linkedin',
  mail: 'at',
  phone: 'phone',
  snapchat: 'snapchat-ghost',
  twitter: 'twitter'
};
var TOP_MENU_LINK_TEXT_FORMATTERS = {
  phone: _formatPhoneNumber2.default,
  default: function _default(value) {
    return value;
  }
};

var TopMenu = (_temp = _class = function (_React$Component) {
  _inherits(TopMenu, _React$Component);

  function TopMenu() {
    _classCallCheck(this, TopMenu);

    return _possibleConstructorReturn(this, (TopMenu.__proto__ || Object.getPrototypeOf(TopMenu)).apply(this, arguments));
  }

  _createClass(TopMenu, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'top-menu') },
        this.props.children
      );
    }
  }]);

  return TopMenu;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string
}, _temp);
var TopMenuLink = (_temp2 = _class2 = function (_React$Component2) {
  _inherits(TopMenuLink, _React$Component2);

  function TopMenuLink() {
    _classCallCheck(this, TopMenuLink);

    return _possibleConstructorReturn(this, (TopMenuLink.__proto__ || Object.getPrototypeOf(TopMenuLink)).apply(this, arguments));
  }

  _createClass(TopMenuLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          id = _props.id,
          _onClick = _props.onClick,
          children = _props.children,
          url = _props.url;

      var icon = TOP_MENU_LINK_ICONS[id];
      var external = url && HTTPS_REGEX.test(url);
      var formattedText = (TOP_MENU_LINK_TEXT_FORMATTERS[id] || TOP_MENU_LINK_TEXT_FORMATTERS['default'])(children);

      return _react2.default.createElement(
        'a',
        { href: !_onClick && url ? url : undefined, onClick: function onClick(e) {
            if (!url && _onClick) {
              _onClick(e);
            }
          }, target: external ? '_blank' : '_self', className: (0, _cx2.default)(className, 'top-menu-link') },
        icon && _react2.default.createElement('i', { className: (0, _cx2.default)('fa', 'fa-' + icon, children && 'with-text') }),
        formattedText
      );
    }
  }]);

  return TopMenuLink;
}(_react2.default.Component), _class2.propTypes = {
  className: _propTypes.PropTypes.string,
  id: _propTypes.PropTypes.string,
  url: _propTypes.PropTypes.string,
  onClick: _propTypes.PropTypes.func
}, _temp2);
exports.TopMenuLink = TopMenuLink;
var _default2 = TopMenu;
exports.default = _default2;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HTTPS_REGEX, 'HTTPS_REGEX', '/var/projects/netgis-tutorials/client/src/generic/components/TopMenu.js');

  __REACT_HOT_LOADER__.register(TOP_MENU_LINK_ICONS, 'TOP_MENU_LINK_ICONS', '/var/projects/netgis-tutorials/client/src/generic/components/TopMenu.js');

  __REACT_HOT_LOADER__.register(TOP_MENU_LINK_TEXT_FORMATTERS, 'TOP_MENU_LINK_TEXT_FORMATTERS', '/var/projects/netgis-tutorials/client/src/generic/components/TopMenu.js');

  __REACT_HOT_LOADER__.register(TopMenu, 'TopMenu', '/var/projects/netgis-tutorials/client/src/generic/components/TopMenu.js');

  __REACT_HOT_LOADER__.register(TopMenuLink, 'TopMenuLink', '/var/projects/netgis-tutorials/client/src/generic/components/TopMenu.js');

  __REACT_HOT_LOADER__.register(_default2, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/TopMenu.js');
}();

;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(value) {
  return value.toString().replace(/\s/g, '').replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/utils/formatters/formatPhoneNumber.js');
}();

;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

var _Contact = __webpack_require__(160);

var _Contact2 = _interopRequireDefault(_Contact);

var _Info = __webpack_require__(161);

var _Info2 = _interopRequireDefault(_Info);

var _navigation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutContent = function (_ViewComponent) {
  _inherits(AboutContent, _ViewComponent);

  function AboutContent() {
    _classCallCheck(this, AboutContent);

    return _possibleConstructorReturn(this, (AboutContent.__proto__ || Object.getPrototypeOf(AboutContent)).apply(this, arguments));
  }

  _createClass(AboutContent, [{
    key: 'getViews',
    value: function getViews() {
      var _LOCATION_IDS$ABOUT_C;

      return (_LOCATION_IDS$ABOUT_C = {}, _defineProperty(_LOCATION_IDS$ABOUT_C, _navigation.LOCATION_IDS.ABOUT_CONTACT, _Contact2.default), _defineProperty(_LOCATION_IDS$ABOUT_C, _navigation.LOCATION_IDS.ABOUT_INFO, _Info2.default), _LOCATION_IDS$ABOUT_C)[this.state.content];
    }
  }, {
    key: 'render',
    value: function render() {
      var ContentComponent = this.getContent();

      return _react2.default.createElement(
        'div',
        { ref: 'AboutContent', className: 'content-component' },
        _react2.default.createElement(
          'div',
          null,
          'About'
        ),
        ContentComponent && _react2.default.createElement(ContentComponent, this.viewHandler())
      );
    }
  }]);

  return AboutContent;
}(_ViewComponent3.default);

var _default = AboutContent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AboutContent, 'AboutContent', '/var/projects/netgis-tutorials/client/src/About/views/Content.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/About/views/Content.js');
}();

;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutContact = function (_ViewComponent) {
  _inherits(AboutContact, _ViewComponent);

  function AboutContact() {
    _classCallCheck(this, AboutContact);

    return _possibleConstructorReturn(this, (AboutContact.__proto__ || Object.getPrototypeOf(AboutContact)).apply(this, arguments));
  }

  _createClass(AboutContact, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AboutContact' },
        _react2.default.createElement(
          'div',
          null,
          'About Contact'
        )
      );
    }
  }]);

  return AboutContact;
}(_ViewComponent3.default);

var _default = AboutContact;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AboutContact, 'AboutContact', '/var/projects/netgis-tutorials/client/src/About/views/Contact.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/About/views/Contact.js');
}();

;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Topic = __webpack_require__(162);

var _Topic2 = _interopRequireDefault(_Topic);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

var _A = __webpack_require__(183);

var _A2 = _interopRequireDefault(_A);

var _B = __webpack_require__(186);

var _B2 = _interopRequireDefault(_B);

var _navigation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutInfo = function (_ViewComponent) {
  _inherits(AboutInfo, _ViewComponent);

  function AboutInfo() {
    _classCallCheck(this, AboutInfo);

    return _possibleConstructorReturn(this, (AboutInfo.__proto__ || Object.getPrototypeOf(AboutInfo)).apply(this, arguments));
  }

  _createClass(AboutInfo, [{
    key: 'getViews',
    value: function getViews() {
      var _LOCATION_IDS$ABOUT_I;

      return (_LOCATION_IDS$ABOUT_I = {}, _defineProperty(_LOCATION_IDS$ABOUT_I, _navigation.LOCATION_IDS.ABOUT_INFO_A, _A2.default), _defineProperty(_LOCATION_IDS$ABOUT_I, _navigation.LOCATION_IDS.ABOUT_INFO_B, _B2.default), _LOCATION_IDS$ABOUT_I)[this.state.content];
    }
  }, {
    key: 'render',
    value: function render() {
      var ContentComponent = this.getContent();
      var _state$data = this.state.data;
      _state$data = _state$data === undefined ? {} : _state$data;
      var terms = _state$data.terms;


      return _react2.default.createElement(
        'div',
        { ref: 'AboutInfo' },
        _react2.default.createElement(
          'div',
          null,
          'About Info'
        ),
        _react2.default.createElement(_Topic2.default, { data: terms }),
        ContentComponent && _react2.default.createElement(ContentComponent, this.viewHandler())
      );
    }
  }]);

  return AboutInfo;
}(_ViewComponent3.default);

var _default = AboutInfo;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AboutInfo, 'AboutInfo', '/var/projects/netgis-tutorials/client/src/About/views/Info.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/About/views/Info.js');
}();

;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

var _Code = __webpack_require__(163);

var _Code2 = _interopRequireDefault(_Code);

var _H = __webpack_require__(45);

var _Img = __webpack_require__(164);

var _Img2 = _interopRequireDefault(_Img);

var _Info = __webpack_require__(176);

var _Info2 = _interopRequireDefault(_Info);

var _LinkDescription = __webpack_require__(177);

var _LinkDescription2 = _interopRequireDefault(_LinkDescription);

var _Paragraph = __webpack_require__(178);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Quote = __webpack_require__(179);

var _Quote2 = _interopRequireDefault(_Quote);

var _TableOfContents = __webpack_require__(180);

var _TableOfContents2 = _interopRequireDefault(_TableOfContents);

var _Warning = __webpack_require__(182);

var _Warning2 = _interopRequireDefault(_Warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Topic = (_temp = _class = function (_React$Component) {
  _inherits(Topic, _React$Component);

  function Topic() {
    _classCallCheck(this, Topic);

    return _possibleConstructorReturn(this, (Topic.__proto__ || Object.getPrototypeOf(Topic)).apply(this, arguments));
  }

  _createClass(Topic, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          _props$data = _props.data,
          data = _props$data === undefined ? [] : _props$data;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'topic') },
        data.map(function (_ref, idx) {
          var id = _ref.id,
              params = _ref.params;
          return {
            autotoc: _react2.default.createElement(_TableOfContents2.default, { key: idx, data: params.elements }),
            code: _react2.default.createElement(_Code2.default, { key: idx, lines: params.lines }),
            image: _react2.default.createElement(
              _Img2.default,
              { key: idx, src: params.url, hasPopup: true },
              params.lines
            ),
            info: _react2.default.createElement(
              _Info2.default,
              { key: idx, name: params.title },
              params.lines
            ),
            link: _react2.default.createElement(
              _LinkDescription2.default,
              { key: idx, name: params.title, url: params.url },
              params.lines
            ),
            paragraph: _react2.default.createElement(
              _Paragraph2.default,
              { key: idx },
              params.text
            ),
            quote: _react2.default.createElement(
              _Quote2.default,
              { key: idx, name: params.title },
              params.lines
            ),
            summary: _react2.default.createElement(
              _Paragraph2.default,
              { key: idx, summary: true },
              params.text
            ),
            sect1: _react2.default.createElement(
              _H.H1,
              { key: idx, id: params.id },
              params.text
            ),
            sect2: _react2.default.createElement(
              _H.H2,
              { key: idx, id: params.id },
              params.text
            ),
            sect3: _react2.default.createElement(
              _H.H3,
              { key: idx, id: params.id },
              params.text
            ),
            sect4: _react2.default.createElement(
              _H.H4,
              { key: idx, id: params.id },
              params.text
            ),
            sect5: _react2.default.createElement(
              _H.H5,
              { key: idx, id: params.id },
              params.text
            ),
            toc: _react2.default.createElement(_TableOfContents2.default, { key: idx, data: params.elements }),
            warning: _react2.default.createElement(
              _Warning2.default,
              { key: idx, name: params.title },
              params.lines
            )
          }[id];
        })
      );
    }
  }]);

  return Topic;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string,
  data: _propTypes.PropTypes.array
}, _temp);
var _default = Topic;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Topic, 'Topic', '/var/projects/netgis-tutorials/client/src/generic/components/Topic.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Topic.js');
}();

;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeLine = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeLine = (_temp = _class = function (_React$Component) {
  _inherits(CodeLine, _React$Component);

  function CodeLine() {
    _classCallCheck(this, CodeLine);

    return _possibleConstructorReturn(this, (CodeLine.__proto__ || Object.getPrototypeOf(CodeLine)).apply(this, arguments));
  }

  _createClass(CodeLine, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          _props$highlighted = _props.highlighted,
          highlighted = _props$highlighted === undefined ? false : _props$highlighted;


      return _react2.default.createElement(
        'span',
        { className: (0, _cx2.default)(className, 'code-line', highlighted && 'code-line-highlighted') },
        children
      );
    }
  }]);

  return CodeLine;
}(_react2.default.Component), _class.propTypes = {
  children: _propTypes.PropTypes.string,
  lines: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string),
  highlighted: _propTypes.PropTypes.bool,
  className: _propTypes.PropTypes.string
}, _temp);
var Code = (_temp2 = _class2 = function (_React$Component2) {
  _inherits(Code, _React$Component2);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  _createClass(Code, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children,
          lines = _props2.lines,
          _props2$highlighted = _props2.highlighted,
          highlighted = _props2$highlighted === undefined ? [] : _props2$highlighted;

      var renderLines = lines || children.split();

      return _react2.default.createElement(
        'pre',
        { className: (0, _cx2.default)(className, 'code') },
        renderLines.map(function (item, index) {
          return _react2.default.createElement(
            CodeLine,
            { key: index, highlighted: highlighted.includes(index) },
            item
          );
        })
      );
    }
  }]);

  return Code;
}(_react2.default.Component), _class2.propTypes = {
  children: _propTypes.PropTypes.string,
  lines: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string),
  highlighted: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.number),
  className: _propTypes.PropTypes.string
}, _temp2);
exports.CodeLine = CodeLine;
var _default = Code;
exports.default = _default;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CodeLine, 'CodeLine', '/var/projects/netgis-tutorials/client/src/generic/components/Code.js');

  __REACT_HOT_LOADER__.register(Code, 'Code', '/var/projects/netgis-tutorials/client/src/generic/components/Code.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Code.js');
}();

;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(165);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Img = (_temp = _class = function (_React$Component) {
  _inherits(Img, _React$Component);

  function Img(props) {
    _classCallCheck(this, Img);

    var _this = _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).call(this, props));

    _this.toggleImage = function () {
      return _this.__toggleImage__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      opened: props.opened || false
    };
    return _this;
  }

  _createClass(Img, [{
    key: '__toggleImage__REACT_HOT_LOADER__',
    value: function __toggleImage__REACT_HOT_LOADER__() {
      return this.__toggleImage__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__toggleImage__REACT_HOT_LOADER__',
    value: function __toggleImage__REACT_HOT_LOADER__() {
      var hasPopup = this.props.hasPopup;
      var opened = this.state.opened;


      if (hasPopup) {
        this.setState(_extends({}, this.state, { opened: !opened }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          src = _props.src,
          children = _props.children,
          _props$hasPopup = _props.hasPopup,
          hasPopup = _props$hasPopup === undefined ? false : _props$hasPopup,
          _props$half = _props.half,
          half = _props$half === undefined ? false : _props$half;
      var _state$opened = this.state.opened,
          opened = _state$opened === undefined ? false : _state$opened;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)('img-wrapper', half && 'half') },
        _react2.default.createElement('img', { src: src, className: (0, _cx2.default)(className, 'img', children && 'with-title'), onClick: this.toggleImage }),
        Array.isArray(children) ? children.map(function (item, idx) {
          return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: item }, key: idx, className: (0, _cx2.default)('img-title'), onClick: _this2.toggleImage });
        }) : children && _react2.default.createElement(
          'div',
          { className: (0, _cx2.default)('img-title'), onClick: this.toggleImage },
          children
        ),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            transitionName: 'modal-img',
            transitionEnterTimeout: 200,
            transitionLeaveTimeout: 200 },
          hasPopup && opened && _react2.default.createElement(
            'table',
            { className: (0, _cx2.default)('img-modal'), onClick: this.toggleImage },
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  { className: (0, _cx2.default)('img-modal-helper') },
                  _react2.default.createElement('i', { className: (0, _cx2.default)('fa', 'fa-close') }),
                  _react2.default.createElement('img', { src: src, className: (0, _cx2.default)('img-modal-content', children && 'with-title'), onClick: function onClick(e) {
                      e.stopPropagation();
                    } }),
                  Array.isArray(children) ? children.map(function (item, idx) {
                    return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: item }, key: idx, className: (0, _cx2.default)('img-modal-title') });
                  }) : children && _react2.default.createElement(
                    'div',
                    { className: (0, _cx2.default)('img-modal-title') },
                    children
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Img;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string,
  src: _propTypes.PropTypes.string,
  hasPopup: _propTypes.PropTypes.bool,
  opened: _propTypes.PropTypes.bool,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string), _propTypes.PropTypes.node])
}, _temp);
var _default = Img;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Img, 'Img', '/var/projects/netgis-tutorials/client/src/generic/components/Img.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Img.js');
}();

;

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = (_temp = _class = function (_React$Component) {
  _inherits(Info, _React$Component);

  function Info() {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).apply(this, arguments));
  }

  _createClass(Info, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'info') },
        Array.isArray(children) ? children.map(function (item, idx) {
          return _react2.default.createElement(
            'div',
            { key: idx, className: (0, _cx2.default)('info-paragraph') },
            item
          );
        }) : children
      );
    }
  }]);

  return Info;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string), _propTypes.PropTypes.node])
}, _temp);
var _default = Info;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Info, 'Info', '/var/projects/netgis-tutorials/client/src/generic/components/Info.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Info.js');
}();

;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkDescription = (_temp = _class = function (_React$Component) {
  _inherits(LinkDescription, _React$Component);

  function LinkDescription() {
    _classCallCheck(this, LinkDescription);

    return _possibleConstructorReturn(this, (LinkDescription.__proto__ || Object.getPrototypeOf(LinkDescription)).apply(this, arguments));
  }

  _createClass(LinkDescription, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          url = _props.url,
          children = _props.children,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'link-description') },
        _react2.default.createElement(
          'a',
          { href: url, target: '_blank' },
          name || url
        ),
        children && _react2.default.createElement(
          'div',
          { className: (0, _cx2.default)('link-description-text') },
          Array.isArray(children) ? children.map(function (item, idx) {
            return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: item }, key: idx, className: (0, _cx2.default)('link-description-paragraph') });
          }) : children
        )
      );
    }
  }]);

  return LinkDescription;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string), _propTypes.PropTypes.node]),
  url: _propTypes.PropTypes.string,
  name: _propTypes.PropTypes.string
}, _temp);
var _default = LinkDescription;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LinkDescription, 'LinkDescription', '/var/projects/netgis-tutorials/client/src/generic/components/LinkDescription.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/LinkDescription.js');
}();

;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paragraph = (_temp = _class = function (_React$Component) {
  _inherits(Paragraph, _React$Component);

  function Paragraph() {
    _classCallCheck(this, Paragraph);

    return _possibleConstructorReturn(this, (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).apply(this, arguments));
  }

  _createClass(Paragraph, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          _props$summary = _props.summary,
          summary = _props$summary === undefined ? false : _props$summary;


      return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: children }, className: (0, _cx2.default)(className, 'paragraph', summary && 'summary') });
    }
  }]);

  return Paragraph;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string,
  summary: _propTypes.PropTypes.bool,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.node])
}, _temp);
var _default = Paragraph;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Paragraph, 'Paragraph', '/var/projects/netgis-tutorials/client/src/generic/components/Paragraph.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Paragraph.js');
}();

;

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quote = (_temp = _class = function (_React$Component) {
  _inherits(Quote, _React$Component);

  function Quote() {
    _classCallCheck(this, Quote);

    return _possibleConstructorReturn(this, (Quote.__proto__ || Object.getPrototypeOf(Quote)).apply(this, arguments));
  }

  _createClass(Quote, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'quote') },
        Array.isArray(children) ? children.map(function (item, idx) {
          return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: item }, key: idx, className: (0, _cx2.default)('quote-paragraph') });
        }) : children
      );
    }
  }]);

  return Quote;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string), _propTypes.PropTypes.node])
}, _temp);
var _default = Quote;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Quote, 'Quote', '/var/projects/netgis-tutorials/client/src/generic/components/Quote.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Quote.js');
}();

;

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

var _scrollTo = __webpack_require__(181);

var _scrollTo2 = _interopRequireDefault(_scrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prepareElements = function prepareElements(_ref, idx) {
  var id = _ref.id,
      text = _ref.text,
      _ref$elements = _ref.elements,
      elements = _ref$elements === undefined ? [] : _ref$elements;
  return _react2.default.createElement(
    'div',
    { key: idx },
    _react2.default.createElement(
      'div',
      { className: (0, _cx2.default)('toc-element') },
      _react2.default.createElement(
        'a',
        { id: 'toc-' + id, onClick: function onClick(e) {
            (0, _scrollTo2.default)(e, id);
          } },
        text
      )
    ),
    elements && elements.length > 0 && _react2.default.createElement(
      'div',
      { className: (0, _cx2.default)('toc-element-sub') },
      elements.map(function (item, subIdx) {
        return prepareElements(item, idx + '-' + subIdx);
      })
    )
  );
};

var TableOfContents = (_temp = _class = function (_React$Component) {
  _inherits(TableOfContents, _React$Component);

  function TableOfContents() {
    _classCallCheck(this, TableOfContents);

    return _possibleConstructorReturn(this, (TableOfContents.__proto__ || Object.getPrototypeOf(TableOfContents)).apply(this, arguments));
  }

  _createClass(TableOfContents, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          data = _props.data;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'toc') },
        data.map(function (item, idx) {
          return prepareElements(item, idx);
        })
      );
    }
  }]);

  return TableOfContents;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string
}, _temp);
var _default = TableOfContents;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(prepareElements, 'prepareElements', '/var/projects/netgis-tutorials/client/src/generic/components/TableOfContents.js');

  __REACT_HOT_LOADER__.register(TableOfContents, 'TableOfContents', '/var/projects/netgis-tutorials/client/src/generic/components/TableOfContents.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/TableOfContents.js');
}();

;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//t = current time
//b = start value
//c = change in value
//d = duration
var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) {
    return c / 2 * t * t + b;
  }
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

var scrollTo = function scrollTo(element, to, duration) {
  var start = element.scrollTop;
  var change = to - start;
  var currentTime = 0;
  var increment = 20;

  var animateScroll = function animateScroll() {
    currentTime += increment;
    var val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
};

var _default = function _default(e, id) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

  var node = document.getElementById(id);
  var to = node.offsetTop;
  scrollTo(document.body, to, duration);
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(easeInOutQuad, "easeInOutQuad", "/var/projects/netgis-tutorials/client/src/generic/utils/scrollTo.js");

  __REACT_HOT_LOADER__.register(scrollTo, "scrollTo", "/var/projects/netgis-tutorials/client/src/generic/utils/scrollTo.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/var/projects/netgis-tutorials/client/src/generic/utils/scrollTo.js");
}();

;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Warning = (_temp = _class = function (_React$Component) {
  _inherits(Warning, _React$Component);

  function Warning() {
    _classCallCheck(this, Warning);

    return _possibleConstructorReturn(this, (Warning.__proto__ || Object.getPrototypeOf(Warning)).apply(this, arguments));
  }

  _createClass(Warning, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'warning') },
        Array.isArray(children) ? children.map(function (item, idx) {
          return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: item }, key: idx, className: (0, _cx2.default)('warning-paragraph') });
        }) : children
      );
    }
  }]);

  return Warning;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string), _propTypes.PropTypes.node])
}, _temp);
var _default = Warning;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Warning, 'Warning', '/var/projects/netgis-tutorials/client/src/generic/components/Warning.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Warning.js');
}();

;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

var _AA = __webpack_require__(184);

var _AA2 = _interopRequireDefault(_AA);

var _AB = __webpack_require__(185);

var _AB2 = _interopRequireDefault(_AB);

var _navigation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutInfo = function (_ViewComponent) {
  _inherits(AboutInfo, _ViewComponent);

  function AboutInfo() {
    _classCallCheck(this, AboutInfo);

    return _possibleConstructorReturn(this, (AboutInfo.__proto__ || Object.getPrototypeOf(AboutInfo)).apply(this, arguments));
  }

  _createClass(AboutInfo, [{
    key: 'getViews',
    value: function getViews() {
      var _LOCATION_IDS$ABOUT_I;

      return (_LOCATION_IDS$ABOUT_I = {}, _defineProperty(_LOCATION_IDS$ABOUT_I, _navigation.LOCATION_IDS.ABOUT_INFO_A_A, _AA2.default), _defineProperty(_LOCATION_IDS$ABOUT_I, _navigation.LOCATION_IDS.ABOUT_INFO_A_B, _AB2.default), _LOCATION_IDS$ABOUT_I)[this.state.content];
    }
  }, {
    key: 'render',
    value: function render() {
      var ContentComponent = this.getContent();

      return _react2.default.createElement(
        'div',
        { ref: 'AboutInfoA' },
        _react2.default.createElement(
          'div',
          null,
          'About Info A'
        ),
        ContentComponent && _react2.default.createElement(ContentComponent, this.viewHandler())
      );
    }
  }]);

  return AboutInfo;
}(_ViewComponent3.default);

var _default = AboutInfo;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AboutInfo, 'AboutInfo', '/var/projects/netgis-tutorials/client/src/About/views/Info/A.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/About/views/Info/A.js');
}();

;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutInfoAA = function (_ViewComponent) {
  _inherits(AboutInfoAA, _ViewComponent);

  function AboutInfoAA() {
    _classCallCheck(this, AboutInfoAA);

    return _possibleConstructorReturn(this, (AboutInfoAA.__proto__ || Object.getPrototypeOf(AboutInfoAA)).apply(this, arguments));
  }

  _createClass(AboutInfoAA, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AboutInfoAA' },
        _react2.default.createElement(
          'div',
          null,
          'About Info AA'
        )
      );
    }
  }]);

  return AboutInfoAA;
}(_ViewComponent3.default);

var _default = AboutInfoAA;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AboutInfoAA, 'AboutInfoAA', '/var/projects/netgis-tutorials/client/src/About/views/Info/A/AA.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/About/views/Info/A/AA.js');
}();

;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutInfoAB = function (_ViewComponent) {
  _inherits(AboutInfoAB, _ViewComponent);

  function AboutInfoAB() {
    _classCallCheck(this, AboutInfoAB);

    return _possibleConstructorReturn(this, (AboutInfoAB.__proto__ || Object.getPrototypeOf(AboutInfoAB)).apply(this, arguments));
  }

  _createClass(AboutInfoAB, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AboutInfoAB' },
        _react2.default.createElement(
          'div',
          null,
          'About Info AB'
        )
      );
    }
  }]);

  return AboutInfoAB;
}(_ViewComponent3.default);

var _default = AboutInfoAB;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AboutInfoAB, 'AboutInfoAB', '/var/projects/netgis-tutorials/client/src/About/views/Info/A/AB.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/About/views/Info/A/AB.js');
}();

;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutInfoB = function (_ViewComponent) {
  _inherits(AboutInfoB, _ViewComponent);

  function AboutInfoB() {
    _classCallCheck(this, AboutInfoB);

    return _possibleConstructorReturn(this, (AboutInfoB.__proto__ || Object.getPrototypeOf(AboutInfoB)).apply(this, arguments));
  }

  _createClass(AboutInfoB, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AboutInfoB' },
        _react2.default.createElement(
          'div',
          null,
          'About Info B'
        )
      );
    }
  }]);

  return AboutInfoB;
}(_ViewComponent3.default);

var _default = AboutInfoB;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AboutInfoB, 'AboutInfoB', '/var/projects/netgis-tutorials/client/src/About/views/Info/B.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/About/views/Info/B.js');
}();

;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

var _H = __webpack_require__(45);

var _Container = __webpack_require__(188);

var _Container2 = _interopRequireDefault(_Container);

var _Dashboard = __webpack_require__(189);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Payments = __webpack_require__(190);

var _Payments2 = _interopRequireDefault(_Payments);

var _Users = __webpack_require__(191);

var _Users2 = _interopRequireDefault(_Users);

var _navigation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdministrationContent = function (_ViewComponent) {
  _inherits(AdministrationContent, _ViewComponent);

  function AdministrationContent() {
    _classCallCheck(this, AdministrationContent);

    return _possibleConstructorReturn(this, (AdministrationContent.__proto__ || Object.getPrototypeOf(AdministrationContent)).apply(this, arguments));
  }

  _createClass(AdministrationContent, [{
    key: 'getViews',
    value: function getViews() {
      var _LOCATION_IDS$ADMINIS;

      return (_LOCATION_IDS$ADMINIS = {}, _defineProperty(_LOCATION_IDS$ADMINIS, _navigation.LOCATION_IDS.ADMINISTRATION_DASHBOARD, _Dashboard2.default), _defineProperty(_LOCATION_IDS$ADMINIS, _navigation.LOCATION_IDS.ADMINISTRATION_PAYMENTS, _Payments2.default), _defineProperty(_LOCATION_IDS$ADMINIS, _navigation.LOCATION_IDS.ADMINISTRATION_USERS, _Users2.default), _LOCATION_IDS$ADMINIS)[this.state.content];
    }
  }, {
    key: 'render',
    value: function render() {
      var ContentComponent = this.getContent();

      return _react2.default.createElement(
        _Container2.default,
        { ref: 'AdministrationContent', className: 'content-component' },
        _react2.default.createElement(
          _H.H1,
          null,
          'Administration'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis molestie viverra. Nulla placerat velit dolor, sit amet varius quam sodales ullamcorper. Nulla lobortis egestas mi, a sodales ante ullamcorper sed. Maecenas egestas vestibulum ex. Donec scelerisque lobortis augue vel porttitor. Maecenas vel tincidunt purus. Suspendisse pharetra, ipsum ac eleifend posuere, eros nulla tempor risus, ut hendrerit metus orci sit amet nulla. Etiam scelerisque dignissim libero ut sollicitudin. Nam tincidunt sem id lacus condimentum, ultrices pulvinar massa bibendum. Integer dapibus odio lectus, quis consequat risus iaculis sed. Sed faucibus elementum nisl quis elementum. Sed et blandit sapien. Aliquam sit amet fermentum dui. Cras iaculis eget leo at tempor. Vivamus id auctor diam.'
        ),
        _react2.default.createElement(
          _H.H2,
          null,
          'Subtitle administration'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis molestie viverra. Nulla placerat velit dolor, sit amet varius quam sodales ullamcorper. Nulla lobortis egestas mi, a sodales ante ullamcorper sed. Maecenas egestas vestibulum ex. Donec scelerisque lobortis augue vel porttitor. Maecenas vel tincidunt purus. Suspendisse pharetra, ipsum ac eleifend posuere, eros nulla tempor risus, ut hendrerit metus orci sit amet nulla. Etiam scelerisque dignissim libero ut sollicitudin. Nam tincidunt sem id lacus condimentum, ultrices pulvinar massa bibendum. Integer dapibus odio lectus, quis consequat risus iaculis sed. Sed faucibus elementum nisl quis elementum. Sed et blandit sapien. Aliquam sit amet fermentum dui. Cras iaculis eget leo at tempor. Vivamus id auctor diam.'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis molestie viverra. Nulla placerat velit dolor, sit amet varius quam sodales ullamcorper. Nulla lobortis egestas mi, a sodales ante ullamcorper sed. Maecenas egestas vestibulum ex. Donec scelerisque lobortis augue vel porttitor. Maecenas vel tincidunt purus. Suspendisse pharetra, ipsum ac eleifend posuere, eros nulla tempor risus, ut hendrerit metus orci sit amet nulla. Etiam scelerisque dignissim libero ut sollicitudin. Nam tincidunt sem id lacus condimentum, ultrices pulvinar massa bibendum. Integer dapibus odio lectus, quis consequat risus iaculis sed. Sed faucibus elementum nisl quis elementum. Sed et blandit sapien. Aliquam sit amet fermentum dui. Cras iaculis eget leo at tempor. Vivamus id auctor diam.'
        ),
        _react2.default.createElement(
          _H.H3,
          null,
          'Third tier header administration'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis molestie viverra. Nulla placerat velit dolor, sit amet varius quam sodales ullamcorper. Nulla lobortis egestas mi, a sodales ante ullamcorper sed. Maecenas egestas vestibulum ex. Donec scelerisque lobortis augue vel porttitor. Maecenas vel tincidunt purus. Suspendisse pharetra, ipsum ac eleifend posuere, eros nulla tempor risus, ut hendrerit metus orci sit amet nulla. Etiam scelerisque dignissim libero ut sollicitudin. Nam tincidunt sem id lacus condimentum, ultrices pulvinar massa bibendum. Integer dapibus odio lectus, quis consequat risus iaculis sed. Sed faucibus elementum nisl quis elementum. Sed et blandit sapien. Aliquam sit amet fermentum dui. Cras iaculis eget leo at tempor. Vivamus id auctor diam.'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis molestie viverra. Nulla placerat velit dolor, sit amet varius quam sodales ullamcorper. Nulla lobortis egestas mi, a sodales ante ullamcorper sed. Maecenas egestas vestibulum ex. Donec scelerisque lobortis augue vel porttitor. Maecenas vel tincidunt purus. Suspendisse pharetra, ipsum ac eleifend posuere, eros nulla tempor risus, ut hendrerit metus orci sit amet nulla. Etiam scelerisque dignissim libero ut sollicitudin. Nam tincidunt sem id lacus condimentum, ultrices pulvinar massa bibendum. Integer dapibus odio lectus, quis consequat risus iaculis sed. Sed faucibus elementum nisl quis elementum. Sed et blandit sapien. Aliquam sit amet fermentum dui. Cras iaculis eget leo at tempor. Vivamus id auctor diam.'
        ),
        ContentComponent && _react2.default.createElement(ContentComponent, this.viewHandler())
      );
    }
  }]);

  return AdministrationContent;
}(_ViewComponent3.default);

var _default = AdministrationContent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AdministrationContent, 'AdministrationContent', '/var/projects/netgis-tutorials/client/src/Administration/views/Content.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Administration/views/Content.js');
}();

;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = (_temp = _class = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'container') },
        this.props.children
      );
    }
  }]);

  return Container;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string
}, _temp);
var _default = Container;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Container, 'Container', '/var/projects/netgis-tutorials/client/src/generic/components/Container.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Container.js');
}();

;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdministrationDashboard = function (_ViewComponent) {
  _inherits(AdministrationDashboard, _ViewComponent);

  function AdministrationDashboard() {
    _classCallCheck(this, AdministrationDashboard);

    return _possibleConstructorReturn(this, (AdministrationDashboard.__proto__ || Object.getPrototypeOf(AdministrationDashboard)).apply(this, arguments));
  }

  _createClass(AdministrationDashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AdministrationDashboard' },
        _react2.default.createElement(
          'div',
          null,
          'Administration Dashboard'
        )
      );
    }
  }]);

  return AdministrationDashboard;
}(_ViewComponent3.default);

var _default = AdministrationDashboard;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AdministrationDashboard, 'AdministrationDashboard', '/var/projects/netgis-tutorials/client/src/Administration/views/Dashboard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Administration/views/Dashboard.js');
}();

;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PagerComponent2 = __webpack_require__(14);

var _PagerComponent3 = _interopRequireDefault(_PagerComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdministrationPayments = function (_PagerComponent) {
  _inherits(AdministrationPayments, _PagerComponent);

  function AdministrationPayments() {
    _classCallCheck(this, AdministrationPayments);

    return _possibleConstructorReturn(this, (AdministrationPayments.__proto__ || Object.getPrototypeOf(AdministrationPayments)).apply(this, arguments));
  }

  _createClass(AdministrationPayments, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AdministrationPayments' },
        _react2.default.createElement(
          'div',
          null,
          'Administration Payments'
        )
      );
    }
  }]);

  return AdministrationPayments;
}(_PagerComponent3.default);

var _default = AdministrationPayments;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AdministrationPayments, 'AdministrationPayments', '/var/projects/netgis-tutorials/client/src/Administration/views/Payments.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Administration/views/Payments.js');
}();

;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PagerComponent2 = __webpack_require__(14);

var _PagerComponent3 = _interopRequireDefault(_PagerComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdministrationUsers = function (_PagerComponent) {
  _inherits(AdministrationUsers, _PagerComponent);

  function AdministrationUsers() {
    _classCallCheck(this, AdministrationUsers);

    return _possibleConstructorReturn(this, (AdministrationUsers.__proto__ || Object.getPrototypeOf(AdministrationUsers)).apply(this, arguments));
  }

  _createClass(AdministrationUsers, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AdministrationUsers' },
        _react2.default.createElement(
          'div',
          null,
          'Administration Users'
        )
      );
    }
  }]);

  return AdministrationUsers;
}(_PagerComponent3.default);

var _default = AdministrationUsers;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AdministrationUsers, 'AdministrationUsers', '/var/projects/netgis-tutorials/client/src/Administration/views/Users.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Administration/views/Users.js');
}();

;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

var _ConfirmMail = __webpack_require__(193);

var _ConfirmMail2 = _interopRequireDefault(_ConfirmMail);

var _ConfirmRecover = __webpack_require__(194);

var _ConfirmRecover2 = _interopRequireDefault(_ConfirmRecover);

var _Login = __webpack_require__(195);

var _Login2 = _interopRequireDefault(_Login);

var _Logout = __webpack_require__(196);

var _Logout2 = _interopRequireDefault(_Logout);

var _Recover = __webpack_require__(197);

var _Recover2 = _interopRequireDefault(_Recover);

var _Register = __webpack_require__(198);

var _Register2 = _interopRequireDefault(_Register);

var _navigation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthorizationContent = function (_ViewComponent) {
  _inherits(AuthorizationContent, _ViewComponent);

  function AuthorizationContent() {
    _classCallCheck(this, AuthorizationContent);

    return _possibleConstructorReturn(this, (AuthorizationContent.__proto__ || Object.getPrototypeOf(AuthorizationContent)).apply(this, arguments));
  }

  _createClass(AuthorizationContent, [{
    key: 'getViews',
    value: function getViews() {
      var _LOCATION_IDS$AUTHORI;

      return (_LOCATION_IDS$AUTHORI = {}, _defineProperty(_LOCATION_IDS$AUTHORI, _navigation.LOCATION_IDS.AUTHORIZATION_CONFIRM_MAIL, _ConfirmMail2.default), _defineProperty(_LOCATION_IDS$AUTHORI, _navigation.LOCATION_IDS.AUTHORIZATION_CONFIRM_RECOVER, _ConfirmRecover2.default), _defineProperty(_LOCATION_IDS$AUTHORI, _navigation.LOCATION_IDS.AUTHORIZATION_LOGIN, _Login2.default), _defineProperty(_LOCATION_IDS$AUTHORI, _navigation.LOCATION_IDS.AUTHORIZATION_LOGOUT, _Logout2.default), _defineProperty(_LOCATION_IDS$AUTHORI, _navigation.LOCATION_IDS.AUTHORIZATION_RECOVER, _Recover2.default), _defineProperty(_LOCATION_IDS$AUTHORI, _navigation.LOCATION_IDS.AUTHORIZATION_REGISTER, _Register2.default), _LOCATION_IDS$AUTHORI)[this.state.content];
    }
  }, {
    key: 'render',
    value: function render() {
      var ContentComponent = this.getContent();

      return _react2.default.createElement(
        'div',
        { ref: 'Authorization', className: 'content-component' },
        _react2.default.createElement(
          'div',
          null,
          'Authorization'
        ),
        ContentComponent && _react2.default.createElement(ContentComponent, this.viewHandler())
      );
    }
  }]);

  return AuthorizationContent;
}(_ViewComponent3.default);

var _default = AuthorizationContent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AuthorizationContent, 'AuthorizationContent', '/var/projects/netgis-tutorials/client/src/Authorization/views/Content.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Authorization/views/Content.js');
}();

;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FlowComponent2 = __webpack_require__(8);

var _FlowComponent3 = _interopRequireDefault(_FlowComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthorizationConfirmMail = function (_FlowComponent) {
  _inherits(AuthorizationConfirmMail, _FlowComponent);

  function AuthorizationConfirmMail() {
    _classCallCheck(this, AuthorizationConfirmMail);

    return _possibleConstructorReturn(this, (AuthorizationConfirmMail.__proto__ || Object.getPrototypeOf(AuthorizationConfirmMail)).apply(this, arguments));
  }

  _createClass(AuthorizationConfirmMail, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AuthorizationConfirmMail' },
        _react2.default.createElement(
          'div',
          null,
          'Authorization Confirm Mail'
        )
      );
    }
  }]);

  return AuthorizationConfirmMail;
}(_FlowComponent3.default);

var _default = AuthorizationConfirmMail;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AuthorizationConfirmMail, 'AuthorizationConfirmMail', '/var/projects/netgis-tutorials/client/src/Authorization/views/ConfirmMail.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Authorization/views/ConfirmMail.js');
}();

;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FlowComponent2 = __webpack_require__(8);

var _FlowComponent3 = _interopRequireDefault(_FlowComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthorizationConfirmRecover = function (_FlowComponent) {
  _inherits(AuthorizationConfirmRecover, _FlowComponent);

  function AuthorizationConfirmRecover() {
    _classCallCheck(this, AuthorizationConfirmRecover);

    return _possibleConstructorReturn(this, (AuthorizationConfirmRecover.__proto__ || Object.getPrototypeOf(AuthorizationConfirmRecover)).apply(this, arguments));
  }

  _createClass(AuthorizationConfirmRecover, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AuthorizationConfirmRecover' },
        _react2.default.createElement(
          'div',
          null,
          'Authorization Confirm Recover'
        )
      );
    }
  }]);

  return AuthorizationConfirmRecover;
}(_FlowComponent3.default);

var _default = AuthorizationConfirmRecover;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AuthorizationConfirmRecover, 'AuthorizationConfirmRecover', '/var/projects/netgis-tutorials/client/src/Authorization/views/ConfirmRecover.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Authorization/views/ConfirmRecover.js');
}();

;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FlowComponent2 = __webpack_require__(8);

var _FlowComponent3 = _interopRequireDefault(_FlowComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthorizationLogin = function (_FlowComponent) {
  _inherits(AuthorizationLogin, _FlowComponent);

  function AuthorizationLogin() {
    _classCallCheck(this, AuthorizationLogin);

    return _possibleConstructorReturn(this, (AuthorizationLogin.__proto__ || Object.getPrototypeOf(AuthorizationLogin)).apply(this, arguments));
  }

  _createClass(AuthorizationLogin, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AuthorizationLogin' },
        _react2.default.createElement(
          'div',
          null,
          'Authorization Login'
        )
      );
    }
  }]);

  return AuthorizationLogin;
}(_FlowComponent3.default);

var _default = AuthorizationLogin;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AuthorizationLogin, 'AuthorizationLogin', '/var/projects/netgis-tutorials/client/src/Authorization/views/Login.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Authorization/views/Login.js');
}();

;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FlowComponent2 = __webpack_require__(8);

var _FlowComponent3 = _interopRequireDefault(_FlowComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthorizationLogout = function (_FlowComponent) {
  _inherits(AuthorizationLogout, _FlowComponent);

  function AuthorizationLogout() {
    _classCallCheck(this, AuthorizationLogout);

    return _possibleConstructorReturn(this, (AuthorizationLogout.__proto__ || Object.getPrototypeOf(AuthorizationLogout)).apply(this, arguments));
  }

  _createClass(AuthorizationLogout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AuthorizationLogout' },
        _react2.default.createElement(
          'div',
          null,
          'Authorization Logout'
        )
      );
    }
  }]);

  return AuthorizationLogout;
}(_FlowComponent3.default);

var _default = AuthorizationLogout;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AuthorizationLogout, 'AuthorizationLogout', '/var/projects/netgis-tutorials/client/src/Authorization/views/Logout.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Authorization/views/Logout.js');
}();

;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FlowComponent2 = __webpack_require__(8);

var _FlowComponent3 = _interopRequireDefault(_FlowComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthorizationRecover = function (_FlowComponent) {
  _inherits(AuthorizationRecover, _FlowComponent);

  function AuthorizationRecover() {
    _classCallCheck(this, AuthorizationRecover);

    return _possibleConstructorReturn(this, (AuthorizationRecover.__proto__ || Object.getPrototypeOf(AuthorizationRecover)).apply(this, arguments));
  }

  _createClass(AuthorizationRecover, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AuthorizationRecover' },
        _react2.default.createElement(
          'div',
          null,
          'Authorization Recover'
        )
      );
    }
  }]);

  return AuthorizationRecover;
}(_FlowComponent3.default);

var _default = AuthorizationRecover;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AuthorizationRecover, 'AuthorizationRecover', '/var/projects/netgis-tutorials/client/src/Authorization/views/Recover.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Authorization/views/Recover.js');
}();

;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FlowComponent2 = __webpack_require__(8);

var _FlowComponent3 = _interopRequireDefault(_FlowComponent2);

var _Step = __webpack_require__(199);

var _Step2 = _interopRequireDefault(_Step);

var _Step3 = __webpack_require__(200);

var _Step4 = _interopRequireDefault(_Step3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthorizationRegister = function (_FlowComponent) {
  _inherits(AuthorizationRegister, _FlowComponent);

  function AuthorizationRegister() {
    _classCallCheck(this, AuthorizationRegister);

    return _possibleConstructorReturn(this, (AuthorizationRegister.__proto__ || Object.getPrototypeOf(AuthorizationRegister)).apply(this, arguments));
  }

  _createClass(AuthorizationRegister, [{
    key: 'getViews',
    value: function getViews() {
      return {
        Step1: _Step2.default,
        Step2: _Step4.default
      }[this.state.step];
    }
  }, {
    key: 'render',
    value: function render() {
      var StepComponent = this.getContent();

      return _react2.default.createElement(
        'div',
        { ref: 'AuthorizationRegister' },
        _react2.default.createElement(
          'div',
          null,
          'Authorization Register'
        ),
        StepComponent && _react2.default.createElement(StepComponent, this.viewHandler())
      );
    }
  }]);

  return AuthorizationRegister;
}(_FlowComponent3.default);

var _default = AuthorizationRegister;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AuthorizationRegister, 'AuthorizationRegister', '/var/projects/netgis-tutorials/client/src/Authorization/views/Register.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Authorization/views/Register.js');
}();

;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _StepComponent2 = __webpack_require__(48);

var _StepComponent3 = _interopRequireDefault(_StepComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthorizationRegisterStep1 = function (_StepComponent) {
  _inherits(AuthorizationRegisterStep1, _StepComponent);

  function AuthorizationRegisterStep1() {
    _classCallCheck(this, AuthorizationRegisterStep1);

    return _possibleConstructorReturn(this, (AuthorizationRegisterStep1.__proto__ || Object.getPrototypeOf(AuthorizationRegisterStep1)).apply(this, arguments));
  }

  _createClass(AuthorizationRegisterStep1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AuthorizationRegisterStep1' },
        _react2.default.createElement(
          'div',
          null,
          'Authorization Register Step 1'
        )
      );
    }
  }]);

  return AuthorizationRegisterStep1;
}(_StepComponent3.default);

var _default = AuthorizationRegisterStep1;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AuthorizationRegisterStep1, 'AuthorizationRegisterStep1', '/var/projects/netgis-tutorials/client/src/Authorization/views/Register/Step1.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Authorization/views/Register/Step1.js');
}();

;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = __webpack_require__(86);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _classnames2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/utils/cx.js');
}();

;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _StepComponent2 = __webpack_require__(48);

var _StepComponent3 = _interopRequireDefault(_StepComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthorizationRegisterStep2 = function (_StepComponent) {
  _inherits(AuthorizationRegisterStep2, _StepComponent);

  function AuthorizationRegisterStep2() {
    _classCallCheck(this, AuthorizationRegisterStep2);

    return _possibleConstructorReturn(this, (AuthorizationRegisterStep2.__proto__ || Object.getPrototypeOf(AuthorizationRegisterStep2)).apply(this, arguments));
  }

  _createClass(AuthorizationRegisterStep2, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'AuthorizationRegisterStep2' },
        _react2.default.createElement(
          'div',
          null,
          'Authorization Register Step 2'
        )
      );
    }
  }]);

  return AuthorizationRegisterStep2;
}(_StepComponent3.default);

var _default = AuthorizationRegisterStep2;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AuthorizationRegisterStep2, 'AuthorizationRegisterStep2', '/var/projects/netgis-tutorials/client/src/Authorization/views/Register/Step2.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Authorization/views/Register/Step2.js');
}();

;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

var _Details = __webpack_require__(202);

var _Details2 = _interopRequireDefault(_Details);

var _Exam = __webpack_require__(203);

var _Exam2 = _interopRequireDefault(_Exam);

var _Free = __webpack_require__(204);

var _Free2 = _interopRequireDefault(_Free);

var _Premium = __webpack_require__(205);

var _Premium2 = _interopRequireDefault(_Premium);

var _Register = __webpack_require__(206);

var _Register2 = _interopRequireDefault(_Register);

var _Topic = __webpack_require__(207);

var _Topic2 = _interopRequireDefault(_Topic);

var _Topics = __webpack_require__(208);

var _Topics2 = _interopRequireDefault(_Topics);

var _navigation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoursesContent = function (_ViewComponent) {
  _inherits(CoursesContent, _ViewComponent);

  function CoursesContent() {
    _classCallCheck(this, CoursesContent);

    return _possibleConstructorReturn(this, (CoursesContent.__proto__ || Object.getPrototypeOf(CoursesContent)).apply(this, arguments));
  }

  _createClass(CoursesContent, [{
    key: 'getViews',
    value: function getViews() {
      var _LOCATION_IDS$COURSES;

      return (_LOCATION_IDS$COURSES = {}, _defineProperty(_LOCATION_IDS$COURSES, _navigation.LOCATION_IDS.COURSES_DETAILS, _Details2.default), _defineProperty(_LOCATION_IDS$COURSES, _navigation.LOCATION_IDS.COURSES_EXAM, _Exam2.default), _defineProperty(_LOCATION_IDS$COURSES, _navigation.LOCATION_IDS.COURSES_FREE, _Free2.default), _defineProperty(_LOCATION_IDS$COURSES, _navigation.LOCATION_IDS.COURSES_PREMIUM, _Premium2.default), _defineProperty(_LOCATION_IDS$COURSES, _navigation.LOCATION_IDS.COURSES_REGISTER, _Register2.default), _defineProperty(_LOCATION_IDS$COURSES, _navigation.LOCATION_IDS.COURSES_TOPIC, _Topic2.default), _defineProperty(_LOCATION_IDS$COURSES, _navigation.LOCATION_IDS.COURSES_TOPICS, _Topics2.default), _LOCATION_IDS$COURSES)[this.state.content];
    }
  }, {
    key: 'render',
    value: function render() {
      var ContentComponent = this.getContent();

      return _react2.default.createElement(
        'div',
        { ref: 'Courses', className: 'content-component' },
        _react2.default.createElement(
          'div',
          null,
          'Courses'
        ),
        ContentComponent && _react2.default.createElement(ContentComponent, this.viewHandler())
      );
    }
  }]);

  return CoursesContent;
}(_ViewComponent3.default);

var _default = CoursesContent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CoursesContent, 'CoursesContent', '/var/projects/netgis-tutorials/client/src/Courses/views/Content.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Courses/views/Content.js');
}();

;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoursesDetails = function (_ViewComponent) {
  _inherits(CoursesDetails, _ViewComponent);

  function CoursesDetails() {
    _classCallCheck(this, CoursesDetails);

    return _possibleConstructorReturn(this, (CoursesDetails.__proto__ || Object.getPrototypeOf(CoursesDetails)).apply(this, arguments));
  }

  _createClass(CoursesDetails, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'CoursesDetails' },
        _react2.default.createElement(
          'div',
          null,
          'Courses Details'
        )
      );
    }
  }]);

  return CoursesDetails;
}(_ViewComponent3.default);

var _default = CoursesDetails;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CoursesDetails, 'CoursesDetails', '/var/projects/netgis-tutorials/client/src/Courses/views/Details.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Courses/views/Details.js');
}();

;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FlowComponent2 = __webpack_require__(8);

var _FlowComponent3 = _interopRequireDefault(_FlowComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoursesExam = function (_FlowComponent) {
  _inherits(CoursesExam, _FlowComponent);

  function CoursesExam() {
    _classCallCheck(this, CoursesExam);

    return _possibleConstructorReturn(this, (CoursesExam.__proto__ || Object.getPrototypeOf(CoursesExam)).apply(this, arguments));
  }

  _createClass(CoursesExam, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'CoursesExam' },
        _react2.default.createElement(
          'div',
          null,
          'Courses Exam'
        )
      );
    }
  }]);

  return CoursesExam;
}(_FlowComponent3.default);

var _default = CoursesExam;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CoursesExam, 'CoursesExam', '/var/projects/netgis-tutorials/client/src/Courses/views/Exam.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Courses/views/Exam.js');
}();

;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PagerComponent2 = __webpack_require__(14);

var _PagerComponent3 = _interopRequireDefault(_PagerComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoursesFree = function (_PagerComponent) {
  _inherits(CoursesFree, _PagerComponent);

  function CoursesFree() {
    _classCallCheck(this, CoursesFree);

    return _possibleConstructorReturn(this, (CoursesFree.__proto__ || Object.getPrototypeOf(CoursesFree)).apply(this, arguments));
  }

  _createClass(CoursesFree, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'CoursesFree' },
        _react2.default.createElement(
          'div',
          null,
          'Courses Free'
        )
      );
    }
  }]);

  return CoursesFree;
}(_PagerComponent3.default);

var _default = CoursesFree;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CoursesFree, 'CoursesFree', '/var/projects/netgis-tutorials/client/src/Courses/views/Free.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Courses/views/Free.js');
}();

;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PagerComponent2 = __webpack_require__(14);

var _PagerComponent3 = _interopRequireDefault(_PagerComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoursesPremium = function (_PagerComponent) {
  _inherits(CoursesPremium, _PagerComponent);

  function CoursesPremium() {
    _classCallCheck(this, CoursesPremium);

    return _possibleConstructorReturn(this, (CoursesPremium.__proto__ || Object.getPrototypeOf(CoursesPremium)).apply(this, arguments));
  }

  _createClass(CoursesPremium, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'CoursesPremium' },
        _react2.default.createElement(
          'div',
          null,
          'Courses Premium'
        )
      );
    }
  }]);

  return CoursesPremium;
}(_PagerComponent3.default);

var _default = CoursesPremium;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CoursesPremium, 'CoursesPremium', '/var/projects/netgis-tutorials/client/src/Courses/views/Premium.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Courses/views/Premium.js');
}();

;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FlowComponent2 = __webpack_require__(8);

var _FlowComponent3 = _interopRequireDefault(_FlowComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoursesRegister = function (_FlowComponent) {
  _inherits(CoursesRegister, _FlowComponent);

  function CoursesRegister() {
    _classCallCheck(this, CoursesRegister);

    return _possibleConstructorReturn(this, (CoursesRegister.__proto__ || Object.getPrototypeOf(CoursesRegister)).apply(this, arguments));
  }

  _createClass(CoursesRegister, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'CoursesRegister' },
        _react2.default.createElement(
          'div',
          null,
          'Courses Register'
        )
      );
    }
  }]);

  return CoursesRegister;
}(_FlowComponent3.default);

var _default = CoursesRegister;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CoursesRegister, 'CoursesRegister', '/var/projects/netgis-tutorials/client/src/Courses/views/Register.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Courses/views/Register.js');
}();

;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoursesTopic = function (_ViewComponent) {
  _inherits(CoursesTopic, _ViewComponent);

  function CoursesTopic() {
    _classCallCheck(this, CoursesTopic);

    return _possibleConstructorReturn(this, (CoursesTopic.__proto__ || Object.getPrototypeOf(CoursesTopic)).apply(this, arguments));
  }

  _createClass(CoursesTopic, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'CoursesTopic' },
        _react2.default.createElement(
          'div',
          null,
          'Courses Topic'
        )
      );
    }
  }]);

  return CoursesTopic;
}(_ViewComponent3.default);

var _default = CoursesTopic;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CoursesTopic, 'CoursesTopic', '/var/projects/netgis-tutorials/client/src/Courses/views/Topic.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Courses/views/Topic.js');
}();

;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PagerComponent2 = __webpack_require__(14);

var _PagerComponent3 = _interopRequireDefault(_PagerComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoursesTopics = function (_PagerComponent) {
  _inherits(CoursesTopics, _PagerComponent);

  function CoursesTopics() {
    _classCallCheck(this, CoursesTopics);

    return _possibleConstructorReturn(this, (CoursesTopics.__proto__ || Object.getPrototypeOf(CoursesTopics)).apply(this, arguments));
  }

  _createClass(CoursesTopics, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'CoursesTopics' },
        _react2.default.createElement(
          'div',
          null,
          'Courses Topics'
        )
      );
    }
  }]);

  return CoursesTopics;
}(_PagerComponent3.default);

var _default = CoursesTopics;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CoursesTopics, 'CoursesTopics', '/var/projects/netgis-tutorials/client/src/Courses/views/Topics.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Courses/views/Topics.js');
}();

;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeContent = function (_ViewComponent) {
  _inherits(HomeContent, _ViewComponent);

  function HomeContent() {
    _classCallCheck(this, HomeContent);

    return _possibleConstructorReturn(this, (HomeContent.__proto__ || Object.getPrototypeOf(HomeContent)).apply(this, arguments));
  }

  _createClass(HomeContent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'Home', className: 'content-component' },
        _react2.default.createElement(
          'div',
          null,
          'Home'
        )
      );
    }
  }]);

  return HomeContent;
}(_ViewComponent3.default);

var _default = HomeContent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HomeContent, 'HomeContent', '/var/projects/netgis-tutorials/client/src/Home/views/Content.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Home/views/Content.js');
}();

;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent = __webpack_require__(3);

var _ViewComponent2 = _interopRequireDefault(_ViewComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchContent = function (_PagerComponent) {
  _inherits(SearchContent, _PagerComponent);

  function SearchContent() {
    _classCallCheck(this, SearchContent);

    return _possibleConstructorReturn(this, (SearchContent.__proto__ || Object.getPrototypeOf(SearchContent)).apply(this, arguments));
  }

  _createClass(SearchContent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'Search', className: 'content-component' },
        _react2.default.createElement(
          'div',
          null,
          'Search'
        )
      );
    }
  }]);

  return SearchContent;
}(_ViewComponent2.default);

var _default = SearchContent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SearchContent, 'SearchContent', '/var/projects/netgis-tutorials/client/src/Search/views/Content.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/Search/views/Content.js');
}();

;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

var _navigation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserContent = function (_ViewComponent) {
  _inherits(UserContent, _ViewComponent);

  function UserContent() {
    _classCallCheck(this, UserContent);

    return _possibleConstructorReturn(this, (UserContent.__proto__ || Object.getPrototypeOf(UserContent)).apply(this, arguments));
  }

  _createClass(UserContent, [{
    key: 'getViews',
    value: function getViews() {
      var _LOCATION_IDS$USER_CO;

      return (_LOCATION_IDS$USER_CO = {}, _defineProperty(_LOCATION_IDS$USER_CO, _navigation.LOCATION_IDS.USER_COURSES, null), _defineProperty(_LOCATION_IDS$USER_CO, _navigation.LOCATION_IDS.USER_CHANGE_PASSWORD, null), _defineProperty(_LOCATION_IDS$USER_CO, _navigation.LOCATION_IDS.USER_PROFILE, null), _LOCATION_IDS$USER_CO)[this.state.content];
    }
  }, {
    key: 'render',
    value: function render() {
      var ContentComponent = this.getContent();

      return _react2.default.createElement(
        'div',
        { ref: 'User' },
        _react2.default.createElement(
          'div',
          null,
          'User'
        ),
        ContentComponent && _react2.default.createElement(ContentComponent, this.viewHandler())
      );
    }
  }]);

  return UserContent;
}(_ViewComponent3.default);

var _default = UserContent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserContent, 'UserContent', '/var/projects/netgis-tutorials/client/src/User/views/Content.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/User/views/Content.js');
}();

;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Field errors
var ERR_001 = exports.ERR_001 = function ERR_001() {
  return 'This field is required.';
};

var ERR_002 = exports.ERR_002 = function ERR_002() {
  return 'Invalid value.';
};

var ERR_003 = exports.ERR_003 = function ERR_003(maxLen, actualLen) {
  return maxLen && actualLen && 'Value is too long. Must be at most ' + maxLen + ' characters, but has ' + actualLen + ' characters.' || maxLen && 'Value is too long. Must be at most ' + maxLen + ' characters.' || 'Value is too long.';
};

var ERR_004 = exports.ERR_004 = function ERR_004(minLen, actualLen) {
  return minLen && actualLen && 'Value is too short. Must be at least ' + minLen + ' characters, but has ' + actualLen + ' characters.' || minLen && 'Value is too short. Must be at least ' + minLen + ' characters.' || 'Value is too short.';
};

var ERR_005 = exports.ERR_005 = function ERR_005(maxValue, actualValue) {
  return maxValue && actualValue && 'Value is too big. Must be at most ' + maxValue + ', but is ' + actualValue + '.' || maxValue && 'Value is too big. Must be at most ' + maxValue + '.' || 'Value is too big.';
};

var ERR_006 = exports.ERR_006 = function ERR_006(minValue, actualValue) {
  return minValue && actualValue && 'Value is too small. Must be at least ' + minValue + ', but is ' + actualValue + '.' || minValue && 'Value is too small. Must be at least ' + minValue + '.' || 'Value is too small.';
};

var ERR_007 = exports.ERR_007 = function ERR_007() {
  return 'Invalid item selected.';
};

var ERR_008 = exports.ERR_008 = function ERR_008() {
  return 'Invalid value.';
};

var ERR_009 = exports.ERR_009 = function ERR_009() {
  return 'Wrong username or password';
};

var ERR_010 = exports.ERR_010 = function ERR_010() {
  return 'Passwords do not match.';
};

var ERR_011 = exports.ERR_011 = function ERR_011() {
  return 'E-mails do not match.';
};

var ERR_012 = exports.ERR_012 = function ERR_012() {
  return 'This username is taken.';
};

var ERR_013 = exports.ERR_013 = function ERR_013() {
  return 'This e-mail is already registered.';
};

var ERR_014 = exports.ERR_014 = function ERR_014() {
  return 'This e-mail does not exist in the database.';
};

var ERR_015 = exports.ERR_015 = function ERR_015() {
  return 'The account is not active.';
};

var ERR_016 = exports.ERR_016 = function ERR_016(maxDate, actualDate) {
  return maxDate && actualDate && 'Date is set too far in the future. Must be at most ' + maxDate + ', but is ' + actualDate + '.' || maxDate && 'Date is set too far in the future. Must be at most ' + maxDate + '.' || 'Date is set too far in the future.';
};

var ERR_017 = exports.ERR_017 = function ERR_017(minDate, actualDate) {
  return minDate && actualDate && 'Date is set too far in the past. Must be at least ' + minDate + ', but is ' + actualDate + '.' || minDate && 'Date is set too far in the past. Must be at least ' + minDate + '.' || 'Date is set too far in the past.';
};

// Form errors
var ERR_101 = exports.ERR_101 = function ERR_101() {
  return 'The form has errors.';
};

var ERR_102 = exports.ERR_102 = function ERR_102() {
  return 'Wrong username or password.';
};

var ERR_103 = exports.ERR_103 = function ERR_103() {
  return 'Data you provided is already used by one of our users.';
};

var ERR_104 = exports.ERR_104 = function ERR_104() {
  return 'Data you provided do not exist in our database.';
};

var ERR_105 = exports.ERR_105 = function ERR_105() {
  return 'The account is not active.';
};

// View errors
var ERR_201 = exports.ERR_201 = function ERR_201() {
  return 'Error processing request.';
};

var ERR_202 = exports.ERR_202 = function ERR_202() {
  return 'Error processing request.';
};

var ERR_203 = exports.ERR_203 = function ERR_203() {
  return 'Error processing request.';
};

var ERR_204 = exports.ERR_204 = function ERR_204() {
  return 'Error processing request.';
};

var ERR_205 = exports.ERR_205 = function ERR_205() {
  return 'Invalid request.';
};

var ERR_206 = exports.ERR_206 = function ERR_206() {
  return 'We are sorry, but we cannot process your request. Probably your link has expired.';
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ERR_001, 'ERR_001', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_002, 'ERR_002', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_003, 'ERR_003', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_004, 'ERR_004', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_005, 'ERR_005', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_006, 'ERR_006', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_007, 'ERR_007', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_008, 'ERR_008', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_009, 'ERR_009', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_010, 'ERR_010', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_011, 'ERR_011', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_012, 'ERR_012', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_013, 'ERR_013', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_014, 'ERR_014', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_015, 'ERR_015', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_016, 'ERR_016', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_017, 'ERR_017', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_101, 'ERR_101', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_102, 'ERR_102', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_103, 'ERR_103', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_104, 'ERR_104', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_105, 'ERR_105', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_201, 'ERR_201', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_202, 'ERR_202', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_203, 'ERR_203', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_204, 'ERR_204', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_205, 'ERR_205', '/var/projects/netgis-tutorials/client/src/App/errors.js');

  __REACT_HOT_LOADER__.register(ERR_206, 'ERR_206', '/var/projects/netgis-tutorials/client/src/App/errors.js');
}();

;

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHART_LEGEND_POSITION = exports.CHART_TYPES = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _CHART_TYPE_TO_CLASS, _CHART_LEGEND_POSITIO, _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _reactChartjs = __webpack_require__(439);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CHART_TYPES = exports.CHART_TYPES = {
  BAR: Symbol('CHART_TYPE.BAR'),
  BUBBLE: Symbol('CHART_TYPE.BUBBLE'),
  DOUGHNUT: Symbol('CHART_TYPE.DOUGHNUT'),
  HORIZONTAL_BAR: Symbol('CHART_TYPE.HORIZONTAL_BAR'),
  LINE: Symbol('CHART_TYPE.LINE'),
  PIE: Symbol('CHART_TYPE.PIE'),
  POLAR: Symbol('CHART_TYPE.POLAR'),
  RADAR: Symbol('CHART_TYPE.RADAR'),
  SCATTER: Symbol('CHART_TYPE.SCATTER')
};

var CHART_LEGEND_POSITION = exports.CHART_LEGEND_POSITION = {
  BOTTOM: Symbol('CHART_LEGEND_POSITION.BOTTOM'),
  LEFT: Symbol('CHART_LEGEND_POSITION.LEFT'),
  RIGHT: Symbol('CHART_LEGEND_POSITION.RIGHT'),
  TOP: Symbol('CHART_LEGEND_POSITION.TOP')
};

var CHART_TYPE_TO_CLASS = (_CHART_TYPE_TO_CLASS = {}, _defineProperty(_CHART_TYPE_TO_CLASS, CHART_TYPES.BAR, _reactChartjs.Bar), _defineProperty(_CHART_TYPE_TO_CLASS, CHART_TYPES.BUBBLE, _reactChartjs.Bubble), _defineProperty(_CHART_TYPE_TO_CLASS, CHART_TYPES.DOUGHNUT, _reactChartjs.Doughnut), _defineProperty(_CHART_TYPE_TO_CLASS, CHART_TYPES.HORIZONTAL_BAR, _reactChartjs.HorizontalBar), _defineProperty(_CHART_TYPE_TO_CLASS, CHART_TYPES.LINE, _reactChartjs.Line), _defineProperty(_CHART_TYPE_TO_CLASS, CHART_TYPES.PIE, _reactChartjs.Pie), _defineProperty(_CHART_TYPE_TO_CLASS, CHART_TYPES.POLAR, _reactChartjs.Polar), _defineProperty(_CHART_TYPE_TO_CLASS, CHART_TYPES.RADAR, _reactChartjs.Radar), _defineProperty(_CHART_TYPE_TO_CLASS, CHART_TYPES.SCATTER, _reactChartjs.Scatter), _CHART_TYPE_TO_CLASS);

var CHART_LEGEND_POSITION_TO_STRING = (_CHART_LEGEND_POSITIO = {}, _defineProperty(_CHART_LEGEND_POSITIO, CHART_LEGEND_POSITION.BOTTOM, 'bottom'), _defineProperty(_CHART_LEGEND_POSITIO, CHART_LEGEND_POSITION.LEFT, 'left'), _defineProperty(_CHART_LEGEND_POSITIO, CHART_LEGEND_POSITION.RIGHT, 'right'), _defineProperty(_CHART_LEGEND_POSITIO, CHART_LEGEND_POSITION.TOP, 'top'), _CHART_LEGEND_POSITIO);

var prepareChartProps = function prepareChartProps(props) {
  var legendPosition = props.legendPosition,
      labels = props.labels,
      datasets = props.datasets,
      _props$responsive = props.responsive,
      responsive = _props$responsive === undefined ? true : _props$responsive,
      rest = _objectWithoutProperties(props, ['legendPosition', 'labels', 'datasets', 'responsive']);

  return _extends({}, rest, {
    legend: _extends({}, rest.legend, {
      position: CHART_LEGEND_POSITION_TO_STRING[legendPosition || CHART_LEGEND_POSITION.TOP],
      display: Boolean(legendPosition)
    }),
    data: _extends({}, rest.data, {
      labels: labels,
      datasets: datasets
    }),
    options: _extends({}, rest.options, {
      responsive: responsive,
      tooltips: {
        mode: 'index',
        intersect: false
      }
    })
  });
};

var Chart = (_temp = _class = function (_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart() {
    _classCallCheck(this, Chart);

    return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments));
  }

  _createClass(Chart, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          className = _props.className,
          _props$chartType = _props.chartType,
          chartType = _props$chartType === undefined ? CHART_TYPES.LINE : _props$chartType,
          props = _objectWithoutProperties(_props, ['title', 'className', 'chartType']);

      var ChartComponent = CHART_TYPE_TO_CLASS[chartType];

      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'chart') },
        _react2.default.createElement(
          'div',
          { className: (0, _cx2.default)('chart-title') },
          title
        ),
        _react2.default.createElement(ChartComponent, prepareChartProps(props))
      );
    }
  }]);

  return Chart;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string,
  chartType: _propTypes.PropTypes.symbol,
  legendPosition: _propTypes.PropTypes.symbol,
  labels: _propTypes.PropTypes.array,
  datasets: _propTypes.PropTypes.array,
  responsive: _propTypes.PropTypes.bool,
  title: _propTypes.PropTypes.string
}, _temp);
var _default = Chart;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CHART_TYPES, 'CHART_TYPES', '/var/projects/netgis-tutorials/client/src/generic/components/Chart.js');

  __REACT_HOT_LOADER__.register(CHART_LEGEND_POSITION, 'CHART_LEGEND_POSITION', '/var/projects/netgis-tutorials/client/src/generic/components/Chart.js');

  __REACT_HOT_LOADER__.register(CHART_TYPE_TO_CLASS, 'CHART_TYPE_TO_CLASS', '/var/projects/netgis-tutorials/client/src/generic/components/Chart.js');

  __REACT_HOT_LOADER__.register(CHART_LEGEND_POSITION_TO_STRING, 'CHART_LEGEND_POSITION_TO_STRING', '/var/projects/netgis-tutorials/client/src/generic/components/Chart.js');

  __REACT_HOT_LOADER__.register(prepareChartProps, 'prepareChartProps', '/var/projects/netgis-tutorials/client/src/generic/components/Chart.js');

  __REACT_HOT_LOADER__.register(Chart, 'Chart', '/var/projects/netgis-tutorials/client/src/generic/components/Chart.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Chart.js');
}();

;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Component2 = __webpack_require__(32);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewComponent = function (_Component) {
  _inherits(ViewComponent, _Component);

  function ViewComponent() {
    _classCallCheck(this, ViewComponent);

    return _possibleConstructorReturn(this, (ViewComponent.__proto__ || Object.getPrototypeOf(ViewComponent)).apply(this, arguments));
  }

  _createClass(ViewComponent, [{
    key: 'viewHandler',
    value: function viewHandler() {
      return _extends({}, _get(ViewComponent.prototype.__proto__ || Object.getPrototypeOf(ViewComponent.prototype), 'viewHandler', this).call(this), {
        contentState: this.props.contentState.contentState,
        navigate: this.props.navigate
      });
    }
  }, {
    key: 'prepareView',
    value: function prepareView(props, callback) {
      var contentState = props.contentState;

      this.setState(contentState ? Object.assign({}, contentState.state, {
        content: contentState.contentState && contentState.contentState.content
      }) : {}, callback);
    }
  }, {
    key: 'afterFetch',
    value: function afterFetch() /* oldState */{
      _get(ViewComponent.prototype.__proto__ || Object.getPrototypeOf(ViewComponent.prototype), 'afterFetch', this).call(this);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _this2 = this;

      this.prepareView(newProps, function () {
        _get(ViewComponent.prototype.__proto__ || Object.getPrototypeOf(ViewComponent.prototype), 'componentWillReceiveProps', _this2).call(_this2, newProps);
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this3 = this;

      this.navigate = this.props.navigate;
      this.prepareView(this.props, function () {
        _get(ViewComponent.prototype.__proto__ || Object.getPrototypeOf(ViewComponent.prototype), 'componentWillMount', _this3).call(_this3);
      });
    }
  }]);

  return ViewComponent;
}(_Component3.default);

var _default = ViewComponent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ViewComponent, 'ViewComponent', '/var/projects/netgis-tutorials/client/src/generic/components/ViewComponent.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/ViewComponent.js');
}();

;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltips = (_temp = _class = function (_React$Component) {
  _inherits(Tooltips, _React$Component);

  function Tooltips() {
    _classCallCheck(this, Tooltips);

    return _possibleConstructorReturn(this, (Tooltips.__proto__ || Object.getPrototypeOf(Tooltips)).apply(this, arguments));
  }

  _createClass(Tooltips, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          errors = _props.errors,
          hints = _props.hints,
          warnings = _props.warnings,
          classType = _props.classType;


      return errors || hints || warnings ? _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)('tooltips') },
        errors && _react2.default.createElement(
          'div',
          { className: (0, _cx2.default)(classType + '-tooltip', classType + '-tooltip-error') },
          _react2.default.createElement('i', null),
          errors
        ),
        warnings && !errors && _react2.default.createElement(
          'div',
          { className: (0, _cx2.default)(classType + '-tooltip', classType + '-tooltip-warning') },
          _react2.default.createElement('i', null),
          warnings
        ),
        hints && !warnings && !errors && _react2.default.createElement(
          'div',
          { className: (0, _cx2.default)(classType + '-tooltip', classType + '-tooltip-hint') },
          _react2.default.createElement('i', null),
          hints
        )
      ) : null;
    }
  }]);

  return Tooltips;
}(_react2.default.Component), _class.propTypes = {
  classType: _propTypes.PropTypes.string,
  errors: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.object]),
  hints: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.object]),
  warnings: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.object])
}, _temp);
var _default = Tooltips;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Tooltips, 'Tooltips', '/var/projects/netgis-tutorials/client/src/generic/components/Tooltips.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Tooltips.js');
}();

;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_React$Component) {
  _inherits(Loader, _React$Component);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
  }

  _createClass(Loader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: (0, _cx2.default)('view-loader') },
          _react2.default.createElement('div', null),
          _react2.default.createElement('div', null),
          _react2.default.createElement('div', null),
          _react2.default.createElement('div', null),
          _react2.default.createElement('div', null),
          _react2.default.createElement(
            'span',
            { className: (0, _cx2.default)('view-loader-loading') },
            'Loading'
          )
        )
      );
    }
  }]);

  return Loader;
}(_react2.default.Component);

var _default = Loader;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Loader, 'Loader', '/var/projects/netgis-tutorials/client/src/generic/components/Loader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Loader.js');
}();

;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(31);

var _Loader2 = _interopRequireDefault(_Loader);

var _update = __webpack_require__(94);

var _update2 = _interopRequireDefault(_update);

var _request = __webpack_require__(33);

var _request2 = _interopRequireDefault(_request);

var _handlers = __webpack_require__(146);

var _handlers2 = _interopRequireDefault(_handlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this));

    _this.fetched = false;
    _this.fieldHandlerOptions = {};
    _this.fieldValueGet = {};
    return _this;
  }

  _createClass(Component, [{
    key: 'viewHandler',
    value: function viewHandler() {
      return {
        updateState: this.updateState
      };
    }
  }, {
    key: 'fetchData',
    value: function fetchData() {
      var _this2 = this;

      var url = this.getUrl();
      var params = _extends({}, this.getDefaultRequestParams(), this.getRequestParams());
      if (url) {
        var oldState = Object.assign({}, this.state);
        return (0, _request2.default)(url, params).then(function (response) {
          _this2.fetched = true;
          _this2.setState(_extends({}, _this2.state, { data: response }), function () {
            _this2.afterFetch(oldState);
          });
        });
      } else {
        this.setState(this.state);
        this.fetched = true;
      }
    }
  }, {
    key: 'afterFetch',
    value: function afterFetch() /* oldState */{}
  }, {
    key: 'shouldFetchData',
    value: function shouldFetchData() /* oldProps, newProps */{
      return false;
    }
  }, {
    key: 'getUrl',
    value: function getUrl() {
      return this.state && this.state.config && this.state.config.api;
    }
  }, {
    key: 'getRequestParams',
    value: function getRequestParams() {
      return this.state && this.state.config && this.state.config.request || {};
    }
  }, {
    key: 'getDefaultRequestParams',
    value: function getDefaultRequestParams() {
      return {};
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (this.shouldFetchData(this.props, newProps)) {
        this.fetched = false;
        this.fetchData();
      }
    }
  }, {
    key: 'getHandlers',
    value: function getHandlers() {
      return _handlers2.default;
    }
  }, {
    key: 'getHandlerFunction',
    value: function getHandlerFunction(key) {
      var field = this.state.data.fields[key] || {};
      var _field$widget = field.widget,
          fieldType = _field$widget.fieldType,
          fieldFormat = _field$widget.fieldFormat;

      var handlers = this.getHandlers();

      return handlers[fieldType] || handlers[key] || fieldFormat === 'complex' && handlers.complex || fieldFormat === 'list' && handlers.list || handlers.defaultHandler;
    }
  }, {
    key: 'fieldHandler',
    value: function fieldHandler(key) {
      var _this3 = this;

      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var customErrors = opts.customErrors,
          getValue = opts.getValue,
          restOpts = _objectWithoutProperties(opts, ['customErrors', 'getValue']);

      var options = _extends({
        errorsConfig: _extends({}, this.getErrorConfig(), customErrors)
      }, restOpts);

      this.fieldHandlerOptions[key] = options;
      this.fieldValueGet[key] = getValue;

      return this.getHandlerFunction(key).call(this, {
        field: this.state.data.fields[key],
        key: key,
        state: this.state,
        updateFields: function updateFields(spec, callback) {
          _this3.setState((0, _update2.default)(_this3.state, { data: { fields: spec } }), callback);
        },
        options: options
      });
    }
  }, {
    key: 'getFieldHandlerOptions',
    value: function getFieldHandlerOptions(key) {
      return this.fieldHandlerOptions[key];
    }
  }, {
    key: 'getFieldValue',
    value: function getFieldValue(key) {
      var fields = this.state.data.fields;

      if (key in this.fieldValueGet && typeof this.fieldValueGet[key] === 'function') {
        return this.fieldValueGet[key].call(this, fields[key]);
      }
      return fields[key].value;
    }
  }, {
    key: 'getData',
    value: function getData() {
      var _this4 = this;

      var fields = this.state.data.fields;

      return Object.keys(fields).reduce(function (result, key) {
        return Object.assign(result, _defineProperty({}, key, _this4.getFieldValue(key)));
      }, {});
    }
  }, {
    key: 'getErrors',
    value: function getErrors() {
      var _this5 = this;

      var fields = this.state.data.fields;

      var errors = {};
      var spec = Object.keys(fields).reduce(function (result, key) {
        var err = validateValue(fields[key].value, fields[key].widget, _this5.getFieldHandlerOptions(key));
        if (err) {
          Object.assign(errors, _defineProperty({}, key, err));
        }
        return Object.assign(result, _defineProperty({}, key, {
          errors: { $set: err }
        }));
      }, {});
      this.updateState({
        fields: {
          spec: spec
        }
      });
      return spec;
    }
  }, {
    key: 'getErrorConfig',
    value: function getErrorConfig() {
      return null;
      //To override
    }
  }, {
    key: 'onFinish',
    value: function onFinish() /* response */{}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
      this.fetchData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'navigate',
    value: function navigate() /* id, params */{
      // To override
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      if (!this.fetched) {
        return _Loader2.default;
      }
      return this.getViews();
    }
  }, {
    key: 'getViews',
    value: function getViews() {
      // To override
      return null;
    }
  }, {
    key: 'updateState',
    value: function updateState(spec, callback) {
      this.setState((0, _update2.default)(this.state, { data: spec }), callback);
    }
  }]);

  return Component;
}(_react2.default.Component);

var _default = Component;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Component, 'Component', '/var/projects/netgis-tutorials/client/src/generic/components/Component.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Component.js');
}();

;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _axios = __webpack_require__(96);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MOCK_DATA = false;
var MOCK_TIMEOUT = 500;
var ERROR_RESPONSE_URLS = [];
var API_HOST = 'http://127.0.0.1:7003/';

var snakeToCamel = function snakeToCamel(s) {
  return s.replace(/(_\w)/g, function (m) {
    return m[1].toUpperCase();
  });
};
var camelToSnake = function camelToSnake(s) {
  return s.replace(/\.?([A-Z]+)/g, function (x, y) {
    return '_' + y.toLowerCase();
  }).replace(/^_/, '');
};

var requireMocks = function requireMocks() {
  return __webpack_require__(115).default;
};

var deserializeResponse = function deserializeResponse(data) {
  if (data && Array.isArray(data)) {
    return data.map(function (item) {
      return deserializeResponse(item);
    });
  } else if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    return Object.keys(data).reduce(function (result, key) {
      return Object.assign(result, _defineProperty({}, snakeToCamel(key), deserializeResponse(data[key])));
    }, {});
  } else {
    return data;
  }
};

var serializeRequest = function serializeRequest(data) {
  if (data && Array.isArray(data)) {
    return data.map(function (item) {
      return serializeRequest(item);
    });
  } else if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    return Object.keys(data).reduce(function (result, key) {
      return Object.assign(result, _defineProperty({}, camelToSnake(key), serializeRequest(data[key])));
    }, {});
  } else {
    return data;
  }
};

var _default = function _default(url, data) {
  var reqData = serializeRequest(data);
  var apiUrl = '' + API_HOST + url;
  if (MOCK_DATA) {
    var fakeRoutes = requireMocks();
    var errorsMockHandler = fakeRoutes['api/errors'];
    console.debug(url);
    console.debug('REQUEST:', reqData);
    return new Promise(function (resolve, reject) {
      if (ERROR_RESPONSE_URLS.includes(url)) {
        var errors = typeof errorsMockHandler === 'function' ? errorsMockHandler(reqData) : errorsMockHandler;
        console.debug('RESPONSE ERROR:', errors);
        setTimeout(function () {
          return reject(deserializeResponse(errors));
        }, MOCK_TIMEOUT); // fake async
        return;
      } else {
        if ('errors' in reqData) {
          var _errors = typeof errorsMockHandler === 'function' ? errorsMockHandler(reqData) : errorsMockHandler;
          console.debug('RESPONSE ERROR:', _errors);
          setTimeout(function () {
            return reject(deserializeResponse(_errors));
          }, MOCK_TIMEOUT); // fake async
          return;
        }
        var fakeRoute = fakeRoutes[url];
        if (!fakeRoute) {
          return _axios2.default.post(url, reqData);
        }
        var response = typeof fakeRoute === 'function' ? fakeRoute(reqData) : fakeRoute;
        console.debug('RESPONSE:', response);
        setTimeout(function () {
          return resolve(deserializeResponse(response));
        }, MOCK_TIMEOUT); // fake asnyc
        return;
      }
    });
  }
  return new Promise(function (resolve) {
    _axios2.default.post(apiUrl, reqData).then(function (_ref) {
      var data = _ref.data,
          status = _ref.status;
      return resolve(deserializeResponse(_extends({}, data, { status: status })));
    }, function (errors) {
      if (errors && errors.config && errors.statusText) {
        resolve({ errors: errors.config.statusText });
      } else {
        resolve({ errors: 'Application error.' });
      }
    });
  });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MOCK_DATA, 'MOCK_DATA', '/var/projects/netgis-tutorials/client/src/App/utils/request.js');

  __REACT_HOT_LOADER__.register(MOCK_TIMEOUT, 'MOCK_TIMEOUT', '/var/projects/netgis-tutorials/client/src/App/utils/request.js');

  __REACT_HOT_LOADER__.register(ERROR_RESPONSE_URLS, 'ERROR_RESPONSE_URLS', '/var/projects/netgis-tutorials/client/src/App/utils/request.js');

  __REACT_HOT_LOADER__.register(API_HOST, 'API_HOST', '/var/projects/netgis-tutorials/client/src/App/utils/request.js');

  __REACT_HOT_LOADER__.register(snakeToCamel, 'snakeToCamel', '/var/projects/netgis-tutorials/client/src/App/utils/request.js');

  __REACT_HOT_LOADER__.register(camelToSnake, 'camelToSnake', '/var/projects/netgis-tutorials/client/src/App/utils/request.js');

  __REACT_HOT_LOADER__.register(requireMocks, 'requireMocks', '/var/projects/netgis-tutorials/client/src/App/utils/request.js');

  __REACT_HOT_LOADER__.register(deserializeResponse, 'deserializeResponse', '/var/projects/netgis-tutorials/client/src/App/utils/request.js');

  __REACT_HOT_LOADER__.register(serializeRequest, 'serializeRequest', '/var/projects/netgis-tutorials/client/src/App/utils/request.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/App/utils/request.js');
}();

;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FIELD_FORMATS = {
  BASIC: 'basic',
  COMPLEX: 'complex',
  LIST: 'list'
};

var field = function field() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$value = _ref.value,
      value = _ref$value === undefined ? null : _ref$value,
      _ref$errors = _ref.errors,
      errors = _ref$errors === undefined ? null : _ref$errors,
      _ref$hints = _ref.hints,
      hints = _ref$hints === undefined ? null : _ref$hints,
      _ref$warnings = _ref.warnings,
      warnings = _ref$warnings === undefined ? null : _ref$warnings,
      _ref$required = _ref.required,
      required = _ref$required === undefined ? false : _ref$required,
      _ref$fieldType = _ref.fieldType,
      fieldType = _ref$fieldType === undefined ? 'str' : _ref$fieldType,
      _ref$widgetProps = _ref.widgetProps,
      widgetProps = _ref$widgetProps === undefined ? {} : _ref$widgetProps;

  var fieldFormat = FIELD_FORMATS.BASIC;
  return {
    value: value,
    errors: errors,
    hints: hints,
    warnings: warnings,
    widget: _extends({
      required: required,
      fieldFormat: fieldFormat,
      fieldType: fieldType
    }, fieldWidgetProps[fieldType] || {}, widgetProps)
  };
};

var complexField = function complexField(subFields) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$errors = _ref2.errors,
      errors = _ref2$errors === undefined ? null : _ref2$errors,
      _ref2$hints = _ref2.hints,
      hints = _ref2$hints === undefined ? null : _ref2$hints,
      _ref2$warnings = _ref2.warnings,
      warnings = _ref2$warnings === undefined ? null : _ref2$warnings,
      fieldType = _ref2.fieldType,
      _ref2$required = _ref2.required,
      required = _ref2$required === undefined ? false : _ref2$required;

  var fieldFormat = FIELD_FORMATS.COMPLEX;
  var fieldKeys = Object.keys(subFields);
  var baseStructure = { value: {}, errors: errors, hints: hints, warnings: warnings, widget: { fieldFormat: fieldFormat, fieldType: fieldType, fieldKeys: fieldKeys, required: required } };
  return fieldKeys.reduce(function (result, subKey) {
    var subField = field(subFields[subKey]);

    var widget = subField.widget,
        props = _objectWithoutProperties(subField, ['widget']);

    result.value[subKey] = props;
    result.widget[subKey] = widget;
    return result;
  }, baseStructure);
};

var listField = function listField(subFields) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$errors = _ref3.errors,
      errors = _ref3$errors === undefined ? null : _ref3$errors,
      _ref3$hints = _ref3.hints,
      hints = _ref3$hints === undefined ? null : _ref3$hints,
      _ref3$warnings = _ref3.warnings,
      warnings = _ref3$warnings === undefined ? null : _ref3$warnings;

  var fieldFormat = FIELD_FORMATS.LIST;
  var fieldKeys = Object.keys(subFields);
  var baseStructure = { value: [], errors: errors, hints: hints, warnings: warnings, widget: { fieldFormat: fieldFormat, fieldKeys: fieldKeys } };
  // return fieldKeys.reduce((result, subKey) => {
  //   const subField = field(subfields[subKey]);
  //   return Object.keys(subField).reduce((res, prop) => {
  //     res[prop][subKey] = subfields[prop];
  //   }, result);
  // }, baseStructure);
};

var fieldWidgetProps = {
  account: {
    maxLen: 32,
    minLen: 26,
    regex: '^[0-9 ]+$'
  },
  autocomplete: {},
  bool: {},
  choice: {},
  date: {},
  email: {
    regex: '^[\\w-.]+@([\\w-]+\\.)+[\\w-]+$'
  },
  'float': {
    regex: '^[0-9]+((\\.|\\,)[0-9]+)?$'
  },
  iban: {
    maxLen: 30,
    minLen: 6,
    regex: '^[A-Za-z]{2}[0-9]{2}[A-Za-z0-9]{2,26}'
  },
  'int': {
    regex: '^[0-9]+$'
  },
  login: {
    minLen: 5,
    regex: '^[A-Za-z0-9][A-Za-z0-9_.]+[A-Za-z0-9]$'
  },
  nip: {
    maxLen: 13,
    minLen: 10,
    regex: '^[0-9\\-]+$'
  },
  nrdow: {
    maxLen: 9,
    minLen: 9,
    regex: '^[A-Za-z]{3}[0-9]{6}$'
  },
  multiChoice: {},
  passport: {
    maxLen: 9,
    minLen: 9,
    regex: '^[A-Za-z]{2}[0-9]{7}$'
  },
  password: {
    minLen: 5,
    regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*\\(\\)\\-\\_\\+\\=\\{\\{\\}\\[\\]:;\\"\\\'\\<\\>,./?]).+$'
  },
  regon: {
    maxLen: 14,
    minLen: 9,
    regex: '^([0-9]{9}|[0-9]{14})$'
  },
  search: {
    minLen: 3,
    regex: '^[\\w\\. ]+$'
  },
  str: {}
};

var accountField = function accountField() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref4.value,
      errors = _ref4.errors,
      hints = _ref4.hints,
      warnings = _ref4.warnings,
      required = _ref4.required,
      widgetProps = _ref4.widgetProps;

  var fieldType = 'account';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var autocompleteField = function autocompleteField() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref5.value,
      errors = _ref5.errors,
      hints = _ref5.hints,
      warnings = _ref5.warnings,
      required = _ref5.required,
      widgetProps = _ref5.widgetProps;

  var fieldType = 'autocomplete';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var boolField = function boolField() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref6.value,
      errors = _ref6.errors,
      hints = _ref6.hints,
      warnings = _ref6.warnings,
      required = _ref6.required,
      widgetProps = _ref6.widgetProps;

  var fieldType = 'bool';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var choiceField = function choiceField() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref7.value,
      errors = _ref7.errors,
      hints = _ref7.hints,
      warnings = _ref7.warnings,
      required = _ref7.required,
      _ref7$widgetProps = _ref7.widgetProps,
      widgetProps = _ref7$widgetProps === undefined ? { items: [] } : _ref7$widgetProps;

  var fieldType = 'bool';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var dateField = function dateField() {
  var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref8.value,
      errors = _ref8.errors,
      hints = _ref8.hints,
      warnings = _ref8.warnings,
      required = _ref8.required,
      widgetProps = _ref8.widgetProps;

  var fieldType = 'date';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var dateRangeField = function dateRangeField() {
  var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref9$dateFrom = _ref9.dateFrom,
      dateFrom = _ref9$dateFrom === undefined ? {} : _ref9$dateFrom,
      _ref9$dateTo = _ref9.dateTo,
      dateTo = _ref9$dateTo === undefined ? {} : _ref9$dateTo;

  var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      errors = _ref10.errors,
      hints = _ref10.hints,
      warnings = _ref10.warnings,
      required = _ref10.required;

  var fieldType = 'dateRange';
  return complexField({ dateFrom: _extends({}, dateFrom, { fieldType: 'date' }), dateTo: _extends({}, dateTo, { fieldType: 'date' }) }, { errors: errors, hints: hints, warnings: warnings, fieldType: fieldType, required: required });
};

var emailField = function emailField() {
  var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref11.value,
      errors = _ref11.errors,
      hints = _ref11.hints,
      warnings = _ref11.warnings,
      _ref11$required = _ref11.required,
      required = _ref11$required === undefined ? true : _ref11$required,
      widgetProps = _ref11.widgetProps;

  var fieldType = 'email';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var floatField = function floatField() {
  var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref12.value,
      errors = _ref12.errors,
      hints = _ref12.hints,
      warnings = _ref12.warnings,
      required = _ref12.required,
      widgetProps = _ref12.widgetProps;

  var fieldType = 'float';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var ibanField = function ibanField() {
  var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref13.value,
      errors = _ref13.errors,
      hints = _ref13.hints,
      warnings = _ref13.warnings,
      required = _ref13.required,
      widgetProps = _ref13.widgetProps;

  var fieldType = 'iban';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var intField = function intField() {
  var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref14.value,
      errors = _ref14.errors,
      hints = _ref14.hints,
      warnings = _ref14.warnings,
      required = _ref14.required,
      widgetProps = _ref14.widgetProps;

  var fieldType = 'int';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var loginField = function loginField() {
  var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref15.value,
      errors = _ref15.errors,
      hints = _ref15.hints,
      warnings = _ref15.warnings,
      _ref15$required = _ref15.required,
      required = _ref15$required === undefined ? true : _ref15$required,
      widgetProps = _ref15.widgetProps;

  var fieldType = 'login';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var multiChoiceField = function multiChoiceField() {
  var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref16.value,
      errors = _ref16.errors,
      hints = _ref16.hints,
      warnings = _ref16.warnings,
      _ref16$required = _ref16.required,
      required = _ref16$required === undefined ? true : _ref16$required,
      _ref16$widgetProps = _ref16.widgetProps,
      widgetProps = _ref16$widgetProps === undefined ? { items: [] } : _ref16$widgetProps;

  var fieldType = 'multiChoice';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var nipField = function nipField() {
  var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref17.value,
      errors = _ref17.errors,
      hints = _ref17.hints,
      warnings = _ref17.warnings,
      required = _ref17.required,
      widgetProps = _ref17.widgetProps;

  var fieldType = 'nip';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var nrdowField = function nrdowField() {
  var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref18.value,
      errors = _ref18.errors,
      hints = _ref18.hints,
      warnings = _ref18.warnings,
      required = _ref18.required,
      widgetProps = _ref18.widgetProps;

  var fieldType = 'nrdow';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var passportField = function passportField() {
  var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref19.value,
      errors = _ref19.errors,
      hints = _ref19.hints,
      warnings = _ref19.warnings,
      required = _ref19.required,
      widgetProps = _ref19.widgetProps;

  var fieldType = 'passport';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var passwordField = function passwordField() {
  var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref20.value,
      errors = _ref20.errors,
      hints = _ref20.hints,
      warnings = _ref20.warnings,
      _ref20$required = _ref20.required,
      required = _ref20$required === undefined ? true : _ref20$required,
      widgetProps = _ref20.widgetProps;

  var fieldType = 'password';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var regonField = function regonField() {
  var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref21.value,
      errors = _ref21.errors,
      hints = _ref21.hints,
      warnings = _ref21.warnings,
      required = _ref21.required,
      widgetProps = _ref21.widgetProps;

  var fieldType = 'regon';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var searchField = function searchField() {
  var _ref22 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref22.value,
      errors = _ref22.errors,
      hints = _ref22.hints,
      warnings = _ref22.warnings,
      required = _ref22.required,
      widgetProps = _ref22.widgetProps;

  var fieldType = 'search';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

var strField = function strField() {
  var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref23.value,
      errors = _ref23.errors,
      hints = _ref23.hints,
      warnings = _ref23.warnings,
      required = _ref23.required,
      widgetProps = _ref23.widgetProps;

  var fieldType = 'str';
  return field({ value: value, errors: errors, hints: hints, warnings: warnings, required: required, fieldType: fieldType, widgetProps: widgetProps });
};

exports.accountField = accountField;
exports.autocompleteField = autocompleteField;
exports.boolField = boolField;
exports.choiceField = choiceField;
exports.dateField = dateField;
exports.dateRangeField = dateRangeField;
exports.emailField = emailField;
exports.floatField = floatField;
exports.ibanField = ibanField;
exports.intField = intField;
exports.loginField = loginField;
exports.multiChoiceField = multiChoiceField;
exports.nipField = nipField;
exports.nrdowField = nrdowField;
exports.passportField = passportField;
exports.passwordField = passwordField;
exports.regonField = regonField;
exports.searchField = searchField;
exports.strField = strField;
var _default = field;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FIELD_FORMATS, 'FIELD_FORMATS', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(field, 'field', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(complexField, 'complexField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(listField, 'listField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(fieldWidgetProps, 'fieldWidgetProps', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(accountField, 'accountField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(autocompleteField, 'autocompleteField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(boolField, 'boolField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(choiceField, 'choiceField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(dateField, 'dateField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(dateRangeField, 'dateRangeField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(emailField, 'emailField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(floatField, 'floatField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(ibanField, 'ibanField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(intField, 'intField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(loginField, 'loginField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(multiChoiceField, 'multiChoiceField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(nipField, 'nipField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(nrdowField, 'nrdowField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(passportField, 'passportField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(passwordField, 'passwordField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(regonField, 'regonField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(searchField, 'searchField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(strField, 'strField', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/common/fields.js');
}();

;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultHandler = __webpack_require__(13);

var _defaultHandler2 = _interopRequireDefault(_defaultHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_ref) {
  var field = _ref.field,
      key = _ref.key,
      updateFields = _ref.updateFields,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? {
    validateOnBlur: true,
    checkEmptyOnBlur: true,
    errorsConfig: {}
  } : _ref$options;

  var defaultHandlerProps = (0, _defaultHandler2.default)({ field: field, key: key, /* state, */updateFields: updateFields, options: options });

  var value = field.value,
      widget = field.widget;
  var multiChoice = widget.multiChoice,
      items = widget.items;


  var updateField = function updateField(spec, callback) {
    updateFields(_defineProperty({}, key, spec), callback);
  };

  return Object.assign(defaultHandlerProps, {
    onFocus: function onFocus(e) {
      console.debug('focus', e);
      updateField({
        errors: { $set: null },
        hints: { $set: null },
        warnings: { $set: null }
      });
    },
    onOpen: function onOpen() {
      updateField({
        errors: { $set: null },
        hints: { $set: null },
        warnings: { $set: null }
      });
    },
    onClear: function onClear(e) {
      console.debug('clear', e);
      updateField({
        value: { $set: null }
      });
    },
    onChangeValue: function onChangeValue(newOptions, e) {
      console.debug('change', newOptions, e);
      var $set = multiChoice ? newOptions.map(function (_ref2) {
        var id = _ref2.id;
        return id;
      }) : newOptions.id;
      updateField({
        value: { $set: $set },
        errors: { $set: null }
      });
    },
    onClose: function onClose() {
      console.debug('close');
    },

    value: value,
    items: items
  });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/autocomplete.js');
}();

;

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _defaultHandler = __webpack_require__(13);

var _date = __webpack_require__(148);

var _date2 = __webpack_require__(42);

var _date3 = _interopRequireDefault(_date2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LITERALS = {
  DATE_INPUT_GO_TO_TODAY: 'Dziś',
  DATE_INPUT_PLACEHOLDER: '____-__-__'
};

var MONTHS = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];

var WEEKDAYS_LONG = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

var WEEKDAYS_SHORT = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'];

var commonDayPickerProps = {
  format: 'YYYY-MM-DD',
  parseDate: _date.stringToDate,
  placeholder: LITERALS.DATE_INPUT_PLACEHOLDER,
  showOutsideDays: true,
  todayButton: LITERALS.DATE_INPUT_GO_TO_TODAY,
  inputProps: {
    className: 'input'
  },
  dayPickerProps: {
    firstDayOfWeek: 1,
    locale: 'pl',
    showOutsideDays: true,
    months: MONTHS,
    weekdaysShort: WEEKDAYS_SHORT,
    weekdaysLong: WEEKDAYS_LONG
  }
};

var validateDate = function validateDate(value, widget, options) {
  var E = options.errorsConfig,
      checkEmptyOnBlur = options.checkEmptyOnBlur;


  if ('required' in widget && widget.required === true && checkEmptyOnBlur && !value) {
    return E.FLD_VALUE_REQUIRED();
  }

  var valueDate = new Date(value);

  if (value && (!value.match(_date2.FULL_DATE_REGEX) || isNaN(valueDate.getDate()) || !(0, _date3.default)(value))) {
    return E.FLD_INVLD_VALUE();
  }

  if (value && 'maxDate' in widget) {
    var maxDate = new Date(widget.maxDate);
    if (valueDate > maxDate) {
      return E.FLD_MAX_DATE_EXCEEDED(widget.maxDate, value);
    }
  }

  if (value && 'minDate' in widget) {
    var minDate = new Date(widget.minDate);
    if (valueDate < minDate) {
      return E.FLD_MIN_DATE_EXCEEDED(widget.minDate, value);
    }
  }

  if (value && 'disabledDays' in widget) {
    var disabledDays = widget.disabledDays;

    if (disabledDays.find(function (item) {
      return new Date(item).getDate() === valueDate.getDate();
    })) {
      return E.FLD_INVLD_VALUE();
    }
  }

  return null;
};

var validatePartialDate = function validatePartialDate(value, widget, options) {
  var E = options.errorsConfig;


  if (!value.match(_date2.PARTIAL_DATE_REGEX)) {
    return E.FLD_INVLD_VALUE();
  }
  return null;
};

var getDisabledDays = function getDisabledDays(widget) {
  var maxDate = widget.maxDate,
      minDate = widget.minDate,
      disabledDays = widget.disabledDays;

  return [Object.assign({}, maxDate && {
    after: new Date(maxDate)
  }, minDate && {
    before: new Date(minDate)
  })].concat(disabledDays ? disabledDays.map(function (item) {
    return new Date(item);
  }) : []);
};

var _default = function _default(_ref) {
  var field = _ref.field,
      key = _ref.key,
      updateFields = _ref.updateFields,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? {
    validateOnBlur: true,
    checkEmptyOnBlur: true,
    errorsConfig: {}
  } : _ref$options;

  var value = field.value,
      _field$widget = field.widget,
      required = _field$widget.required,
      disabled = _field$widget.disabled,
      widget = _objectWithoutProperties(_field$widget, ['required', 'disabled']),
      errors = field.errors,
      hints = field.hints,
      warnings = field.warnings;

  var _options$validateOnBl = options.validateOnBlur,
      validateOnBlur = _options$validateOnBl === undefined ? true : _options$validateOnBl;

  var cache = (0, _defaultHandler.sanitizeValue)(value);

  var updateField = function updateField(spec, callback) {
    updateFields(_defineProperty({}, key, spec), callback);
  };

  return _extends({}, commonDayPickerProps, {

    onDayChange: function onDayChange(newDate) {
      var newDateString = newDate ? (0, _date.dateToString)(newDate) : '';
      updateField({
        value: { $set: newDateString },
        errors: { $set: null }
      });
    },

    inputProps: _extends({}, commonDayPickerProps.inputProps, {
      onFocus: function onFocus(e) {
        console.debug('focus', e);
        updateField({
          errors: { $set: null },
          focused: { $set: true },
          hints: { $set: null },
          warnings: { $set: null }
        });
      },
      onBlur: function onBlur(e) {
        console.debug('blur', e);
        var $set = validateOnBlur ? errors || (0, _defaultHandler.validateValue)(value, widget, options) || validateDate(value, widget, options) : null;
        updateField({
          errors: { $set: $set },
          focused: { $set: false }
        });
      },
      onChange: function onChange(e) {
        var newValue = e.target.value.replace(/-/g, '').split('').reduce(function (result, item, index) {
          if (index === 4 || index === 6) {
            return result.concat('-').concat(item);
          }
          return result.concat(item);
        }, []).concat(e.target.value[e.target.value.length - 1] === '-' ? '-' : '').join('');
        console.debug('change', newValue, e);
        var $set = validatePartialDate(newValue, widget, options) ? value : newValue;
        e.target.value = $set;
        updateField({
          errors: { $set: null },
          hints: { $set: null },
          warnings: { $set: null },
          value: { $set: $set }
        });
      }
    }),

    dayPickerProps: _extends({}, commonDayPickerProps.dayPickerProps, {
      disabledDays: getDisabledDays(widget)
    }),

    value: cache,
    errors: errors,
    warnings: warnings,
    hints: hints,
    disabled: disabled,
    required: required
  });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LITERALS, 'LITERALS', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/date.js');

  __REACT_HOT_LOADER__.register(MONTHS, 'MONTHS', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/date.js');

  __REACT_HOT_LOADER__.register(WEEKDAYS_LONG, 'WEEKDAYS_LONG', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/date.js');

  __REACT_HOT_LOADER__.register(WEEKDAYS_SHORT, 'WEEKDAYS_SHORT', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/date.js');

  __REACT_HOT_LOADER__.register(commonDayPickerProps, 'commonDayPickerProps', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/date.js');

  __REACT_HOT_LOADER__.register(validateDate, 'validateDate', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/date.js');

  __REACT_HOT_LOADER__.register(validatePartialDate, 'validatePartialDate', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/date.js');

  __REACT_HOT_LOADER__.register(getDisabledDays, 'getDisabledDays', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/date.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/date.js');
}();

;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var PARTIAL_DATE_REGEX = exports.PARTIAL_DATE_REGEX = new RegExp('(^[0-9]{0,4}$)|(^[0-9]{4}-[0-9]{0,2}$)|(^[0-9]{4}-[0-9]{2}-[0-9]{0,2}$)', 'g');
var FULL_DATE_REGEX = exports.FULL_DATE_REGEX = new RegExp('(^[0-9]{4}-[0-9]{2}-[0-9]{2}((T| )[0-9]{2}\\:[0-9]{2}(\\:[0-9]{2})?)?$)', 'g');

var isLeapYear = exports.isLeapYear = function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

var _default = function _default(dateString) {
  if (typeof dateString !== 'string' || !dateString.match(FULL_DATE_REGEX)) {
    return undefined;
  }

  var _dateString$split = dateString.split(/[ T]/g),
      _dateString$split2 = _slicedToArray(_dateString$split, 2),
      datePart = _dateString$split2[0],
      timePart = _dateString$split2[1];

  var dateParts = datePart.split('-');
  if (dateParts.length !== 3) {
    return undefined;
  }
  var year = parseInt(dateParts[0], 10);
  var month = parseInt(dateParts[1], 10) - 1;
  var day = parseInt(dateParts[2], 10);

  var timeParts = timePart ? timePart.split(':') : '';
  if (timeParts.length < 2 || timeParts.length > 3) {
    return undefined;
  }
  var hour = timeParts[0] || null;
  var minute = timeParts[1] || null;
  var second = timeParts[2] || null;

  if (month < 0 || month >= 12) {
    return false;
  }
  if ([0, 2, 4, 6, 7, 9, 11].includes(month) && day > 31) {
    return false;
  }
  if ([3, 5, 8, 10].includes(month) && day > 30) {
    return false;
  }
  if (month === 1 && (day > 29 || !isLeapYear(year) && day > 28)) {
    return false;
  }
  if (hour > 24 || minute > 59 || second > 59) {
    return false;
  }
  return { year: year, month: month, day: day, hour: hour, minute: minute, second: second };
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PARTIAL_DATE_REGEX, 'PARTIAL_DATE_REGEX', '/var/projects/netgis-tutorials/client/src/generic/utils/validators/date.js');

  __REACT_HOT_LOADER__.register(FULL_DATE_REGEX, 'FULL_DATE_REGEX', '/var/projects/netgis-tutorials/client/src/generic/utils/validators/date.js');

  __REACT_HOT_LOADER__.register(isLeapYear, 'isLeapYear', '/var/projects/netgis-tutorials/client/src/generic/utils/validators/date.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/utils/validators/date.js');
}();

;

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultHandler = __webpack_require__(13);

var _defaultHandler2 = _interopRequireDefault(_defaultHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_ref) {
  var field = _ref.field,
      key = _ref.key,
      updateFields = _ref.updateFields,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? {
    errorsConfig: {}
  } : _ref$options;

  var defaultHandlerProps = (0, _defaultHandler2.default)({ field: field, key: key, /* state, */updateFields: updateFields, options: options });

  var value = field.value;


  var updateField = function updateField(spec, callback) {
    updateFields(_defineProperty({}, key, spec), callback);
  };

  return Object.assign(defaultHandlerProps, {
    onChangeValue: function onChangeValue(id, e) {
      console.debug('change', id, e);
      var $set = Array.isArray(value) && (value.includes(id) ? value.filter(function (item) {
        return item !== id;
      }) : value.concat([id])) || [id];
      updateField({
        value: { $set: $set },
        errors: { $set: null }
      });
    },

    value: value
  });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/utils/handlers/multiChoice.js');
}();

;

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2, _class3, _temp3, _class4, _temp4, _class5, _temp5;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H1 = (_temp = _class = function (_React$Component) {
  _inherits(H1, _React$Component);

  function H1() {
    _classCallCheck(this, H1);

    return _possibleConstructorReturn(this, (H1.__proto__ || Object.getPrototypeOf(H1)).apply(this, arguments));
  }

  _createClass(H1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          id = _props.id,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { id: id, className: (0, _cx2.default)(className, 'h', 'h1') },
        children
      );
    }
  }]);

  return H1;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.node])
}, _temp);
var H2 = (_temp2 = _class2 = function (_React$Component2) {
  _inherits(H2, _React$Component2);

  function H2() {
    _classCallCheck(this, H2);

    return _possibleConstructorReturn(this, (H2.__proto__ || Object.getPrototypeOf(H2)).apply(this, arguments));
  }

  _createClass(H2, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          id = _props2.id,
          className = _props2.className;


      return _react2.default.createElement(
        'div',
        { id: id, className: (0, _cx2.default)(className, 'h', 'h2') },
        children
      );
    }
  }]);

  return H2;
}(_react2.default.Component), _class2.propTypes = {
  className: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.node])
}, _temp2);
var H3 = (_temp3 = _class3 = function (_React$Component3) {
  _inherits(H3, _React$Component3);

  function H3() {
    _classCallCheck(this, H3);

    return _possibleConstructorReturn(this, (H3.__proto__ || Object.getPrototypeOf(H3)).apply(this, arguments));
  }

  _createClass(H3, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          children = _props3.children,
          id = _props3.id,
          className = _props3.className;


      return _react2.default.createElement(
        'div',
        { id: id, className: (0, _cx2.default)(className, 'h', 'h3') },
        children
      );
    }
  }]);

  return H3;
}(_react2.default.Component), _class3.propTypes = {
  className: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.node])
}, _temp3);
var H4 = (_temp4 = _class4 = function (_React$Component4) {
  _inherits(H4, _React$Component4);

  function H4() {
    _classCallCheck(this, H4);

    return _possibleConstructorReturn(this, (H4.__proto__ || Object.getPrototypeOf(H4)).apply(this, arguments));
  }

  _createClass(H4, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          children = _props4.children,
          id = _props4.id,
          className = _props4.className;


      return _react2.default.createElement(
        'div',
        { id: id, className: (0, _cx2.default)(className, 'h', 'h4') },
        children
      );
    }
  }]);

  return H4;
}(_react2.default.Component), _class4.propTypes = {
  className: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.node])
}, _temp4);
var H5 = (_temp5 = _class5 = function (_React$Component5) {
  _inherits(H5, _React$Component5);

  function H5() {
    _classCallCheck(this, H5);

    return _possibleConstructorReturn(this, (H5.__proto__ || Object.getPrototypeOf(H5)).apply(this, arguments));
  }

  _createClass(H5, [{
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          children = _props5.children,
          id = _props5.id,
          className = _props5.className;


      return _react2.default.createElement(
        'div',
        { id: id, className: (0, _cx2.default)(className, 'h', 'h5') },
        children
      );
    }
  }]);

  return H5;
}(_react2.default.Component), _class5.propTypes = {
  className: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.node])
}, _temp5);
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
;

var _temp6 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(H1, 'H1', '/var/projects/netgis-tutorials/client/src/generic/components/H.js');

  __REACT_HOT_LOADER__.register(H2, 'H2', '/var/projects/netgis-tutorials/client/src/generic/components/H.js');

  __REACT_HOT_LOADER__.register(H3, 'H3', '/var/projects/netgis-tutorials/client/src/generic/components/H.js');

  __REACT_HOT_LOADER__.register(H4, 'H4', '/var/projects/netgis-tutorials/client/src/generic/components/H.js');

  __REACT_HOT_LOADER__.register(H5, 'H5', '/var/projects/netgis-tutorials/client/src/generic/components/H.js');
}();

;

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

var _request = __webpack_require__(33);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepComponent = (_temp = _class = function (_ViewComponent) {
  _inherits(StepComponent, _ViewComponent);

  function StepComponent() {
    _classCallCheck(this, StepComponent);

    return _possibleConstructorReturn(this, (StepComponent.__proto__ || Object.getPrototypeOf(StepComponent)).apply(this, arguments));
  }

  _createClass(StepComponent, [{
    key: 'doAction',
    value: function doAction(action, data /*, errors*/) {
      var _this2 = this;

      var url = this.getUrl();
      this.fetched = false;
      if (url) {
        var oldState = Object.assign({}, this.state);
        return (0, _request2.default)(url, { action: action, data: data, step: this.state.step }).then(function (response) {
          _this2.fetched = true;
          _this2.setState(_extends({}, _this2.state, response), function () {
            _this2.afterFetch(oldState);
          });
        });
      } else {
        this.setState(this.state);
        this.fetched = true;
      }
    }
  }, {
    key: 'doBack',
    value: function doBack() {
      this.onBack();
      this.doAction('back');
    }
  }, {
    key: 'doSubmit',
    value: function doSubmit() {
      var errors = this.getErrors();
      if (errors) {
        return null;
      }
      var data = this.getData();
      this.onSubmit(data, errors);
      this.doAction('submit', data, errors);
    }
  }, {
    key: 'doPartial',
    value: function doPartial() {
      var data = this.getData();
      this.onPartial(data);
      this.doAction('partial', data);
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() /* data, errors */{}
  }, {
    key: 'onPartial',
    value: function onPartial() /* data */{}
  }, {
    key: 'onBack',
    value: function onBack() {}
  }]);

  return StepComponent;
}(_ViewComponent3.default), _class.contextTypes = {
  flow: _propTypes2.default.shape({
    onCancel: _propTypes2.default.func,
    onFinish: _propTypes2.default.func
  })
}, _temp);
var _default = StepComponent;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(StepComponent, 'StepComponent', '/var/projects/netgis-tutorials/client/src/generic/components/StepComponent.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/StepComponent.js');
}();

;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
module.exports = __webpack_require__(72);


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOTIFICATION_TYPES = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NOTIFICATION_TYPES_T, _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _Button = __webpack_require__(87);

var _Button2 = _interopRequireDefault(_Button);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NOTIFICATION_TYPES = exports.NOTIFICATION_TYPES = {
  ERROR: Symbol('NOTIFICATION_TYPES.ERROR'),
  WARNING: Symbol('NOTIFICATION_TYPES.WARNING'),
  INFO: Symbol('NOTIFICATION_TYPES.INFO'),
  SUCCESS: Symbol('NOTIFICATION_TYPES.SUCCESS'),
  GENERAL: Symbol('NOTIFICATION_TYPES.GENERAL'),
  BLACK: Symbol('NOTIFICATION_TYPES.BLACK'),
  WHITE: Symbol('NOTIFICATION_TYPES.WHITE')
};

var NOTIFICATION_TYPES_TO_CLASS = (_NOTIFICATION_TYPES_T = {}, _defineProperty(_NOTIFICATION_TYPES_T, NOTIFICATION_TYPES.ERROR, 'notification-error'), _defineProperty(_NOTIFICATION_TYPES_T, NOTIFICATION_TYPES.WARNING, 'notification-warning'), _defineProperty(_NOTIFICATION_TYPES_T, NOTIFICATION_TYPES.INFO, 'notification-info'), _defineProperty(_NOTIFICATION_TYPES_T, NOTIFICATION_TYPES.SUCCESS, 'notification-success'), _defineProperty(_NOTIFICATION_TYPES_T, NOTIFICATION_TYPES.GENERAL, 'notification-general'), _defineProperty(_NOTIFICATION_TYPES_T, NOTIFICATION_TYPES.BLACK, 'notification-black'), _defineProperty(_NOTIFICATION_TYPES_T, NOTIFICATION_TYPES.WHITE, 'notification-white'), _NOTIFICATION_TYPES_T);

var Notification = (_temp = _class = function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification() {
    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
  }

  _createClass(Notification, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          icon = _props.icon,
          externalLink = _props.externalLink,
          internalRedirection = _props.internalRedirection,
          _props$notificationTy = _props.notificationType,
          notificationType = _props$notificationTy === undefined ? NOTIFICATION_TYPES.GENERAL : _props$notificationTy;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)('notification-wrapper') },
        _react2.default.createElement(
          'div',
          { className: (0, _cx2.default)(className, 'notification', NOTIFICATION_TYPES_TO_CLASS[notificationType]) },
          icon && _react2.default.createElement(
            'span',
            { className: (0, _cx2.default)('notification-icon') },
            _react2.default.createElement('i', { className: (0, _cx2.default)('fa', 'fa-' + icon) })
          ),
          _react2.default.createElement(
            'span',
            { className: (0, _cx2.default)('notification-text') },
            children
          ),
          _react2.default.createElement(
            'span',
            { className: (0, _cx2.default)('notification-close'), onClick: function onClick() {
                onClose(id);
              } },
            _react2.default.createElement('i', { className: (0, _cx2.default)('fa', 'fa-close') })
          ),
          externalLink && _react2.default.createElement(
            'a',
            { className: (0, _cx2.default)('notification-external-link'), target: '_blank', href: externalLink.url },
            externalLink.text
          ),
          internalRedirection && _react2.default.createElement(
            _Button2.default,
            { className: (0, _cx2.default)('notification-button') },
            internalRedirection.text
          )
        )
      );
    }
  }]);

  return Notification;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.string,
  externalLink: _propTypes.PropTypes.shape({
    url: _propTypes.PropTypes.string,
    text: _propTypes.PropTypes.string
  }),
  icon: _propTypes.PropTypes.string,
  internalRedirection: _propTypes.PropTypes.shape({
    id: _propTypes.PropTypes.string,
    text: _propTypes.PropTypes.string
  }),
  notificationType: _propTypes.PropTypes.symbol,
  id: _propTypes.PropTypes.string,
  onClose: _propTypes.PropTypes.func
}, _temp);
var _default = Notification;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NOTIFICATION_TYPES, 'NOTIFICATION_TYPES', '/var/projects/netgis-tutorials/client/src/generic/components/Notification.js');

  __REACT_HOT_LOADER__.register(NOTIFICATION_TYPES_TO_CLASS, 'NOTIFICATION_TYPES_TO_CLASS', '/var/projects/netgis-tutorials/client/src/generic/components/Notification.js');

  __REACT_HOT_LOADER__.register(Notification, 'Notification', '/var/projects/netgis-tutorials/client/src/generic/components/Notification.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Notification.js');
}();

;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _API_URLS, _LOCATION_URLS, _TREE_PARENTS, _children3, _children4, _children5, _children6, _NAVIGATION;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LOCATION_IDS = {
  HOME: Symbol('LOCATION_IDS.HOME'),
  INIT: Symbol('LOCATION_IDS.INIT'),
  NOTIFY: Symbol('LOCATION_IDS.NOTIFY'),
  SEARCH: Symbol('LOCATION_IDS.SEARCH'),

  ABOUT: Symbol('LOCATION_IDS.ABOUT'),
  ABOUT_CONTACT: Symbol('LOCATION_IDS.ABOUT_CONTACT'),
  ABOUT_INFO: Symbol('LOCATION_IDS.ABOUT_INFO'),
  ABOUT_RULES: Symbol('LOCATION_IDS.ABOUT_RULES'),
  ABOUT_INFO_A: Symbol('LOCATION_IDS.ABOUT_INFO_A'),
  ABOUT_INFO_B: Symbol('LOCATION_IDS.ABOUT_INFO_B'),
  ABOUT_INFO_A_A: Symbol('LOCATION_IDS.ABOUT_INFO_A_A'),
  ABOUT_INFO_A_B: Symbol('LOCATION_IDS.ABOUT_INFO_A_B'),

  ADMINISTRATION: Symbol('LOCATION_IDS.ADMINISTRATION'),
  ADMINISTRATION_DASHBOARD: Symbol('LOCATION_IDS.ADMINISTRATION_DASHBOARD'),
  ADMINISTRATION_INVOICE: Symbol('LOCATION_IDS.ADMINISTRATION_INVOICE'),
  ADMINISTRATION_PAYMENTS: Symbol('LOCATION_IDS.ADMINISTRATION_PAYMENTS'),
  ADMINISTRATION_USER_COURSES: Symbol('LOCATION_IDS.ADMINISTRATION_USER_COURSES'),
  ADMINISTRATION_USERS: Symbol('LOCATION_IDS.ADMINISTRATION_USERS'),

  AUTHORIZATION: Symbol('LOCATION_IDS.AUTHORIZATION'),
  AUTHORIZATION_CONFIRM_MAIL: Symbol('LOCATION_IDS.AUTHORIZATION_CONFIRM_MAIL'),
  AUTHORIZATION_CONFIRM_RECOVER: Symbol('LOCATION_IDS.AUTHORIZATION_CONFIRM_RECOVER'),
  AUTHORIZATION_LOGIN: Symbol('LOCATION_IDS.AUTHORIZATION_LOGIN'),
  AUTHORIZATION_LOGOUT: Symbol('LOCATION_IDS.AUTHORIZATION_LOGOUT'),
  AUTHORIZATION_RECOVER: Symbol('LOCATION_IDS.AUTHORIZATION_RECOVER'),
  AUTHORIZATION_REGISTER: Symbol('LOCATION_IDS.AUTHORIZATION_REGISTER'),

  COURSES: Symbol('LOCATION_IDS.COURSES'),
  COURSES_CERTIFICATE: Symbol('LOCATION_IDS.COURSES_CERTIFICATE'),
  COURSES_DETAILS: Symbol('LOCATION_IDS.COURSES_DETAILS'),
  COURSES_EXAM: Symbol('LOCATION_IDS.COURSES_EXAM'),
  COURSES_FREE: Symbol('LOCATION_IDS.COURSES_FREE'),
  COURSES_PREMIUM: Symbol('LOCATION_IDS.COURSES_PREMIUM'),
  COURSES_REGISTER: Symbol('LOCATION_IDS.COURSES_REGISTER'),
  COURSES_TOPIC: Symbol('LOCATION_IDS.COURSES_TOPIC'),
  COURSES_TOPICS: Symbol('LOCATION_IDS.COURSES_TOPICS'),

  USER: Symbol('LOCATION_IDS.USER'),
  USER_CHANGE_PASSWORD: Symbol('LOCATION_IDS.USER_CHANGE_PASSWORD'),
  USER_COURSES: Symbol('LOCATION_IDS.USER_COURSES'),
  USER_PROFILE: Symbol('LOCATION_IDS.USER_PROFILE')
};

var API_URLS = (_API_URLS = {}, _defineProperty(_API_URLS, LOCATION_IDS.HOME, 'api/home'), _defineProperty(_API_URLS, LOCATION_IDS.INIT, 'api/init'), _defineProperty(_API_URLS, LOCATION_IDS.NOTIFY, 'api/notify'), _defineProperty(_API_URLS, LOCATION_IDS.SEARCH, 'api/search'), _defineProperty(_API_URLS, LOCATION_IDS.ABOUT_CONTACT, 'api/about/contact'), _defineProperty(_API_URLS, LOCATION_IDS.ABOUT_INFO, 'api/about/info'), _defineProperty(_API_URLS, LOCATION_IDS.ABOUT_RULES, 'api/about/rules'), _defineProperty(_API_URLS, LOCATION_IDS.ABOUT_INFO_A, 'api/about/info/a'), _defineProperty(_API_URLS, LOCATION_IDS.ABOUT_INFO_A_A, 'api/about/info/a/a'), _defineProperty(_API_URLS, LOCATION_IDS.ABOUT_INFO_A_B, 'api/about/info/a/b'), _defineProperty(_API_URLS, LOCATION_IDS.ADMINISTRATION_DASHBOARD, 'api/administration/dashboard'), _defineProperty(_API_URLS, LOCATION_IDS.ADMINISTRATION_INVOICE, 'api/administration/invoice'), _defineProperty(_API_URLS, LOCATION_IDS.ADMINISTRATION_PAYMENTS, 'api/administration/payments'), _defineProperty(_API_URLS, LOCATION_IDS.ADMINISTRATION_USER_COURSES, 'api/administration/user-courses'), _defineProperty(_API_URLS, LOCATION_IDS.ADMINISTRATION_USERS, 'api/administration/users'), _defineProperty(_API_URLS, LOCATION_IDS.AUTHORIZATION_CONFIRM_MAIL, 'api/authorization/confirm-mail'), _defineProperty(_API_URLS, LOCATION_IDS.AUTHORIZATION_CONFIRM_RECOVER, 'api/authorization/confirm-recover'), _defineProperty(_API_URLS, LOCATION_IDS.AUTHORIZATION_LOGIN, 'api/authorization/login'), _defineProperty(_API_URLS, LOCATION_IDS.AUTHORIZATION_LOGOUT, 'api/authorization/logout'), _defineProperty(_API_URLS, LOCATION_IDS.AUTHORIZATION_RECOVER, 'api/authorization/recover'), _defineProperty(_API_URLS, LOCATION_IDS.AUTHORIZATION_REGISTER, 'api/authorization/register'), _defineProperty(_API_URLS, LOCATION_IDS.COURSES_CERTIFICATE, 'api/courses/certificate'), _defineProperty(_API_URLS, LOCATION_IDS.COURSES_DETAILS, 'api/courses/details'), _defineProperty(_API_URLS, LOCATION_IDS.COURSES_EXAM, 'api/courses/exam'), _defineProperty(_API_URLS, LOCATION_IDS.COURSES_FREE, 'api/courses/free'), _defineProperty(_API_URLS, LOCATION_IDS.COURSES_PREMIUM, 'api/courses/premium'), _defineProperty(_API_URLS, LOCATION_IDS.COURSES_REGISTER, 'api/courses/register'), _defineProperty(_API_URLS, LOCATION_IDS.COURSES_TOPIC, 'api/courses/topic'), _defineProperty(_API_URLS, LOCATION_IDS.COURSES_TOPICS, 'api/courses/topics'), _defineProperty(_API_URLS, LOCATION_IDS.USER_CHANGE_PASSWORD, 'api/user/change-password'), _defineProperty(_API_URLS, LOCATION_IDS.USER_COURSES, 'api/user/courses'), _defineProperty(_API_URLS, LOCATION_IDS.USER_PROFILE, 'api/user/profile'), _API_URLS);

var LOCATION_URLS = (_LOCATION_URLS = {}, _defineProperty(_LOCATION_URLS, LOCATION_IDS.HOME, ['^$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.SEARCH, ['^search$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ABOUT, ['^about$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ABOUT_CONTACT, ['^about/contact$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ABOUT_INFO, ['^about/info$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ABOUT_RULES, ['^about/rules$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ABOUT_INFO_A, ['^about/info/a$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ABOUT_INFO_B, ['^about/info/b$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ABOUT_INFO_A_A, ['^about/info/a/a/([0-9]+)/(.*)$', ['id', 'name']]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ABOUT_INFO_A_B, ['^about/info/a/b$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ADMINISTRATION, ['^administration$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ADMINISTRATION_DASHBOARD, ['^administration/dashboard$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ADMINISTRATION_INVOICE, ['^administration/invoice$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ADMINISTRATION_PAYMENTS, ['^administration/payments$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ADMINISTRATION_USER_COURSES, ['^administration/user-courses/([0-9]+)$', ['id']]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.ADMINISTRATION_USERS, ['^administration/users$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.AUTHORIZATION, ['^auth$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.AUTHORIZATION_CONFIRM_MAIL, ['^auth/confirm-mail$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.AUTHORIZATION_CONFIRM_RECOVER, ['^auth/confirm-recover$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.AUTHORIZATION_LOGIN, ['^auth/login$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.AUTHORIZATION_LOGOUT, ['^auth/logout$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.AUTHORIZATION_RECOVER, ['^auth/recover$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.AUTHORIZATION_REGISTER, ['^auth/register$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.COURSES, ['^courses$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.COURSES_CERTIFICATE, ['^courses/certificate$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.COURSES_DETAILS, ['^courses/details$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.COURSES_EXAM, ['^courses/exam$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.COURSES_FREE, ['^courses/free$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.COURSES_PREMIUM, ['^courses/premium$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.COURSES_REGISTER, ['^courses/register$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.COURSES_TOPIC, ['^courses/topic$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.COURSES_TOPICS, ['^courses/topics$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.USER, ['^user$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.USER_CHANGE_PASSWORD, ['^user/change-password$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.USER_COURSES, ['^user/courses$', []]), _defineProperty(_LOCATION_URLS, LOCATION_IDS.USER_PROFILE, ['^user/profile$', []]), _LOCATION_URLS);

var TREE_PARENTS = (_TREE_PARENTS = {}, _defineProperty(_TREE_PARENTS, LOCATION_IDS.ABOUT_CONTACT, LOCATION_IDS.ABOUT), _defineProperty(_TREE_PARENTS, LOCATION_IDS.ABOUT_INFO, LOCATION_IDS.ABOUT), _defineProperty(_TREE_PARENTS, LOCATION_IDS.ABOUT_RULES, LOCATION_IDS.ABOUT), _defineProperty(_TREE_PARENTS, LOCATION_IDS.ABOUT_INFO_A, LOCATION_IDS.ABOUT_INFO), _defineProperty(_TREE_PARENTS, LOCATION_IDS.ABOUT_INFO_B, LOCATION_IDS.ABOUT_INFO), _defineProperty(_TREE_PARENTS, LOCATION_IDS.ABOUT_INFO_A_A, LOCATION_IDS.ABOUT_INFO_A), _defineProperty(_TREE_PARENTS, LOCATION_IDS.ABOUT_INFO_A_B, LOCATION_IDS.ABOUT_INFO_A), _defineProperty(_TREE_PARENTS, LOCATION_IDS.ADMINISTRATION_DASHBOARD, LOCATION_IDS.ADMINISTRATION), _defineProperty(_TREE_PARENTS, LOCATION_IDS.ADMINISTRATION_INVOICE, LOCATION_IDS.ADMINISTRATION), _defineProperty(_TREE_PARENTS, LOCATION_IDS.ADMINISTRATION_PAYMENTS, LOCATION_IDS.ADMINISTRATION), _defineProperty(_TREE_PARENTS, LOCATION_IDS.ADMINISTRATION_USER_COURSES, LOCATION_IDS.ADMINISTRATION), _defineProperty(_TREE_PARENTS, LOCATION_IDS.ADMINISTRATION_USERS, LOCATION_IDS.ADMINISTRATION), _defineProperty(_TREE_PARENTS, LOCATION_IDS.AUTHORIZATION_CONFIRM_MAIL, LOCATION_IDS.AUTHORIZATION), _defineProperty(_TREE_PARENTS, LOCATION_IDS.AUTHORIZATION_CONFIRM_RECOVER, LOCATION_IDS.AUTHORIZATION), _defineProperty(_TREE_PARENTS, LOCATION_IDS.AUTHORIZATION_LOGIN, LOCATION_IDS.AUTHORIZATION), _defineProperty(_TREE_PARENTS, LOCATION_IDS.AUTHORIZATION_LOGOUT, LOCATION_IDS.AUTHORIZATION), _defineProperty(_TREE_PARENTS, LOCATION_IDS.AUTHORIZATION_RECOVER, LOCATION_IDS.AUTHORIZATION), _defineProperty(_TREE_PARENTS, LOCATION_IDS.AUTHORIZATION_REGISTER, LOCATION_IDS.AUTHORIZATION), _defineProperty(_TREE_PARENTS, LOCATION_IDS.COURSES_CERTIFICATE, LOCATION_IDS.COURSES), _defineProperty(_TREE_PARENTS, LOCATION_IDS.COURSES_DETAILS, LOCATION_IDS.COURSES), _defineProperty(_TREE_PARENTS, LOCATION_IDS.COURSES_EXAM, LOCATION_IDS.COURSES), _defineProperty(_TREE_PARENTS, LOCATION_IDS.COURSES_FREE, LOCATION_IDS.COURSES), _defineProperty(_TREE_PARENTS, LOCATION_IDS.COURSES_PREMIUM, LOCATION_IDS.COURSES), _defineProperty(_TREE_PARENTS, LOCATION_IDS.COURSES_REGISTER, LOCATION_IDS.COURSES), _defineProperty(_TREE_PARENTS, LOCATION_IDS.COURSES_TOPIC, LOCATION_IDS.COURSES), _defineProperty(_TREE_PARENTS, LOCATION_IDS.COURSES_TOPICS, LOCATION_IDS.COURSES), _defineProperty(_TREE_PARENTS, LOCATION_IDS.USER_CHANGE_PASSWORD, LOCATION_IDS.USER), _defineProperty(_TREE_PARENTS, LOCATION_IDS.USER_COURSES, LOCATION_IDS.USER), _defineProperty(_TREE_PARENTS, LOCATION_IDS.USER_PROFILE, LOCATION_IDS.USER), _TREE_PARENTS);

var NAVIGATION = (_NAVIGATION = {}, _defineProperty(_NAVIGATION, LOCATION_IDS.ABOUT, {
  defaultChild: LOCATION_IDS.ABOUT_CONTACT,
  title: 'Informacje',
  children: (_children3 = {}, _defineProperty(_children3, LOCATION_IDS.ABOUT_CONTACT, {
    title: 'Kontakt'
  }), _defineProperty(_children3, LOCATION_IDS.ABOUT_RULES, {
    title: 'Regulamin'
  }), _defineProperty(_children3, LOCATION_IDS.ABOUT_INFO, {
    title: 'O nas',
    children: _defineProperty({}, LOCATION_IDS.ABOUT_INFO_A, {
      title: 'O nas A child test',
      children: _defineProperty({}, LOCATION_IDS.ABOUT_INFO_A_B, {
        title: 'O nas A B child test'
      })
    })
  }), _children3)
}), _defineProperty(_NAVIGATION, LOCATION_IDS.ADMINISTRATION, {
  defaultChild: LOCATION_IDS.ADMINISTRATION_DASHBOARD,
  title: 'Administracja',
  children: (_children4 = {}, _defineProperty(_children4, LOCATION_IDS.ADMINISTRATION_DASHBOARD, {
    title: 'Administracja'
  }), _defineProperty(_children4, LOCATION_IDS.ADMINISTRATION_INVOICE, {
    title: 'Faktura'
  }), _defineProperty(_children4, LOCATION_IDS.ADMINISTRATION_PAYMENTS, {
    title: 'Płatności'
  }), _defineProperty(_children4, LOCATION_IDS.ADMINISTRATION_USER_COURSES, {
    title: 'Kursy użytkownika'
  }), _defineProperty(_children4, LOCATION_IDS.ADMINISTRATION_USERS, {
    title: 'Użytkownicy'
  }), _children4)
}), _defineProperty(_NAVIGATION, LOCATION_IDS.AUTHORIZATION, {
  defaultChild: LOCATION_IDS.AUTHORIZATION_LOGIN,
  title: 'Logowanie',
  children: (_children5 = {}, _defineProperty(_children5, LOCATION_IDS.AUTHORIZATION_CONFIRM_MAIL, {
    title: 'Potwierdzenie adresu e-mail'
  }), _defineProperty(_children5, LOCATION_IDS.AUTHORIZATION_CONFIRM_RECOVER, {
    title: 'Potwierdzenie odzyskania hasła'
  }), _defineProperty(_children5, LOCATION_IDS.AUTHORIZATION_LOGIN, {
    title: 'Logowanie'
  }), _defineProperty(_children5, LOCATION_IDS.AUTHORIZATION_LOGOUT, {
    title: 'Wylogowanie'
  }), _defineProperty(_children5, LOCATION_IDS.AUTHORIZATION_RECOVER, {
    title: 'Odzyskiwanie hasła'
  }), _defineProperty(_children5, LOCATION_IDS.AUTHORIZATION_REGISTER, {
    title: 'Rejestracja'
  }), _children5)
}), _defineProperty(_NAVIGATION, LOCATION_IDS.COURSES, {
  defaultChild: LOCATION_IDS.COURSES_FREE,
  title: 'Kursy',
  children: (_children6 = {}, _defineProperty(_children6, LOCATION_IDS.COURSES_CERTIFICATE, {
    title: 'Certyfikat'
  }), _defineProperty(_children6, LOCATION_IDS.COURSES_DETAILS, {
    title: 'Szczegóły kursu'
  }), _defineProperty(_children6, LOCATION_IDS.COURSES_EXAM, {
    title: 'Egzamin'
  }), _defineProperty(_children6, LOCATION_IDS.COURSES_FREE, {
    title: 'Kursy ogólnodostępne'
  }), _defineProperty(_children6, LOCATION_IDS.COURSES_PREMIUM, {
    title: 'Kursy premium'
  }), _defineProperty(_children6, LOCATION_IDS.COURSES_REGISTER, {
    title: 'Zapisz na kurs'
  }), _defineProperty(_children6, LOCATION_IDS.COURSES_TOPIC, {
    title: 'Lekcja'
  }), _defineProperty(_children6, LOCATION_IDS.COURSES_TOPICS, {
    title: 'Lista lekcji'
  }), _children6)
}), _defineProperty(_NAVIGATION, LOCATION_IDS.HOME, {
  icon: 'home',
  title: 'Strona główna',
  url: API_URLS.HOME
}), _defineProperty(_NAVIGATION, LOCATION_IDS.SEARCH, {
  title: 'Wyszukiwanie',
  url: API_URLS.SEARCH
}), _defineProperty(_NAVIGATION, LOCATION_IDS.USER, {
  defaultChild: LOCATION_IDS.USER_PROFILE,
  title: 'Twoje konto',
  children: {
    COURSES: {
      title: 'Twoje kursy'
    },
    PROFILE: {
      title: 'Profil'
    }
  }
}), _NAVIGATION);

exports.API_URLS = API_URLS;
exports.LOCATION_IDS = LOCATION_IDS;
exports.LOCATION_URLS = LOCATION_URLS;
exports.NAVIGATION = NAVIGATION;
exports.TREE_PARENTS = TREE_PARENTS;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LOCATION_IDS, 'LOCATION_IDS', '/var/projects/netgis-tutorials/client/src/App/navigation.js');

  __REACT_HOT_LOADER__.register(API_URLS, 'API_URLS', '/var/projects/netgis-tutorials/client/src/App/navigation.js');

  __REACT_HOT_LOADER__.register(LOCATION_URLS, 'LOCATION_URLS', '/var/projects/netgis-tutorials/client/src/App/navigation.js');

  __REACT_HOT_LOADER__.register(TREE_PARENTS, 'TREE_PARENTS', '/var/projects/netgis-tutorials/client/src/App/navigation.js');

  __REACT_HOT_LOADER__.register(NAVIGATION, 'NAVIGATION', '/var/projects/netgis-tutorials/client/src/App/navigation.js');
}();

;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(23);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(83);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(213);

document.addEventListener('DOMContentLoaded', function () {
  _reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('mount'));
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ViewComponent2 = __webpack_require__(3);

var _ViewComponent3 = _interopRequireDefault(_ViewComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlowComponent = (_temp = _class = function (_ViewComponent) {
  _inherits(FlowComponent, _ViewComponent);

  function FlowComponent() {
    _classCallCheck(this, FlowComponent);

    return _possibleConstructorReturn(this, (FlowComponent.__proto__ || Object.getPrototypeOf(FlowComponent)).apply(this, arguments));
  }

  _createClass(FlowComponent, [{
    key: 'afterFetch',
    value: function afterFetch() /* oldState */{
      if (this.state.step === '_end_') {
        return this.onFinish();
      }
      _get(FlowComponent.prototype.__proto__ || Object.getPrototypeOf(FlowComponent.prototype), 'afterFetch', this).call(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        flow: {
          onCancel: this.onCancel,
          onFinish: this.onFinish
        }
      };
    }
  }, {
    key: 'onCancel',
    value: function onCancel() {}
  }, {
    key: 'onFinish',
    value: function onFinish() {}
  }]);

  return FlowComponent;
}(_ViewComponent3.default), _class.childContextTypes = {
  flow: _propTypes2.default.shape({
    onCancel: _propTypes2.default.func,
    onFinish: _propTypes2.default.func
  })
}, _temp);
var _default = FlowComponent;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FlowComponent, 'FlowComponent', '/var/projects/netgis-tutorials/client/src/generic/components/FlowComponent.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/FlowComponent.js');
}();

;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

var _Button = __webpack_require__(87);

var _Button2 = _interopRequireDefault(_Button);

var _Column = __webpack_require__(88);

var _Column2 = _interopRequireDefault(_Column);

var _Footer = __webpack_require__(89);

var _Footer2 = _interopRequireDefault(_Footer);

var _Input = __webpack_require__(90);

var _Input2 = _interopRequireDefault(_Input);

var _Loader = __webpack_require__(31);

var _Loader2 = _interopRequireDefault(_Loader);

var _Menu = __webpack_require__(91);

var _Menu2 = _interopRequireDefault(_Menu);

var _PageProgress = __webpack_require__(92);

var _PageProgress2 = _interopRequireDefault(_PageProgress);

var _RootComponent2 = __webpack_require__(93);

var _RootComponent3 = _interopRequireDefault(_RootComponent2);

var _TopMenu = __webpack_require__(157);

var _TopMenu2 = _interopRequireDefault(_TopMenu);

var _Chart = __webpack_require__(215);

var _Chart2 = _interopRequireDefault(_Chart);

var _Notification = __webpack_require__(538);

var _Notification2 = _interopRequireDefault(_Notification);

var _Content = __webpack_require__(159);

var _Content2 = _interopRequireDefault(_Content);

var _Content3 = __webpack_require__(187);

var _Content4 = _interopRequireDefault(_Content3);

var _Content5 = __webpack_require__(192);

var _Content6 = _interopRequireDefault(_Content5);

var _Content7 = __webpack_require__(201);

var _Content8 = _interopRequireDefault(_Content7);

var _Content9 = __webpack_require__(209);

var _Content10 = _interopRequireDefault(_Content9);

var _Content11 = __webpack_require__(210);

var _Content12 = _interopRequireDefault(_Content11);

var _Content13 = __webpack_require__(211);

var _Content14 = _interopRequireDefault(_Content13);

var _errors = __webpack_require__(212);

var E = _interopRequireWildcard(_errors);

var _navigation = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (_temp = _class = function (_RootComponent) {
  _inherits(App, _RootComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        navigate: this.navigate,
        navIds: _navigation.LOCATION_IDS,
        navConfig: this.getConfiguration()
      };
    }
  }, {
    key: 'getDefaultNavigationParams',
    value: function getDefaultNavigationParams() {
      return {
        id: _navigation.LOCATION_IDS.USER,
        params: {}
      };
    }
  }, {
    key: 'getUrl',
    value: function getUrl() {
      return _navigation.API_URLS[_navigation.LOCATION_IDS.INIT];
    }
  }, {
    key: 'getErrorConfig',
    value: function getErrorConfig() {
      return {
        FLD_VALUE_REQUIRED: E.ERR_001,
        FLD_INVLD_VALUE: E.ERR_002,
        FLD_MAX_LEN_EXCEEDED: E.ERR_003,
        FLD_MIN_LEN_EXCEEDED: E.ERR_004,
        FLD_MAX_VALUE_EXCEEDED: E.ERR_005,
        FLD_MIN_VALUE_EXCEEDED: E.ERR_006,
        FLD_INVLD_ITEM_SELECTED: E.ERR_007,
        FLD_INVLD_REGEX_MATCH: E.ERR_008,
        FLD_MAX_DATE_EXCEEDED: E.ERR_016,
        FLD_MIN_DATE_EXCEEDED: E.ERR_017
      };
    }
  }, {
    key: 'getConfiguration',
    value: function getConfiguration() {
      return {
        tree: _navigation.NAVIGATION,
        parents: _navigation.TREE_PARENTS,
        paths: _navigation.LOCATION_URLS,
        api: _navigation.API_URLS
      };
    }
  }, {
    key: 'getViews',
    value: function getViews() {
      var _LOCATION_IDS$ABOUT$L;

      return (_LOCATION_IDS$ABOUT$L = {}, _defineProperty(_LOCATION_IDS$ABOUT$L, _navigation.LOCATION_IDS.ABOUT, _Content2.default), _defineProperty(_LOCATION_IDS$ABOUT$L, _navigation.LOCATION_IDS.ADMINISTRATION, _Content4.default), _defineProperty(_LOCATION_IDS$ABOUT$L, _navigation.LOCATION_IDS.AUTHORIZATION, _Content6.default), _defineProperty(_LOCATION_IDS$ABOUT$L, _navigation.LOCATION_IDS.COURSES, _Content8.default), _defineProperty(_LOCATION_IDS$ABOUT$L, _navigation.LOCATION_IDS.HOME, _Content10.default), _defineProperty(_LOCATION_IDS$ABOUT$L, _navigation.LOCATION_IDS.SEARCH, _Content12.default), _defineProperty(_LOCATION_IDS$ABOUT$L, _navigation.LOCATION_IDS.USER, _Content14.default), _LOCATION_IDS$ABOUT$L)[this.state.content || _navigation.LOCATION_IDS.HOME];
    }
  }, {
    key: 'getViewConfig',
    value: function getViewConfig(id) {
      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var _getConfiguration = this.getConfiguration(),
          tree = _getConfiguration.tree,
          parents = _getConfiguration.parents;

      var locationId = typeof id === 'string' ? _navigation.LOCATION_IDS[id.toUpperCase()] : id;
      path.unshift(locationId);
      if (!parents[locationId]) {
        return Object.assign({ id: id }, path.reduce(function (result, currentId, idx) {
          return idx === 0 ? result[currentId] : result.children[currentId];
        }, tree));
      } else {
        return this.getViewConfig(parents[locationId], path);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var ContentComponent = this.getContent();
      var _state$data = this.state.data;
      _state$data = _state$data === undefined ? {} : _state$data;
      var data = _state$data.data,
          links = _state$data.links,
          menu = _state$data.menu,
          notices = _state$data.notices,
          user = _state$data.user,
          _state$data$loadingPr = _state$data.loadingProgress,
          loadingProgress = _state$data$loadingPr === undefined ? 0 : _state$data$loadingPr;


      var lineChartData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Something',
          data: [{ x: 0, y: 1 }, { x: 1, y: 6 }, { x: 2, y: 2 }, { x: 3, y: 15 }, { x: 4, y: 0 }, { x: 5, y: 4 }, { x: 6, y: 12 }, { x: 7, y: 34 }, { x: 8, y: 36 }, { x: 9, y: 16 }],
          backgroundColor: 'rgba(220, 20, 20, 0.2)',
          borderColor: 'rgba(220, 20, 20, 1)',
          borderWidth: 2
        }]
      };

      var bubbleChartData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Something',
          data: [{ x: 0, y: 1, v: 15 }, { x: 1, y: 6, v: 3 }, { x: 2, y: 2, v: 10 }, { x: 3, y: 15, v: 1 }, { x: 4, y: 0, v: 22 }, { x: 5, y: 4, v: 40 }, { x: 6, y: 12, v: 50 }, { x: 7, y: 34, v: 3 }, { x: 8, y: 36, v: 22 }, { x: 9, y: 16, v: 11 }],
          backgroundColor: 'rgba(220, 20, 20, 0.2)',
          borderColor: 'rgba(220, 20, 20, 1)',
          borderWidth: 2
        }]
      };

      var barChartData = {
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        datasets: [{
          label: 'Something',
          data: [1, 6, 2, 15, 0, 4, 12, 34, 36, 16],
          backgroundColor: 'rgba(220, 20, 20, 0.2)',
          borderColor: 'rgba(220, 20, 20, 1)',
          borderWidth: 2
        }]
      };

      var chartOptions = {};

      return this.fetched ? _react2.default.createElement(
        'div',
        { ref: 'App' },
        _react2.default.createElement(_PageProgress2.default, { percent: loadingProgress }),
        _react2.default.createElement(
          _TopMenu2.default,
          null,
          _react2.default.createElement(
            _Column2.default,
            { colCount: 5, colSpan: 3 },
            links.map(function (_ref) {
              var id = _ref.id,
                  text = _ref.text,
                  url = _ref.url;
              return _react2.default.createElement(
                _TopMenu.TopMenuLink,
                { key: id, url: url, id: id },
                text
              );
            })
          ),
          _react2.default.createElement(
            _Column2.default,
            { colCount: 5, colSpan: 1 },
            user ? _react2.default.createElement('div', null) : _react2.default.createElement(
              'div',
              { className: (0, _cx2.default)('right') },
              _react2.default.createElement(
                _TopMenu.TopMenuLink,
                { onClick: function onClick() {
                    return _this2.navigate(_navigation.LOCATION_IDS.AUTHORIZATION_LOGIN);
                  } },
                'Zaloguj'
              ),
              _react2.default.createElement(
                _TopMenu.TopMenuLink,
                { onClick: function onClick() {
                    return _this2.navigate(_navigation.LOCATION_IDS.AUTHORIZATION_REGISTER);
                  } },
                'Zarejestruj'
              )
            )
          ),
          _react2.default.createElement(
            _Column2.default,
            { colCount: 5, colSpan: 1 },
            _react2.default.createElement(_Input2.default, _extends({}, this.fieldHandler('search', { validateOnBlur: true }), { className: 'with-button', placeholder: 'Wyszukaj', required: false })),
            _react2.default.createElement(_Button2.default, { className: (0, _cx2.default)('after-input'), icon: 'search', buttonType: _Button.BUTTON_TYPES.SEARCH })
          )
        ),
        _react2.default.createElement(
          _Menu2.default,
          null,
          _react2.default.createElement('span', { className: (0, _cx2.default)('menu-logo'), onClick: function onClick() {
              return _this2.navigate(_navigation.LOCATION_IDS.HOME);
            } }),
          menu.map(function (_ref2) {
            var id = _ref2.id;
            return _react2.default.createElement(_Menu.MenuLink, { key: id, data: _this2.getViewConfig(id), onClick: function onClick() {
                return _this2.navigate(_navigation.LOCATION_IDS[id.toUpperCase()]);
              } });
          })
        ),
        _react2.default.createElement(
          _Notification2.default,
          { internalRedirection: { text: 'Internal', id: 'ABOUT_INFO' }, icon: 'info', externalLink: { text: 'External', url: 'http://www.onet.pl/' } },
          'Notification text'
        ),
        _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(_Chart2.default, { chartType: _Chart.CHART_TYPES.LINE, title: 'Line chart', labels: lineChartData.labels, datasets: lineChartData.datasets, options: chartOptions }),
          _react2.default.createElement(_Chart2.default, { chartType: _Chart.CHART_TYPES.BAR, title: 'Bar chart', labels: barChartData.labels, datasets: barChartData.datasets, options: chartOptions }),
          _react2.default.createElement(_Chart2.default, { chartType: _Chart.CHART_TYPES.HORIZONTAL_BAR, title: 'Horizontal Bar chart', labels: barChartData.labels, datasets: barChartData.datasets, options: chartOptions })
        ),
        _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(_Chart2.default, { chartType: _Chart.CHART_TYPES.BUBBLE, title: 'Bubble chart', data: bubbleChartData.labels, datasets: bubbleChartData.datasets, options: chartOptions }),
          _react2.default.createElement(_Chart2.default, { chartType: _Chart.CHART_TYPES.DOUGHNUT, title: 'Doughnut chart', labels: barChartData.labels, datasets: barChartData.datasets, options: chartOptions }),
          _react2.default.createElement(_Chart2.default, { chartType: _Chart.CHART_TYPES.PIE, title: 'Pie chart', labels: barChartData.labels, datasets: barChartData.datasets, options: chartOptions }),
          _react2.default.createElement(_Chart2.default, { chartType: _Chart.CHART_TYPES.RADAR, title: 'Radar chart', labels: barChartData.labels, datasets: barChartData.datasets, options: chartOptions }),
          _react2.default.createElement(_Chart2.default, { chartType: _Chart.CHART_TYPES.POLAR, title: 'Polar chart', labels: barChartData.labels, datasets: barChartData.datasets, options: chartOptions }),
          _react2.default.createElement(_Chart2.default, { chartType: _Chart.CHART_TYPES.SCATTER, title: 'Scatter chart', labels: lineChartData.labels, datasets: lineChartData.datasets, options: chartOptions })
        ),
        ContentComponent && _react2.default.createElement(ContentComponent, _extends({ className: (0, _cx2.default)('app-content') }, this.viewHandler())),
        _react2.default.createElement(
          _Footer2.default,
          null,
          _react2.default.createElement('i', { className: 'fa fa-copyright' }),
          _react2.default.createElement(
            'span',
            null,
            'www.netgis.com.pl Micha\u0142 Mu\u0107ko Systemy Informacji Przestrzennej w Internecie'
          )
        )
      ) : _react2.default.createElement(_Loader2.default, null);
    }
  }]);

  return App;
}(_RootComponent3.default), _class.childContextTypes = {
  navigate: _propTypes.PropTypes.func,
  navIds: _propTypes.PropTypes.object,
  navConfig: _propTypes.PropTypes.object
}, _temp);
var _default = App;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/var/projects/netgis-tutorials/client/src/App/views/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/App/views/App.js');
}();

;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BUTTON_TYPES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BUTTON_TYPES_CLASS, _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

var _Tooltips = __webpack_require__(30);

var _Tooltips2 = _interopRequireDefault(_Tooltips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BUTTON_TYPES = {
  BACK: Symbol('BUTTON.BUTTON_TYPES.BACK'),
  FUNCTION: Symbol('BUTTON.BUTTON_TYPES.FUNCTION'),
  SAVE: Symbol('BUTTON.BUTTON_TYPES.SAVE'),
  SEARCH: Symbol('BUTTON.BUTTON_TYPES.SEARCH'),
  SUBMIT: Symbol('BUTTON.BUTTON_TYPES.SUBMIT')
};

var BUTTON_TYPES_CLASS = (_BUTTON_TYPES_CLASS = {}, _defineProperty(_BUTTON_TYPES_CLASS, BUTTON_TYPES.BACK, 'button-back'), _defineProperty(_BUTTON_TYPES_CLASS, BUTTON_TYPES.SAVE, 'button-save'), _defineProperty(_BUTTON_TYPES_CLASS, BUTTON_TYPES.SEARCH, 'button-search'), _defineProperty(_BUTTON_TYPES_CLASS, BUTTON_TYPES.SUBMIT, 'button-submit'), _defineProperty(_BUTTON_TYPES_CLASS, BUTTON_TYPES.FUNCTION, 'button-function'), _BUTTON_TYPES_CLASS);

var Button = (_temp = _class = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          errors = _props.errors,
          warnings = _props.warnings,
          hints = _props.hints,
          _props$buttonType = _props.buttonType,
          buttonType = _props$buttonType === undefined ? BUTTON_TYPES.SUBMIT : _props$buttonType,
          onAction = _props.onAction,
          icon = _props.icon;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'button-wrapper', [BUTTON_TYPES.SAVE, BUTTON_TYPES.SUBMIT].includes(buttonType) && 'button-wrapper-right') },
        _react2.default.createElement(_Tooltips2.default, { classType: 'button', errors: errors, hints: hints, warnings: warnings }),
        _react2.default.createElement(
          'div',
          _extends({}, disabled ? {} : { tabIndex: 0 }, {
            className: (0, _cx2.default)('button', disabled && 'button-disabled', BUTTON_TYPES_CLASS[buttonType]),
            onClick: function onClick(e) {
              if (!errors && !disabled && onAction) {
                onAction(e);
              }
            } }),
          icon && _react2.default.createElement('i', { className: (0, _cx2.default)('fa', 'fa-' + icon, children && 'with-text') }),
          children
        )
      );
    }
  }]);

  return Button;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.node]),
  onAction: _propTypes.PropTypes.func,
  buttonType: _propTypes.PropTypes.symbol,
  errors: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.object]),
  warnings: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.object]),
  hints: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.object]),
  disabled: _propTypes.PropTypes.bool,
  icon: _propTypes.PropTypes.string
}, _temp);
exports.BUTTON_TYPES = BUTTON_TYPES;
var _default = Button;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BUTTON_TYPES, 'BUTTON_TYPES', '/var/projects/netgis-tutorials/client/src/generic/components/Button.js');

  __REACT_HOT_LOADER__.register(BUTTON_TYPES_CLASS, 'BUTTON_TYPES_CLASS', '/var/projects/netgis-tutorials/client/src/generic/components/Button.js');

  __REACT_HOT_LOADER__.register(Button, 'Button', '/var/projects/netgis-tutorials/client/src/generic/components/Button.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Button.js');
}();

;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Column = (_temp = _class = function (_React$Component) {
  _inherits(Column, _React$Component);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
  }

  _createClass(Column, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$colCount = _props.colCount,
          colCount = _props$colCount === undefined ? 2 : _props$colCount,
          _props$colSpan = _props.colSpan,
          colSpan = _props$colSpan === undefined ? 1 : _props$colSpan,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'column', 'column-' + colSpan + '-' + colCount) },
        this.props.children
      );
    }
  }]);

  return Column;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes2.default.string,
  colCount: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  colSpan: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
}, _temp);
var _default = Column;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Column, 'Column', '/var/projects/netgis-tutorials/client/src/generic/components/Column.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Column.js');
}();

;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = (_temp = _class = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'footer') },
        children
      );
    }
  }]);

  return Footer;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string
}, _temp);
var _default = Footer;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Footer, 'Footer', '/var/projects/netgis-tutorials/client/src/generic/components/Footer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Footer.js');
}();

;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fields = __webpack_require__(39);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var typeToFieldMap = {
  account: _fields.accountField,
  bool: _fields.boolField,
  choice: _fields.choiceField,
  email: _fields.emailField,
  'float': _fields.floatField,
  iban: _fields.ibanField,
  'int': _fields.intField,
  login: _fields.loginField,
  multiChoice: _fields.multiChoiceField,
  nip: _fields.nipField,
  nrdow: _fields.nrdowField,
  passport: _fields.passportField,
  password: _fields.passwordField,
  regon: _fields.regonField,
  search: _fields.searchField,
  str: _fields.strField
};

var isEndStep = function isEndStep(step, transitions) {
  return transitions[step] === '_end_';
};

var getPreviousStep = function getPreviousStep(step, transitions) {
  return Object.keys(transitions).find(function (key) {
    return transitions[key] === step;
  });
};

var getNextStep = function getNextStep(step, transitions) {
  return transitions[step];
};

var prepareStep = function prepareStep(step, form, data, reqData) {
  var fillForm = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  return Object.assign({
    step: step
  }, form['step_1'] && {
    fields: _extends({
      errors: null
    }, Object.keys(form[step]).reduce(function (result, key) {
      var specField = form[step][key];
      var fieldType = specField.fieldType,
          required = specField.required,
          widgetProps = specField.widgetProps,
          value = specField.value,
          _specField$prefill = specField.prefill,
          prefill = _specField$prefill === undefined ? false : _specField$prefill;

      var field = typeToFieldMap[fieldType];
      return Object.assign(result, _defineProperty({}, key, field({ value: fillForm || prefill ? value : null, errors: null, required: required, widgetProps: widgetProps })));
    }, {}))
  }, (data[step] || reqData) && {
    data: _extends({}, reqData || {}, data[step] || {})
  });
};

var _default = function _default(_ref) {
  var form = _ref.form,
      data = _ref.data,
      end = _ref.end,
      transitions = _ref.transitions,
      request = _ref.request;
  var action = request.action,
      _request$data = request.data,
      reqData = _request$data === undefined ? {} : _request$data,
      step = request.step;


  if (!step && !action) {
    if (!form && !data) {
      return end;
    }
    return prepareStep('step_1', form, data, reqData);
  }

  if (action === 'submit') {
    var nextStep = getNextStep(step, transitions);
    return prepareStep(nextStep, form, data, reqData);
  }

  if (isEndStep(step, transitions) && action === 'submit') {
    return end;
  }

  if (action === 'back') {
    var prevStep = getPreviousStep(step, transitions);
    return prepareStep(prevStep, form, data, {}, true);
  }

  return {
    errors: 'Błąd zaślepkowy aplikacji, nieobsłużony przypadek wywołania'
  };
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(typeToFieldMap, 'typeToFieldMap', '/var/projects/netgis-tutorials/client/mocks/common/flow.js');

  __REACT_HOT_LOADER__.register(isEndStep, 'isEndStep', '/var/projects/netgis-tutorials/client/mocks/common/flow.js');

  __REACT_HOT_LOADER__.register(getPreviousStep, 'getPreviousStep', '/var/projects/netgis-tutorials/client/mocks/common/flow.js');

  __REACT_HOT_LOADER__.register(getNextStep, 'getNextStep', '/var/projects/netgis-tutorials/client/mocks/common/flow.js');

  __REACT_HOT_LOADER__.register(prepareStep, 'prepareStep', '/var/projects/netgis-tutorials/client/mocks/common/flow.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/mocks/common/flow.js');
}();

;

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

var _Tooltips = __webpack_require__(30);

var _Tooltips2 = _interopRequireDefault(_Tooltips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (_temp = _class = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          value = _props.value,
          cache = _props.cache,
          errors = _props.errors,
          hints = _props.hints,
          warnings = _props.warnings,
          placeholder = _props.placeholder,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          focused = _props.focused,
          _props$required = _props.required,
          required = _props$required === undefined ? false : _props$required,
          onBackspace = _props.onBackspace,
          onBlur = _props.onBlur,
          onChangeValue = _props.onChangeValue,
          onDelete = _props.onDelete,
          onEnter = _props.onEnter,
          onFocus = _props.onFocus,
          _onKeyDown = _props.onKeyDown,
          onKeyPress = _props.onKeyPress,
          onKeyUp = _props.onKeyUp,
          onMouseDown = _props.onMouseDown,
          onMouseUp = _props.onMouseUp,
          onTab = _props.onTab;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'input-wrapper') },
        _react2.default.createElement(_Tooltips2.default, { classType: 'input', errors: errors, hints: hints, warnings: warnings }),
        _react2.default.createElement('input', {
          value: cache || (focused || disabled ? '' : placeholder),
          disabled: disabled,
          type: 'text',
          onFocus: onFocus,
          onBlur: onBlur,
          onChange: function onChange(e) {
            onChangeValue(e.target.value, e);
          },
          onKeyDown: function onKeyDown(e) {
            if (e.keyCode === 8) {
              onBackspace(e);
            } else if (e.keyCode === 9) {
              onTab(e);
            } else if (e.keyCode === 13) {
              onEnter(e);
            } else if (e.keyCode === 46) {
              onDelete(e);
            }
            _onKeyDown(e);
          },
          onKeyPress: onKeyPress,
          onKeyUp: onKeyUp,
          onMouseDown: onMouseDown,
          onMouseUp: onMouseUp,
          className: (0, _cx2.default)('input', disabled && 'input-disabled', !value && !focused && 'input-placeholder', hints && !warnings && !errors && 'input-hint', warnings && !errors && 'input-warning', errors && 'input-error')
        }),
        required && _react2.default.createElement(
          'span',
          { className: (0, _cx2.default)('input-required') },
          '*'
        )
      );
    }
  }]);

  return Input;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string,

  value: _propTypes.PropTypes.any,
  cache: _propTypes.PropTypes.string,

  widget: _propTypes.PropTypes.object,

  errors: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.object]),
  warnings: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.object]),
  hints: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.object]),

  placeholder: _propTypes.PropTypes.string,

  disabled: _propTypes.PropTypes.bool,
  focused: _propTypes.PropTypes.bool,
  required: _propTypes.PropTypes.bool,

  onBackspace: _propTypes.PropTypes.func,
  onBlur: _propTypes.PropTypes.func,
  onChangeValue: _propTypes.PropTypes.func,
  onDelete: _propTypes.PropTypes.func,
  onEnter: _propTypes.PropTypes.func,
  onFocus: _propTypes.PropTypes.func,
  onKeyDown: _propTypes.PropTypes.func,
  onKeyPress: _propTypes.PropTypes.func,
  onKeyUp: _propTypes.PropTypes.func,
  onMouseDown: _propTypes.PropTypes.func,
  onMouseUp: _propTypes.PropTypes.func,
  onTab: _propTypes.PropTypes.func
}, _temp);
var _default = Input;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Input, 'Input', '/var/projects/netgis-tutorials/client/src/generic/components/Input.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Input.js');
}();

;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuLink = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = (_temp = _class = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'menu') },
        children
      );
    }
  }]);

  return Menu;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string
}, _temp);
var MenuLink = (_temp2 = _class2 = function (_React$Component2) {
  _inherits(MenuLink, _React$Component2);

  function MenuLink() {
    _classCallCheck(this, MenuLink);

    return _possibleConstructorReturn(this, (MenuLink.__proto__ || Object.getPrototypeOf(MenuLink)).apply(this, arguments));
  }

  _createClass(MenuLink, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          data = _props2.data,
          _onClick = _props2.onClick;
      var icon = data.icon,
          title = data.title;


      return _react2.default.createElement(
        'a',
        { onClick: function onClick(e) {
            if (_onClick) {
              _onClick(e);
            }
          }, className: (0, _cx2.default)(className, 'menu-link') },
        icon && _react2.default.createElement('i', { className: (0, _cx2.default)('fa', 'fa-' + icon, title && 'with-text') }),
        title
      );
    }
  }]);

  return MenuLink;
}(_react2.default.Component), _class2.propTypes = {
  className: _propTypes.PropTypes.string,
  data: _propTypes.PropTypes.object,
  onClick: _propTypes.PropTypes.func
}, _temp2);
exports.MenuLink = MenuLink;
var _default = Menu;
exports.default = _default;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Menu, 'Menu', '/var/projects/netgis-tutorials/client/src/generic/components/Menu.js');

  __REACT_HOT_LOADER__.register(MenuLink, 'MenuLink', '/var/projects/netgis-tutorials/client/src/generic/components/Menu.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/Menu.js');
}();

;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _cx = __webpack_require__(2);

var _cx2 = _interopRequireDefault(_cx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageProgress = (_temp = _class = function (_React$Component) {
  _inherits(PageProgress, _React$Component);

  function PageProgress() {
    _classCallCheck(this, PageProgress);

    return _possibleConstructorReturn(this, (PageProgress.__proto__ || Object.getPrototypeOf(PageProgress)).apply(this, arguments));
  }

  _createClass(PageProgress, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          percent = _props.percent,
          completed = _props.completed,
          className = _props.className;

      var width = parseInt(percent, 10);

      return _react2.default.createElement(
        'div',
        { className: (0, _cx2.default)(className, 'page-progress'), style: { visibility: completed || width === 100 || width === 0 ? 'hidden' : 'visible' } },
        _react2.default.createElement('div', { className: (0, _cx2.default)('page-progress-percent'), style: { width: width + '%' } })
      );
    }
  }]);

  return PageProgress;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes.PropTypes.string,
  percent: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
  completed: _propTypes.PropTypes.bool
}, _temp);
var _default = PageProgress;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageProgress, 'PageProgress', '/var/projects/netgis-tutorials/client/src/generic/components/PageProgress.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/PageProgress.js');
}();

;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Component2 = __webpack_require__(32);

var _Component3 = _interopRequireDefault(_Component2);

var _createBrowserHistory = __webpack_require__(149);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _location = __webpack_require__(156);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RootComponent = function (_Component) {
  _inherits(RootComponent, _Component);

  function RootComponent() {
    _classCallCheck(this, RootComponent);

    var _this = _possibleConstructorReturn(this, (RootComponent.__proto__ || Object.getPrototypeOf(RootComponent)).call(this));

    _this.history = (0, _createBrowserHistory2.default)();
    _this.historyUnlisten = _this.history.listen(function (location /* , action*/) {
      var _this$getNavigationPa = _this.getNavigationParamsFromLocation(location),
          id = _this$getNavigationPa.id,
          params = _this$getNavigationPa.params;

      var state = location.state;

      if (!state.hold) {
        _this.setNavigationState(id, params);
      }
    });
    return _this;
  }

  _createClass(RootComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.makeInitialNavigation(function () {
        _get(RootComponent.prototype.__proto__ || Object.getPrototypeOf(RootComponent.prototype), 'componentWillMount', _this2).call(_this2);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.historyUnlisten();
      _get(RootComponent.prototype.__proto__ || Object.getPrototypeOf(RootComponent.prototype), 'componentWillUnmount', this).call(this);
    }
  }, {
    key: 'viewHandler',
    value: function viewHandler() {
      return _extends({}, _get(RootComponent.prototype.__proto__ || Object.getPrototypeOf(RootComponent.prototype), 'viewHandler', this).call(this), {
        contentState: this.state,
        navigate: this.navigate
      });
    }
  }, {
    key: 'navigate',
    value: function navigate(id, params, callback) {
      var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      this.setNavigationState(id, params, callback);
      this.changeWindowLocation(id, params, state);
    }
  }, {
    key: 'getConfiguration',
    value: function getConfiguration() {
      throw 'Not implemented error';
      // To override
      // return {
      //   tree: null,
      //   parents: null,
      //   paths: null,
      //   api: null
      // }
    }
  }, {
    key: 'getDefaultNavigationParams',
    value: function getDefaultNavigationParams() {
      // To override
    }
  }, {
    key: 'getInitialNavigationParams',
    value: function getInitialNavigationParams() {
      var pathname = this.history.location.pathname;

      var path = pathname.replace(/^\/+(.*)/, '$1');

      if (path === '') {
        return this.getDefaultNavigationParams();
      }

      return this.getNavigationParamsFromLocation();
    }
  }, {
    key: 'makeInitialNavigation',
    value: function makeInitialNavigation(callback) {
      var _getInitialNavigation = this.getInitialNavigationParams(),
          id = _getInitialNavigation.id,
          params = _getInitialNavigation.params;

      this.navigate(id, params, callback, { hold: true });
    }
  }, {
    key: 'getNavigationParamsFromLocation',
    value: function getNavigationParamsFromLocation() {
      var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.history.location;

      var _getConfiguration = this.getConfiguration(),
          paths = _getConfiguration.paths;

      var id = (0, _location.getNavigationIdFromLocation)(location, paths);
      var pathParams = (0, _location.getPathParamsFromLocation)(location, paths);
      var reqParams = (0, _location.getRequestParamsFromLocation)(location);
      var params = _extends({}, pathParams, reqParams);

      return {
        id: id,
        params: params
      };
    }
  }, {
    key: 'changeWindowLocation',
    value: function changeWindowLocation(id) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _getConfiguration2 = this.getConfiguration(),
          paths = _getConfiguration2.paths;

      var url = (0, _location.createUrlFromIdAndParams)(id, params, paths);

      var _url$split = url.split('?'),
          _url$split2 = _slicedToArray(_url$split, 2),
          path = _url$split2[0],
          request = _url$split2[1];

      var search = request ? '?' + request : '';
      var pathname = path.startsWith('/') ? path : '/' + path;

      this.history.push(Object.assign({
        pathname: pathname,
        state: state,
        search: search
      }));
    }
  }, {
    key: 'setNavigationState',
    value: function setNavigationState(id, params, callback) {
      var _getConfiguration3 = this.getConfiguration(),
          tree = _getConfiguration3.tree,
          parents = _getConfiguration3.parents,
          paths = _getConfiguration3.paths,
          api = _getConfiguration3.api;

      var currentTree = (0, _location.getNavigationTree)(id, parents);
      var currentId = currentTree.shift();

      var treeElement = tree[currentId];

      var newState = {
        content: currentId,
        contentState: {},
        state: {
          config: {
            api: api[currentId],
            path: paths[currentId][0],
            title: treeElement.title,
            request: params
          }
        }
      };

      currentTree.reduce(function (result, currentId) {
        var nextTier = {
          content: currentId,
          contentState: {},
          state: {
            config: {
              api: api[currentId],
              path: paths[currentId][0],
              title: treeElement.title,
              request: params
            }
          }
        };
        result.contentState = nextTier;
        treeElement = treeElement.children[currentId];
        return nextTier;
      }, newState);

      this.setState(newState, callback);
    }
  }]);

  return RootComponent;
}(_Component3.default);

var _default = RootComponent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RootComponent, 'RootComponent', '/var/projects/netgis-tutorials/client/src/generic/components/RootComponent.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/components/RootComponent.js');
}();

;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactAddonsUpdate = __webpack_require__(95);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reactAddonsUpdate2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/var/projects/netgis-tutorials/client/src/generic/utils/update.js');
}();

;

/***/ })

},[49]);
//# sourceMappingURL=bundle.js.map