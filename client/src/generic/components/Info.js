import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class Info extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.node
    ])
  }

  render() {
    const { children, className } = this.props;

    return (
      <div className={cx(className, 'info')}>
      {Array.isArray(children) ? (children.map((item, idx) => (
        <div key={idx} className={cx('info-paragraph')}>
          {item}
        </div>
      ))) : (
        children
      )}
      </div>
    );
  }
}


export default Info;
