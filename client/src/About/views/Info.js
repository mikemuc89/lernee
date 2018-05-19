import React from 'react';
import Topic from 'generic/components/Topic';
import ViewComponent from 'generic/components/ViewComponent';

import InfoA from './Info/A';
import InfoB from './Info/B';

import { LOCATION_IDS } from '../../App/navigation';


class AboutInfo extends ViewComponent {
  getViews() {
    return {
      [LOCATION_IDS.ABOUT_INFO_A]: InfoA,
      [LOCATION_IDS.ABOUT_INFO_B]: InfoB
    }[this.state.content];
  }

  render() {
    const ContentComponent = this.getContent();
    const { data: { terms } = {} } = this.state;

    return (
      <div ref="AboutInfo">
        <div>About Info</div>
        <Topic data={terms} />
      {ContentComponent && (
        <ContentComponent {...this.viewHandler()} />
      )}
      </div>
    );
  }
}


export default AboutInfo;
