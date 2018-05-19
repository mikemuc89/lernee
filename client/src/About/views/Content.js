import React from 'react';
import ViewComponent from 'generic/components/ViewComponent';

import Contact from './Contact';
import Info from './Info';

import { LOCATION_IDS } from '../../App/navigation';


class AboutContent extends ViewComponent {
  getViews() {
    return {
      [LOCATION_IDS.ABOUT_CONTACT]: Contact,
      [LOCATION_IDS.ABOUT_INFO]: Info
    }[this.state.content];
  }

  render() {
    const ContentComponent = this.getContent();

    return (
      <div ref="AboutContent" className="content-component">
        <div>About</div>
      {ContentComponent && (
        <ContentComponent {...this.viewHandler()} />
      )}
      </div>
    );
  }
}


export default AboutContent;
