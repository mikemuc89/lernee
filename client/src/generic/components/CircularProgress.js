import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


export const LABEL_TYPES = {
  PERCENT: Symbol('PROGRESSBAR.LABEL_TYPES.PERCENT'),
  ABSOLUTE: Symbol('PROGRESSBAR.LABEL_TYPES.ABSOLUTE'),
  ABSOLUTE_FRACTION: Symbol('PROGRESSBAR.LABEL_TYPES.ABSOLUTE_FRACTION'),
};

class CircularProgress extends React.Component {
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
    const percent = Math.round(100 * (value - min) / (max - min), 0);
    const overHalf = percent > 50;
    const leftRotate = Math.min(360, percent / 100 * 360);
    const rightRotate = Math.min(180, percent / 100 * 360);

    return (
      <div className={cx(className, 'circular-progress')}>
        <div className={cx('circular-progress-right', 'circular-progress-right-full')}></div>
        <div className={cx('circular-progress-right')} style={{
          'transform': `rotate(${rightRotate}deg)`,
          '-webkit-transform': `rotate(${rightRotate}deg)`,
          '-moz-transform': `rotate(${rightRotate}deg)`,
          '-o-transform': `rotate(${rightRotate}deg)`,
          '-ms-transform': `rotate(${rightRotate}deg)`
        }}></div>
        <div className={cx('circular-progress-left', 'circular-progress-left-full')}></div>
      {overHalf && (
        <div className={cx('circular-progress-left')} style={{
          'transform': `rotate(${leftRotate}deg)`,
          '-webkit-transform': `rotate(${leftRotate}deg)`,
          '-moz-transform': `rotate(${leftRotate}deg)`,
          '-o-transform': `rotate(${leftRotate}deg)`,
          '-ms-transform': `rotate(${leftRotate}deg)`
        }}></div>
      )}
      {hasLabel && (
        <div className={cx('circular-progress-label')}>
        {(labelType === LABEL_TYPES.PERCENT && (
          <span>{`${percent}%`}</span>
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


export default CircularProgress;
