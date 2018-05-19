import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class HorizontalSeparator extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    elem: PropTypes.string
  }

  render() {
    const { elem = '-', className } = this.props;

    return (
      <span className={cx(className, 'separator', 'horizontal-separator')}>
        {elem}
      </span>
    );
  }
}


class VerticalSeparator extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.string
  }

  render() {
    const { children, className } = this.props;

    return (
      <div className={cx(className, 'separator', 'vertical-separator')}>
        {children}
      </div>
    );
  }
}


export {
  HorizontalSeparator,
  VerticalSeparator
};
