import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class Menu extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className, children } = this.props;

    return (
      <div className={cx(className, 'menu')}>
        {children}
      </div>
    );
  }
}


class MenuLink extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
    onClick: PropTypes.func
  }

  render() {
    const { className, data, onClick } = this.props;
    const { icon, title } = data;

    return (
      <a onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
      }} className={cx(className, 'menu-link')}>
      {icon && (
        <i className={cx('fa', `fa-${icon}`, title && 'with-text')} />
      )}
        {title}
      </a>
    );
  }
}


export { MenuLink };
export default Menu;
