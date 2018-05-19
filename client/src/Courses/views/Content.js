import React from 'react';
import ViewComponent from 'generic/components/ViewComponent';

import Details from './Details';
import Exam from './Exam';
import Free from './Free';
import Premium from './Premium';
import Register from './Register';
import Topic from './Topic';
import Topics from './Topics';

import { LOCATION_IDS } from '../../App/navigation';


class CoursesContent extends ViewComponent {
  getViews() {
    return {
      [LOCATION_IDS.COURSES_DETAILS]: Details,
      [LOCATION_IDS.COURSES_EXAM]: Exam,
      [LOCATION_IDS.COURSES_FREE]: Free,
      [LOCATION_IDS.COURSES_PREMIUM]: Premium,
      [LOCATION_IDS.COURSES_REGISTER]: Register,
      [LOCATION_IDS.COURSES_TOPIC]: Topic,
      [LOCATION_IDS.COURSES_TOPICS]: Topics
    }[this.state.content];
  }

  render() {
    const ContentComponent = this.getContent();

    return (
      <div ref="Courses" className="content-component">
        <div>Courses</div>
      {ContentComponent && (
        <ContentComponent {...this.viewHandler()} />
      )}
      </div>
    );
  }
}


export default CoursesContent;
