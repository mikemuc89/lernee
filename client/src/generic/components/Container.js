import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class Container extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className } = this.props;

    return (
      <div className={cx(className, 'container')}>
        {this.props.children}
      </div>
    );
  }
}


export default Container;
