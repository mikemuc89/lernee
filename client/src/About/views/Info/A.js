import React from 'react';
import ViewComponent from 'generic/components/ViewComponent';

import InfoAA from './A/AA';
import InfoAB from './A/AB';

import { LOCATION_IDS } from '../../../App/navigation';


class AboutInfo extends ViewComponent {
  getViews() {
    return {
      [LOCATION_IDS.ABOUT_INFO_A_A]: InfoAA,
      [LOCATION_IDS.ABOUT_INFO_A_B]: InfoAB
    }[this.state.content];
  }

  render() {
    const ContentComponent = this.getContent();

    return (
      <div ref="AboutInfoA">
        <div>About Info A</div>
      {ContentComponent && (
        <ContentComponent {...this.viewHandler()} />
      )}
      </div>
    );
  }
}


export default AboutInfo;
