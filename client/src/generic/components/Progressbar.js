import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


export const LABEL_TYPES = {
  PERCENT: Symbol('PROGRESSBAR.LABEL_TYPES.PERCENT'),
  ABSOLUTE: Symbol('PROGRESSBAR.LABEL_TYPES.ABSOLUTE'),
  ABSOLUTE_FRACTION: Symbol('PROGRESSBAR.LABEL_TYPES.ABSOLUTE_FRACTION'),
};

class Progressbar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    hasLabel: PropTypes.bool,
    labelType: PropTypes.symbol
  }

  render() {
    const { hasLabel, labelType = LABEL_TYPES.PERCENT, className, value, min, max } = this.props;
    const width = Math.round(100 * (value - min) / (max - min), 0);

    return (
      <div className={cx(className, 'progressbar')}>
        <div className={cx('progressbar-percent')} style={{ width: `${width}%` }}></div>
      {hasLabel && (
        <div className={cx('progressbar-label')}>
        {(labelType === LABEL_TYPES.PERCENT && (
          <span>{`${width}%`}</span>
        )) || (labelType === LABEL_TYPES.ABSOLUTE && (
          <span>{`${value}`}</span>
        )) || (labelType === LABEL_TYPES.ABSOLUTE_FRACTION && (
          <span>{`${value} / ${max}`}</span>
        ))}
        </div>
      )}
      </div>
    );
  }
}


export default Progressbar;
