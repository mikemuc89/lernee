import React from 'react';
import { PropTypes } from 'prop-types';
import Button from './Button';
import cx from '../utils/cx';


export const NOTIFICATION_TYPES = {
  ERROR: Symbol('NOTIFICATION_TYPES.ERROR'),
  WARNING: Symbol('NOTIFICATION_TYPES.WARNING'),
  INFO: Symbol('NOTIFICATION_TYPES.INFO'),
  SUCCESS: Symbol('NOTIFICATION_TYPES.SUCCESS'),
  GENERAL: Symbol('NOTIFICATION_TYPES.GENERAL'),
  BLACK: Symbol('NOTIFICATION_TYPES.BLACK'),
  WHITE: Symbol('NOTIFICATION_TYPES.WHITE')
};

const NOTIFICATION_TYPES_TO_CLASS = {
  [NOTIFICATION_TYPES.ERROR]: 'notification-error',
  [NOTIFICATION_TYPES.WARNING]: 'notification-warning',
  [NOTIFICATION_TYPES.INFO]: 'notification-info',
  [NOTIFICATION_TYPES.SUCCESS]: 'notification-success',
  [NOTIFICATION_TYPES.GENERAL]: 'notification-general',
  [NOTIFICATION_TYPES.BLACK]: 'notification-black',
  [NOTIFICATION_TYPES.WHITE]: 'notification-white'
};


class Notification extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
    externalLink: PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string
    }),
    icon: PropTypes.string,
    internalRedirection: PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    }),
    notificationType: PropTypes.symbol,
    id: PropTypes.string,
    onClose: PropTypes.func
  }

  render() {
    const { children, className, icon, externalLink, internalRedirection, notificationType = NOTIFICATION_TYPES.GENERAL } = this.props;

    return (
      <div className={cx('notification-wrapper')}>
        <div className={cx(className, 'notification', NOTIFICATION_TYPES_TO_CLASS[notificationType])}>
        {icon && (
          <span className={cx('notification-icon')}><i className={cx('fa', `fa-${icon}`)}></i></span>
        )}
          <span className={cx('notification-text')}>{children}</span>
          <span className={cx('notification-close')} onClick={() => { onClose(id) }}><i className={cx('fa', 'fa-close')}></i></span>
        {externalLink && (
          <a className={cx('notification-external-link')} target="_blank" href={externalLink.url}>{externalLink.text}</a>
        )}
        {internalRedirection && (
          <Button className={cx('notification-button')}>{internalRedirection.text}</Button>
        )}
        </div>
      </div>
    );
  }
}


export default Notification;
