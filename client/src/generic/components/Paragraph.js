import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class Paragraph extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    summary: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ])
  }

  render() {
    const { children, className, summary = false } = this.props;

    return (
      <div dangerouslySetInnerHTML={{ __html: children }} className={cx(className, 'paragraph', summary && 'summary')} />
    );
  }
}


export default Paragraph;
