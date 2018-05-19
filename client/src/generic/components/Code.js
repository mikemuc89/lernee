import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class CodeLine extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    lines: PropTypes.arrayOf(
      PropTypes.string
    ),
    highlighted: PropTypes.bool,
    className: PropTypes.string
  }

  render() {
    const {
      className,
      children,
      highlighted = false
    } = this.props;

    return (
      <span className={cx(className, 'code-line', highlighted && 'code-line-highlighted')}>
        {children}
      </span>
    );
  }
}

class Code extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    lines: PropTypes.arrayOf(
      PropTypes.string
    ),
    highlighted: PropTypes.arrayOf(
      PropTypes.number
    ),
    className: PropTypes.string
  }

  render() {
    const {
      className,
      children,
      lines,
      highlighted = []
    } = this.props;
    const renderLines = lines || children.split();

    return (
      <pre className={cx(className, 'code')}>
        {renderLines.map((item, index) => (
          <CodeLine key={index} highlighted={highlighted.includes(index)}>{item}</CodeLine>
        ))}
      </pre>
    );
  }
}


export {
  CodeLine
};

export default Code;
