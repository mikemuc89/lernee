import errorshHandler from '../../mocks/errors';
import homeHandler from '../../mocks/home';
import initHandler from '../../mocks/init';
import notifyHandler from '../../mocks/notify';
import searchHandler from '../../mocks/search';

import aboutContactHandler from '../../mocks/about/contact';
import aboutInfoHandler from '../../mocks/about/info';
import aboutInfoAHandler from '../../mocks/about/info/a';
import AboutInfoAAHandler from '../../mocks/about/info/a/a';
import AboutInfoABHandler from '../../mocks/about/info/a/b';
import AboutXHandler from '../../mocks/about/x';

import administrationDashboardHandler from '../../mocks/administration/dashboard';
import administrationPaymentsHandler from '../../mocks/administration/__payments';
import administrationUsersHandler from '../../mocks/administration/__users';

import authorizationConfirmMailHandler from '../../mocks/authorization/confirm-mail';
import authorizationConfirmRecoverHandler from '../../mocks/authorization/confirm-recover';
import authorizationLoginHandler from '../../mocks/authorization/login';
import authorizationLogoutHandler from '../../mocks/authorization/logout';
import authorizationRecoverHandler from '../../mocks/authorization/recover';
import authorizationRegisterHandler from '../../mocks/authorization/register';

import coursesDetailsHandler from '../../mocks/courses/details';
import coursesExamHandler from '../../mocks/courses/exam';
import coursesFreeHandler from '../../mocks/courses/free';
import coursesPremiumHandler from '../../mocks/courses/premium';
import coursesRegisterHandler from '../../mocks/courses/register';
import coursesTopicHandler from '../../mocks/courses/topic';
import coursesTopicsHandler from '../../mocks/courses/topics';

import userChangePasswordHandler from '../../mocks/user/change-password';
import userCoursesHandler from '../../mocks/user/courses';
import userProfileHandler from '../../mocks/user/profile';


export default {
  'api/errors': errorshHandler,
  'api/home': homeHandler,
  'api/init': initHandler,
  'api/notify': notifyHandler,
  'api/search': searchHandler,

  'api/about/contact': aboutContactHandler,
  'api/about/info': aboutInfoHandler,
  'api/about/info/a': aboutInfoAHandler,
  'api/about/info/a/a': AboutInfoAAHandler,
  'api/about/info/a/b': AboutInfoABHandler,
  'api/about/x': AboutXHandler,

  'api/administration/dashboard': administrationDashboardHandler,
  'api/administration/payments': administrationPaymentsHandler,
  'api/administration/users': administrationUsersHandler,

  'api/authorization/confirm-mail': authorizationConfirmMailHandler,
  'api/authorization/confirm-recover': authorizationConfirmRecoverHandler,
  'api/authorization/login': authorizationLoginHandler,
  'api/authorization/logout': authorizationLogoutHandler,
  'api/authorization/recover': authorizationRecoverHandler,
  'api/authorization/register': authorizationRegisterHandler,

  'api/courses/details': coursesDetailsHandler,
  'api/courses/exam': coursesExamHandler,
  'api/courses/free': coursesFreeHandler,
  'api/courses/premium': coursesPremiumHandler,
  'api/courses/register': coursesRegisterHandler,
  'api/courses/topic': coursesTopicHandler,
  'api/courses/topics': coursesTopicsHandler,

  'api/user/change-password': userChangePasswordHandler,
  'api/user/courses': userCoursesHandler,
  'api/user/profile': userProfileHandler
};
