import React from 'react';
import cx from '../utils/cx';


class Loader extends React.Component {
  render() {
    return (
      <div>
        <div className={cx('view-loader')}>
          <div /><div /><div /><div /><div />
          <span className={cx('view-loader-loading')}>Loading</span>
        </div>
      </div>
    );
  }
}


export default Loader;
