import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';
import formatPhoneNumber from '../utils/formatters/formatPhoneNumber';


const HTTPS_REGEX = new RegExp('^https?://.*');
const TOP_MENU_LINK_ICONS = {
  facebook: 'facebook',
  googleplus: 'google-plus',
  instagram: 'instagram',
  linkedin: 'linkedin',
  mail: 'at',
  phone: 'phone',
  snapchat: 'snapchat-ghost',
  twitter: 'twitter'
};
const TOP_MENU_LINK_TEXT_FORMATTERS = {
  phone: formatPhoneNumber,
  default: (value) => value
};


class TopMenu extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className } = this.props;

    return (
      <div className={cx(className, 'top-menu')}>
        {this.props.children}
      </div>
    );
  }
}


class TopMenuLink extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    url: PropTypes.string,
    onClick: PropTypes.func
  }

  render() {
    const { className, id, onClick, children, url } = this.props;
    const icon = TOP_MENU_LINK_ICONS[id];
    const external = url && HTTPS_REGEX.test(url);
    const formattedText = (TOP_MENU_LINK_TEXT_FORMATTERS[id] || TOP_MENU_LINK_TEXT_FORMATTERS['default'])(children);

    return (
      <a href={(!onClick && url) ? url : undefined} onClick={(e) => {
        if (!url && onClick) {
          onClick(e);
        }
      }} target={external ? '_blank' : '_self'} className={cx(className, 'top-menu-link')}>
      {icon && (
        <i className={cx('fa', `fa-${icon}`, children && 'with-text')} />
      )}
        {formattedText}
      </a>
    );
  }
}


export { TopMenuLink };
export default TopMenu;
