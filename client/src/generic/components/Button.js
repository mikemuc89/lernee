import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';
import Tooltips from './Tooltips';


const BUTTON_TYPES = {
  BACK: Symbol('BUTTON.BUTTON_TYPES.BACK'),
  FUNCTION: Symbol('BUTTON.BUTTON_TYPES.FUNCTION'),
  SAVE: Symbol('BUTTON.BUTTON_TYPES.SAVE'),
  SEARCH: Symbol('BUTTON.BUTTON_TYPES.SEARCH'),
  SUBMIT: Symbol('BUTTON.BUTTON_TYPES.SUBMIT')
};

const BUTTON_TYPES_CLASS = {
  [BUTTON_TYPES.BACK]: 'button-back',
  [BUTTON_TYPES.SAVE]: 'button-save',
  [BUTTON_TYPES.SEARCH]: 'button-search',
  [BUTTON_TYPES.SUBMIT]: 'button-submit',
  [BUTTON_TYPES.FUNCTION]: 'button-function'
};

class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]),
    onAction: PropTypes.func,
    buttonType: PropTypes.symbol,
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
    icon: PropTypes.string
  };

  render() {
    const { children, className, disabled = false, errors, warnings, hints, buttonType = BUTTON_TYPES.SUBMIT, onAction, icon } = this.props;

    return (
      <div className={cx(className, 'button-wrapper', [BUTTON_TYPES.SAVE, BUTTON_TYPES.SUBMIT].includes(buttonType) && 'button-wrapper-right')}>
        <Tooltips classType='button' errors={errors} hints={hints} warnings={warnings} />
        <div
          {...disabled ? {} : { tabIndex: 0 }}
          className={cx(
            'button',
            disabled && 'button-disabled',
            BUTTON_TYPES_CLASS[buttonType]
          )}
          onClick={(e) => {
          if (!errors && !disabled && onAction) {
            onAction(e);
          }
        }}>
        {icon && (
          <i className={cx('fa', `fa-${icon}`, children && 'with-text')} />
        )}
          {children}
        </div>
      </div>
    );
  }
}


export {
  BUTTON_TYPES
};

export default Button;
