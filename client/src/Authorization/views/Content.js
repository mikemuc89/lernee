import React from 'react';
import ViewComponent from 'generic/components/ViewComponent';

import ConfirmMail from './ConfirmMail';
import ConfirmRecover from './ConfirmRecover';
import Login from './Login';
import Logout from './Logout';
import Recover from './Recover';
import Register from './Register';

import { LOCATION_IDS } from '../../App/navigation';


class AuthorizationContent extends ViewComponent {
  getViews() {
    return {
      [LOCATION_IDS.AUTHORIZATION_CONFIRM_MAIL]: ConfirmMail,
      [LOCATION_IDS.AUTHORIZATION_CONFIRM_RECOVER]: ConfirmRecover,
      [LOCATION_IDS.AUTHORIZATION_LOGIN]: Login,
      [LOCATION_IDS.AUTHORIZATION_LOGOUT]: Logout,
      [LOCATION_IDS.AUTHORIZATION_RECOVER]: Recover,
      [LOCATION_IDS.AUTHORIZATION_REGISTER]: Register
    }[this.state.content];
  }

  render() {
    const ContentComponent = this.getContent();

    return (
      <div ref="Authorization" className="content-component">
        <div>Authorization</div>
      {ContentComponent && (
        <ContentComponent {...this.viewHandler()} />
      )}
      </div>
    );
  }
}


export default AuthorizationContent;
