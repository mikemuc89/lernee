import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class LinkDescription extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.node
    ]),
    url: PropTypes.string,
    name: PropTypes.string
  }

  render() {
    const { name, url, children, className } = this.props;

    return (
      <div className={cx(className, 'link-description')}>
        <a href={url} target='_blank'>
            {name || url}
        </a>
      {children && (
        <div className={cx('link-description-text')}>
        {Array.isArray(children) ? (children.map((item, idx) => (
          <div dangerouslySetInnerHTML={{ __html: item }} key={idx} className={cx('link-description-paragraph')} />
        ))) : (
          children
        )}
        </div>
      )}
      </div>
    );
  }
}


export default LinkDescription;
