const LOCATION_IDS = {
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

const API_URLS = {
  [LOCATION_IDS.HOME]: 'api/home',
  [LOCATION_IDS.INIT]: 'api/init',
  [LOCATION_IDS.NOTIFY]: 'api/notify',
  [LOCATION_IDS.SEARCH]: 'api/search',

  [LOCATION_IDS.ABOUT_CONTACT]: 'api/about/contact',
  [LOCATION_IDS.ABOUT_INFO]: 'api/about/info',
  [LOCATION_IDS.ABOUT_RULES]: 'api/about/rules',
  [LOCATION_IDS.ABOUT_INFO_A]: 'api/about/info/a',
  [LOCATION_IDS.ABOUT_INFO_A_A]: 'api/about/info/a/a',
  [LOCATION_IDS.ABOUT_INFO_A_B]: 'api/about/info/a/b',

  [LOCATION_IDS.ADMINISTRATION_DASHBOARD]: 'api/administration/dashboard',
  [LOCATION_IDS.ADMINISTRATION_INVOICE]: 'api/administration/invoice',
  [LOCATION_IDS.ADMINISTRATION_PAYMENTS]: 'api/administration/payments',
  [LOCATION_IDS.ADMINISTRATION_USER_COURSES]: 'api/administration/user-courses',
  [LOCATION_IDS.ADMINISTRATION_USERS]: 'api/administration/users',

  [LOCATION_IDS.AUTHORIZATION_CONFIRM_MAIL]: 'api/authorization/confirm-mail',
  [LOCATION_IDS.AUTHORIZATION_CONFIRM_RECOVER]: 'api/authorization/confirm-recover',
  [LOCATION_IDS.AUTHORIZATION_LOGIN]: 'api/authorization/login',
  [LOCATION_IDS.AUTHORIZATION_LOGOUT]: 'api/authorization/logout',
  [LOCATION_IDS.AUTHORIZATION_RECOVER]: 'api/authorization/recover',
  [LOCATION_IDS.AUTHORIZATION_REGISTER]: 'api/authorization/register',

  [LOCATION_IDS.COURSES_CERTIFICATE]: 'api/courses/certificate',
  [LOCATION_IDS.COURSES_DETAILS]: 'api/courses/details',
  [LOCATION_IDS.COURSES_EXAM]: 'api/courses/exam',
  [LOCATION_IDS.COURSES_FREE]: 'api/courses/free',
  [LOCATION_IDS.COURSES_PREMIUM]: 'api/courses/premium',
  [LOCATION_IDS.COURSES_REGISTER]: 'api/courses/register',
  [LOCATION_IDS.COURSES_TOPIC]: 'api/courses/topic',
  [LOCATION_IDS.COURSES_TOPICS]: 'api/courses/topics',

  [LOCATION_IDS.USER_CHANGE_PASSWORD]: 'api/user/change-password',
  [LOCATION_IDS.USER_COURSES]: 'api/user/courses',
  [LOCATION_IDS.USER_PROFILE]: 'api/user/profile'
};

const LOCATION_URLS = {
  [LOCATION_IDS.HOME]: ['^$', []],
  [LOCATION_IDS.SEARCH]: ['^search$', []],

  [LOCATION_IDS.ABOUT]: ['^about$', []],
  [LOCATION_IDS.ABOUT_CONTACT]: ['^about/contact$', []],
  [LOCATION_IDS.ABOUT_INFO]: ['^about/info$', []],
  [LOCATION_IDS.ABOUT_RULES]: ['^about/rules$', []],
  [LOCATION_IDS.ABOUT_INFO_A]: ['^about/info/a$', []],
  [LOCATION_IDS.ABOUT_INFO_B]: ['^about/info/b$', []],
  [LOCATION_IDS.ABOUT_INFO_A_A]: ['^about/info/a/a/([0-9]+)/(.*)$', ['id', 'name']],
  [LOCATION_IDS.ABOUT_INFO_A_B]: ['^about/info/a/b$', []],

  [LOCATION_IDS.ADMINISTRATION]: ['^administration$', []],
  [LOCATION_IDS.ADMINISTRATION_DASHBOARD]: ['^administration/dashboard$', []],
  [LOCATION_IDS.ADMINISTRATION_INVOICE]: ['^administration/invoice$', []],
  [LOCATION_IDS.ADMINISTRATION_PAYMENTS]: ['^administration/payments$', []],
  [LOCATION_IDS.ADMINISTRATION_USER_COURSES]: ['^administration/user-courses/([0-9]+)$', ['id']],
  [LOCATION_IDS.ADMINISTRATION_USERS]: ['^administration/users$', []],

  [LOCATION_IDS.AUTHORIZATION]: ['^auth$', []],
  [LOCATION_IDS.AUTHORIZATION_CONFIRM_MAIL]: ['^auth/confirm-mail$', []],
  [LOCATION_IDS.AUTHORIZATION_CONFIRM_RECOVER]: ['^auth/confirm-recover$', []],
  [LOCATION_IDS.AUTHORIZATION_LOGIN]: ['^auth/login$', []],
  [LOCATION_IDS.AUTHORIZATION_LOGOUT]: ['^auth/logout$', []],
  [LOCATION_IDS.AUTHORIZATION_RECOVER]: ['^auth/recover$', []],
  [LOCATION_IDS.AUTHORIZATION_REGISTER]: ['^auth/register$', []],

  [LOCATION_IDS.COURSES]: ['^courses$', []],
  [LOCATION_IDS.COURSES_CERTIFICATE]: ['^courses/certificate$', []],
  [LOCATION_IDS.COURSES_DETAILS]: ['^courses/details$', []],
  [LOCATION_IDS.COURSES_EXAM]: ['^courses/exam$', []],
  [LOCATION_IDS.COURSES_FREE]: ['^courses/free$', []],
  [LOCATION_IDS.COURSES_PREMIUM]: ['^courses/premium$', []],
  [LOCATION_IDS.COURSES_REGISTER]: ['^courses/register$', []],
  [LOCATION_IDS.COURSES_TOPIC]: ['^courses/topic$', []],
  [LOCATION_IDS.COURSES_TOPICS]: ['^courses/topics$', []],

  [LOCATION_IDS.USER]: ['^user$', []],
  [LOCATION_IDS.USER_CHANGE_PASSWORD]: ['^user/change-password$', []],
  [LOCATION_IDS.USER_COURSES]: ['^user/courses$', []],
  [LOCATION_IDS.USER_PROFILE]: ['^user/profile$', []]
};

const TREE_PARENTS = {
  [LOCATION_IDS.ABOUT_CONTACT]: LOCATION_IDS.ABOUT,
  [LOCATION_IDS.ABOUT_INFO]: LOCATION_IDS.ABOUT,
  [LOCATION_IDS.ABOUT_RULES]: LOCATION_IDS.ABOUT,
  [LOCATION_IDS.ABOUT_INFO_A]: LOCATION_IDS.ABOUT_INFO,
  [LOCATION_IDS.ABOUT_INFO_B]: LOCATION_IDS.ABOUT_INFO,
  [LOCATION_IDS.ABOUT_INFO_A_A]: LOCATION_IDS.ABOUT_INFO_A,
  [LOCATION_IDS.ABOUT_INFO_A_B]: LOCATION_IDS.ABOUT_INFO_A,

  [LOCATION_IDS.ADMINISTRATION_DASHBOARD]: LOCATION_IDS.ADMINISTRATION,
  [LOCATION_IDS.ADMINISTRATION_INVOICE]: LOCATION_IDS.ADMINISTRATION,
  [LOCATION_IDS.ADMINISTRATION_PAYMENTS]: LOCATION_IDS.ADMINISTRATION,
  [LOCATION_IDS.ADMINISTRATION_USER_COURSES]: LOCATION_IDS.ADMINISTRATION,
  [LOCATION_IDS.ADMINISTRATION_USERS]: LOCATION_IDS.ADMINISTRATION,

  [LOCATION_IDS.AUTHORIZATION_CONFIRM_MAIL]: LOCATION_IDS.AUTHORIZATION,
  [LOCATION_IDS.AUTHORIZATION_CONFIRM_RECOVER]: LOCATION_IDS.AUTHORIZATION,
  [LOCATION_IDS.AUTHORIZATION_LOGIN]: LOCATION_IDS.AUTHORIZATION,
  [LOCATION_IDS.AUTHORIZATION_LOGOUT]: LOCATION_IDS.AUTHORIZATION,
  [LOCATION_IDS.AUTHORIZATION_RECOVER]: LOCATION_IDS.AUTHORIZATION,
  [LOCATION_IDS.AUTHORIZATION_REGISTER]: LOCATION_IDS.AUTHORIZATION,

  [LOCATION_IDS.COURSES_CERTIFICATE]: LOCATION_IDS.COURSES,
  [LOCATION_IDS.COURSES_DETAILS]: LOCATION_IDS.COURSES,
  [LOCATION_IDS.COURSES_EXAM]: LOCATION_IDS.COURSES,
  [LOCATION_IDS.COURSES_FREE]: LOCATION_IDS.COURSES,
  [LOCATION_IDS.COURSES_PREMIUM]: LOCATION_IDS.COURSES,
  [LOCATION_IDS.COURSES_REGISTER]: LOCATION_IDS.COURSES,
  [LOCATION_IDS.COURSES_TOPIC]: LOCATION_IDS.COURSES,
  [LOCATION_IDS.COURSES_TOPICS]: LOCATION_IDS.COURSES,

  [LOCATION_IDS.USER_CHANGE_PASSWORD]: LOCATION_IDS.USER,
  [LOCATION_IDS.USER_COURSES]: LOCATION_IDS.USER,
  [LOCATION_IDS.USER_PROFILE]: LOCATION_IDS.USER
};

const NAVIGATION = {
  [LOCATION_IDS.ABOUT]: {
    defaultChild: LOCATION_IDS.ABOUT_CONTACT,
    title: 'Informacje',
    children: {
      [LOCATION_IDS.ABOUT_CONTACT]: {
        title: 'Kontakt'
      },
      [LOCATION_IDS.ABOUT_RULES]: {
        title: 'Regulamin'
      },
      [LOCATION_IDS.ABOUT_INFO]: {
        title: 'O nas',
        children: {
          [LOCATION_IDS.ABOUT_INFO_A]: {
            title: 'O nas A child test',
            children: {
              [LOCATION_IDS.ABOUT_INFO_A_B]: {
                title: 'O nas A B child test'
              }
            }
          }
        }
      }
    }
  },
  [LOCATION_IDS.ADMINISTRATION]: {
    defaultChild: LOCATION_IDS.ADMINISTRATION_DASHBOARD,
    title: 'Administracja',
    children: {
      [LOCATION_IDS.ADMINISTRATION_DASHBOARD]: {
        title: 'Administracja'
      },
      [LOCATION_IDS.ADMINISTRATION_INVOICE]: {
        title: 'Faktura'
      },
      [LOCATION_IDS.ADMINISTRATION_PAYMENTS]: {
        title: 'Płatności'
      },
      [LOCATION_IDS.ADMINISTRATION_USER_COURSES]: {
        title: 'Kursy użytkownika'
      },
      [LOCATION_IDS.ADMINISTRATION_USERS]: {
        title: 'Użytkownicy'
      }
    }
  },
  [LOCATION_IDS.AUTHORIZATION]: {
    defaultChild: LOCATION_IDS.AUTHORIZATION_LOGIN,
    title: 'Logowanie',
    children: {
      [LOCATION_IDS.AUTHORIZATION_CONFIRM_MAIL]: {
        title: 'Potwierdzenie adresu e-mail'
      },
      [LOCATION_IDS.AUTHORIZATION_CONFIRM_RECOVER]: {
        title: 'Potwierdzenie odzyskania hasła'
      },
      [LOCATION_IDS.AUTHORIZATION_LOGIN]: {
        title: 'Logowanie'
      },
      [LOCATION_IDS.AUTHORIZATION_LOGOUT]: {
        title: 'Wylogowanie'
      },
      [LOCATION_IDS.AUTHORIZATION_RECOVER]: {
        title: 'Odzyskiwanie hasła'
      },
      [LOCATION_IDS.AUTHORIZATION_REGISTER]: {
        title: 'Rejestracja'
      }
    }
  },
  [LOCATION_IDS.COURSES]: {
    defaultChild: LOCATION_IDS.COURSES_FREE,
    title: 'Kursy',
    children: {
      [LOCATION_IDS.COURSES_CERTIFICATE]: {
        title: 'Certyfikat'
      },
      [LOCATION_IDS.COURSES_DETAILS]: {
        title: 'Szczegóły kursu'
      },
      [LOCATION_IDS.COURSES_EXAM]: {
        title: 'Egzamin'
      },
      [LOCATION_IDS.COURSES_FREE]: {
        title: 'Kursy ogólnodostępne'
      },
      [LOCATION_IDS.COURSES_PREMIUM]: {
        title: 'Kursy premium'
      },
      [LOCATION_IDS.COURSES_REGISTER]: {
        title: 'Zapisz na kurs'
      },
      [LOCATION_IDS.COURSES_TOPIC]: {
        title: 'Lekcja'
      },
      [LOCATION_IDS.COURSES_TOPICS]: {
        title: 'Lista lekcji'
      }
    }
  },
  [LOCATION_IDS.HOME]: {
    icon: 'home',
    title: 'Strona główna',
    url: API_URLS.HOME
  },
  [LOCATION_IDS.SEARCH]: {
    title: 'Wyszukiwanie',
    url: API_URLS.SEARCH
  },
  [LOCATION_IDS.USER]: {
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
  }
};

export {
  API_URLS,
  LOCATION_IDS,
  LOCATION_URLS,
  NAVIGATION,
  TREE_PARENTS
};