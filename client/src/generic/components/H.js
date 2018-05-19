import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class H1 extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ])
  }

  render() {
    const { children, id, className } = this.props;

    return (
      <div id={id} className={cx(className, 'h', 'h1')}>
        {children}
      </div>
    );
  }
}


class H2 extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ])
  }

  render() {
    const { children, id, className } = this.props;

    return (
      <div id={id} className={cx(className, 'h', 'h2')}>
        {children}
      </div>
    );
  }
}


class H3 extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ])
  }

  render() {
    const { children, id, className } = this.props;

    return (
      <div id={id} className={cx(className, 'h', 'h3')}>
        {children}
      </div>
    );
  }
}


class H4 extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ])
  }

  render() {
    const { children, id, className } = this.props;

    return (
      <div id={id} className={cx(className, 'h', 'h4')}>
        {children}
      </div>
    );
  }
}


class H5 extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ])
  }

  render() {
    const { children, id, className } = this.props;

    return (
      <div id={id} className={cx(className, 'h', 'h5')}>
        {children}
      </div>
    );
  }
}


export {
  H1,
  H2,
  H3,
  H4,
  H5
};
