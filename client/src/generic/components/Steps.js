import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';
import Tooltips from './Tooltips';


class Step extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.string,
    className: PropTypes.string,

    errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    warnings: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    hints: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),

    onSwitch: PropTypes.func
  }

  render() {
    const {
      className,
      children,
      active,
      id,
      errors, warnings, hints,
      disabled = false,
      onSwitch
    } = this.props;

    return (
      <div className={cx(className, 'step', active && 'step-active', disabled && 'step-disabled')} onClick={(e) => {
        if (onSwitch && typeof onSwitch === 'function') {
          onSwitch(id, e);
        }
      }}>
        <Tooltips classType='step' errors={errors} hints={hints} warnings={warnings} />
        {children}
      </div>
    );
  }
}

class Steps extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {
      className,
      children
    } = this.props;

    return (
      <div className={cx(className, 'steps')}>
        {children}
      </div>
    );
  }
}


export {
  Step
};

export default Steps;
