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
      <div className={cx(className, 'label-wrapper')}>
        <span className={cx(className, 'label')}>{children}</span>
        {required && (
          <span className={cx('label-required')}>*</span>
        )}
      </div>
    );
  }
}


export default Label;
