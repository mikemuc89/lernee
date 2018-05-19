import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';
import scrollTo from '../utils/scrollTo';


const prepareElements = ({ id, text, elements = [] }, idx) => (
  <div key={idx}>
    <div className={cx('toc-element')}>
      <a id={`toc-${id}`} onClick={(e) => { scrollTo(e, id); }}>{text}</a>
    </div>
  {elements && elements.length > 0 && (
    <div className={cx('toc-element-sub')}>
      {elements.map((item, subIdx) => (
        prepareElements(item, `${idx}-${subIdx}`)
      ))}
    </div>
  )}
  </div>
);


class TableOfContents extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className, data } = this.props;

    return (
      <div className={cx(className, 'toc')}>
      {data.map((item, idx) => (
        prepareElements(item, idx)
      ))}
      </div>
    );
  }
}


export default TableOfContents;
