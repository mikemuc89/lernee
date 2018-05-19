import { searchField, boolField, choiceField, dateField, dateRangeField, multiChoiceField, autocompleteField } from './common/fields';

/*
  request: {}
*/

export default (/* request */) => {
  return {
    fields: {
      search: searchField({ value: 'Abcde Fgh', widgetProps: { maxLen: 55, disabled: false } }),
      datedate: dateField({ required: true }),
      daterange: dateRangeField({ required: true }),
      autocom: autocompleteField({ value: [3, 5, 6], errors: 'asdasd asdasd', widgetProps: { disabled: true, required: true, items: [
        { id: 1, data: 'Zagłębie Sosnowiec' },
        { id: 2, data: 'Zagłębie Lubin' },
        { id: 3, data: 'Legia Chełmża' },
        { id: 4, data: 'Legia Warszawa' },
        { id: 5, data: 'Arka Gdynia' },
        { id: 6, data: 'KTS Weszło' },
        { id: 7, data: 'Śląsk Wrocław' },
        { id: 8, data: 'Jagiellonia Białystok' },
        { id: 9, data: 'Sandecja Nowy Sącz' },
        { id: 10, data: 'Bruk-Bet Nieciecza' },
        { id: 11, data: 'Lech Poznań' },
        { id: 12, data: 'Gornik Zabrze' },
        { id: 13, data: 'Gornik Łęczna' },
        { id: 14, data: 'Pogoń Szczecin' },
        { id: 15, data: 'Piast Gliwice' },
        { id: 16, data: 'Wisła Krakow' },
        { id: 17, data: 'Wisła Płock' },
      ], multiChoice: true } }),
      rdgrp: choiceField({ value: 2, errors: 'Asdasd', widgetProps: { disabled: true, required: true, items: [
        { id: 1, data: 'Zagłębie Sosnowiec' },
        { id: 2, data: 'Zagłębie Lubin' },
        { id: 3, data: 'Legia Chełmża' },
        { id: 4, data: 'Legia Warszawa' }
      ] } }),
      multichk: multiChoiceField({ value: [1, 2], widgetProps: { required: true, hints: 'FsdfF SDfsf', items: [
        { id: 1, data: 'Zagłębie Sosnowiec' },
        { id: 2, data: 'Zagłębie Lubin' },
        { id: 3, data: 'Legia Chełmża' },
        { id: 4, data: 'Legia Warszawa' }
      ] } }),
      chk: boolField({ value: true, widgetProps: { required: true, disabled: true } }),
      rdo: boolField({ value: true, widgetProps: { required: true, disabled: true } })
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
