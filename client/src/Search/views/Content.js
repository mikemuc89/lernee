import React from 'react';
import PagerComponent from 'generic/components/ViewComponent';


class SearchContent extends PagerComponent {
  render() {
    return (
      <div ref="Search" className="content-component">
        <div>Search</div>
      </div>
    );
  }
}


export default SearchContent;
