import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class Quote extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.node
    ])
  }

  render() {
    const { children, className } = this.props;

    return (
      <div className={cx(className, 'quote')}>
      {Array.isArray(children) ? (children.map((item, idx) => (
        <div dangerouslySetInnerHTML={{ __html: item }} key={idx} className={cx('quote-paragraph')} />
      ))) : (
        children
      )}
      </div>
    );
  }
}


export default Quote;
