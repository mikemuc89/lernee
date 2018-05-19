import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';
import Tooltips from './Tooltips';


const CHECK_TYPES = {
  SQUARE: Symbol('CHECKBOX.CHECK_TYPES.SQUARE'),
  TICK: Symbol('CHECKBOX.CHECK_TYPES.TICK'),
  X: Symbol('CHECKBOX.CHECK_TYPES.X')
};

class Checkbox extends React.Component {
  static propTypes = {
    className: PropTypes.string,

    value: PropTypes.any,

    widget: PropTypes.object,

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

    disabled: PropTypes.bool,
    required: PropTypes.bool,

    onBlur: PropTypes.func,
    onChangeValue: PropTypes.func,
    onFocus: PropTypes.func
  }

  render() {
    const {
      className,
      value,
      errors, warnings, hints,
      disabled = false, required = false,
      checkType = CHECK_TYPES.TICK,
      onBlur, onChangeValue, onFocus
    } = this.props;

    return (
      <div className={cx(className, 'checkbox-wrapper')}>
        <Tooltips classType='checkbox' errors={errors} hints={hints} warnings={warnings} />
        <div
          className={cx('checkbox', disabled && 'checkbox-disabled', hints && !warnings && !errors && 'checkbox-hint', warnings && !errors && 'checkbox-warning', errors && 'checkbox-error')}
          {...disabled ? {} : { tabIndex: 0 }}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={(e) => {
            if (!disabled) {
              onChangeValue(!value, e);
            }
          }}>
        {value && (
          <div className={cx(
            checkType === CHECK_TYPES.SQUARE && 'checkbox-inner-square',
            checkType === CHECK_TYPES.X && 'checkbox-inner-x',
            checkType === CHECK_TYPES.TICK && 'checkbox-inner-checked'
          )}></div>
        )}
        </div>
        {required && (
          <span className={cx('checkbox-required')}>*</span>
        )}
      </div>
    );
  }
}


export {
  CHECK_TYPES
};

export default Checkbox;
