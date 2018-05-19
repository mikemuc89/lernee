import React from 'react';
import ViewComponent from 'generic/components/ViewComponent';


class HomeContent extends ViewComponent {
  render() {
    return (
      <div ref="Home" className="content-component">
        <div>Home</div>
      </div>
    );
  }
}


export default HomeContent;
