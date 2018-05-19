import React from 'react';
import ViewComponent from 'generic/components/ViewComponent';

import { LOCATION_IDS } from '../../App/navigation';


class UserContent extends ViewComponent {
  getViews() {
    return {
      [LOCATION_IDS.USER_COURSES]: null,
      [LOCATION_IDS.USER_CHANGE_PASSWORD]: null,
      [LOCATION_IDS.USER_PROFILE]: null
    }[this.state.content];
  }

  render() {
    const ContentComponent = this.getContent();

    return (
      <div ref="User">
        <div>User</div>
      {ContentComponent && (
        <ContentComponent {...this.viewHandler()} />
      )}
      </div>
    );
  }
}


export default UserContent;
