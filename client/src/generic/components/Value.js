import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class Label extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]),
    required: PropTypes.bool
  }

  render() {
    const { children, required, className } = this.props;

    return (
      <div className={cx('value-wrapper')}>
        <span className={cx(className, 'value')}>{children}</span>
        {required && (
          <span className={cx('value-required')}>*</span>
        )}
      </div>
    );
  }
}


export default Label;
