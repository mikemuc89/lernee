import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';
import Tooltips from './Tooltips';


class Input extends React.Component {
  static propTypes = {
    className: PropTypes.string,

    value: PropTypes.any,
    cache: PropTypes.string,

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

    placeholder: PropTypes.string,

    disabled: PropTypes.bool,
    focused: PropTypes.bool,
    required: PropTypes.bool,

    onBackspace: PropTypes.func,
    onBlur: PropTypes.func,
    onChangeValue: PropTypes.func,
    onDelete: PropTypes.func,
    onEnter: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onTab: PropTypes.func
  }

  render() {
    const {
      className,
      value, cache,
      errors, hints, warnings,
      placeholder,
      disabled = false, focused, required = false,
      onBackspace, onBlur, onChangeValue, onDelete, onEnter, onFocus, onKeyDown, onKeyPress, onKeyUp, onMouseDown, onMouseUp, onTab
    } = this.props;

    return (
      <div className={cx(className, 'input-wrapper')}>
        <Tooltips classType='input' errors={errors} hints={hints} warnings={warnings} />
        <input
          value={cache || (focused || disabled ? '' : placeholder)}
          disabled={disabled}
          type='text'
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => {
            onChangeValue(e.target.value, e);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 8) {
              onBackspace(e);
            } else if (e.keyCode === 9) {
              onTab(e);
            } else if (e.keyCode === 13) {
              onEnter(e);
            } else if (e.keyCode === 46) {
              onDelete(e);
            }
            onKeyDown(e);
          }}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          className={cx('input', disabled && 'input-disabled', !value && !focused && 'input-placeholder', hints && !warnings && !errors && 'input-hint', warnings && !errors && 'input-warning', errors && 'input-error')}
        />
      {required && (
        <span className={cx('input-required')}>*</span>
      )}
      </div>
    );
  }
}


export default Input;
