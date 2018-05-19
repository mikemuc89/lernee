import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class PageProgress extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    percent: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    completed: PropTypes.bool
  }

  render() {
    const { percent, completed, className } = this.props;
    const width = parseInt(percent, 10);

    return (
      <div className={cx(className, 'page-progress')} style={
        { visibility: (completed || width === 100 || width === 0) ? 'hidden' : 'visible' }
      }>
        <div className={cx('page-progress-percent')} style={{ width: `${width}%` }}></div>
      </div>
    );
  }
}


export default PageProgress;
