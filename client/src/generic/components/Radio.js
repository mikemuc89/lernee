import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';
import Tooltips from './Tooltips';


class Radio extends React.Component {
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
      onBlur, onChangeValue, onFocus
    } = this.props;

    return (
      <div className={cx(className, 'radio-wrapper')}>
        <Tooltips classType='radio' errors={errors} hints={hints} warnings={warnings} />
        <div
          className={cx('radio', disabled && 'radio-disabled', hints && !warnings && !errors && 'radio-hint', warnings && !errors && 'radio-warning', errors && 'radio-error')}
          {...disabled ? {} : { tabIndex: 0 }}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={(e) => {
            if (!disabled) {
              onChangeValue(!value, e);
            }
          }}>
        {value && (
          <div className={cx('radio-inner-checked')}></div>
        )}
        </div>
        {required && (
          <span className={cx('radio-required')}>*</span>
        )}
      </div>
    );
  }
}


export default Radio;
