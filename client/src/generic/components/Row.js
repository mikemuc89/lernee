import React from 'react';
import PropTypes from 'prop-types';
import cx from '../utils/cx';


class Row extends React.Component {
  static propTypes = {
    rowSpan: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  };

  render() {
    const { rowSpan = 1 } = this.props;

    return (
      <div className={cx('row', `row-${rowSpan}`)}>
        {this.props.children}
      </div>
    );
  }
}


export default Row;
