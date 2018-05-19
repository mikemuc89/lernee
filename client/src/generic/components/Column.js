import React from 'react';
import PropTypes from 'prop-types';
import cx from '../utils/cx';


class Column extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    colCount: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    colSpan: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
  }

  render() {
    const { colCount = 2, colSpan = 1, className } = this.props;

    return (
      <div className={cx(className, 'column', `column-${colSpan}-${colCount}`)}>
        {this.props.children}
      </div>
    );
  }
}


export default Column;
