import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class Tooltips extends React.Component {
  static propTypes = {
    classType: PropTypes.string,
    errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    hints: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    warnings: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  }

  render() {
    const { errors, hints, warnings, classType } = this.props;

    return (errors || hints || warnings) ? (
      <div className={cx('tooltips')}>
        {errors && (
          <div className={cx(`${classType}-tooltip`, `${classType}-tooltip-error`)}><i />{errors}</div>
        )}
        {warnings && !errors && (
          <div className={cx(`${classType}-tooltip`, `${classType}-tooltip-warning`)}><i />{warnings}</div>
        )}
        {hints && !warnings && !errors && (
          <div className={cx(`${classType}-tooltip`, `${classType}-tooltip-hint`)}><i />{hints}</div>
        )}
      </div>
    ) : null;
  }
}


export default Tooltips;
