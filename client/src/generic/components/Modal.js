import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';
import Button, { BUTTON_TYPES } from './Button';


export const BUTTONS = {
  BACK: { text: 'Wstecz', icon: 'arrow-left', method: 'onBack', buttonType: BUTTON_TYPES.BACK },
  CLOSE: { text: 'Zamknij', icon: '', method: 'onClose', buttonType: BUTTON_TYPES.BACK },
  FINISH: { text: 'Zakończ', icon: '', method: 'onFinish', buttonType: BUTTON_TYPES.SUBMIT },
  NEXT: { text: 'Dalej', icon: 'arrow-right', method: 'onNext', buttonType: BUTTON_TYPES.SUBMIT },
  OK: { text: 'Ok', icon: '', method: 'onOk', buttonType: BUTTON_TYPES.SUBMIT },
  PICK: { text: 'Wybierz', icon: '', method: 'onPick', buttonType: BUTTON_TYPES.SUBMIT },
  PREVIOUS: { text: 'Wstecz', icon: 'arrow-left', method: 'onPrevious', buttonType: BUTTON_TYPES.BACK },
  SAVE: { text: 'Zapisz', icon: '', method: 'onSave', buttonType: BUTTON_TYPES.SAVE },
  SUBMIT: { text: 'Wykonaj', icon: '', method: 'onSubmit', buttonType: BUTTON_TYPES.SUBMIT }
};


class Modal extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    onBack: PropTypes.func,
    title: PropTypes.string
  }

  render() {
    const { className, children, title, buttons = [BUTTONS.BACK, BUTTONS.SAVE, BUTTONS.SUBMIT, BUTTONS.OK], onClose } = this.props;
    
    return (
      <ReactCSSTransitionGroup
        transitionName="modal"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}>
        <div className={cx('modal-wrapper')} onClick={onClose}>
          <div className={cx('modal-wrapper-close')}>
            <i className={cx('fa', 'fa-close')}></i>
          </div>
          <div className={cx(className, 'modal')}>
            <span className={cx('modal-close-button')} onClick={onClose}><i className={cx('fa fa-close')}></i></span>
          {title && (
            <div className={cx('modal-title')}>{title}</div>
          )}
            <div className={cx('modal-content', !title && 'modal-content-without-title')}>{children}</div>
            <div className={cx('modal-buttons')}>
            {buttons.map(({ text, icon, method, buttonType }, idx) => (
              <Button key={idx} icon={icon} buttonType={buttonType} onAction={this.props[method]}>{text}</Button>
            ))}
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}


export default Modal;
