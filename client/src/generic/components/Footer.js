import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class Footer extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className, children } = this.props;

    return (
      <div className={cx(className, 'footer')}>
        {children}
      </div>
    );
  }
}


export default Footer;
