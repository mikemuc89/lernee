import React from 'react';
import PropTypes from 'prop-types';
import cx from '../utils/cx';
import Tooltips from './Tooltips';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { HorizontalSeparator } from './Separator';


class DateRange extends React.Component {
  static propTypes = {
    className: PropTypes.string,

    widget: PropTypes.object,

    errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    warnings: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    hints: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),

    disabled: PropTypes.bool,
    required: PropTypes.bool,

    dateFrom: PropTypes.func,
    dateTo: PropTypes.func
  }

  render() {
    const {
      className,
      errors, hints, warnings,
      required = false, disabled = false,
      dateFrom, dateTo
    } = this.props;

    const {
      errors: dateFromErrors,
      warnings: dateFromWarnings,
      hints: dateFromHints,
      disabled: dateFromDisabled,
      ...dateFromProps
    } = dateFrom();
    const {
      errors: dateToErrors,
      warnings: dateToWarnings,
      hints: dateToHints,
      disabled: dateToDisabled,
      ...dateToProps
    } = dateTo();

    return (
      <div className={cx(className, 'date-range-wrapper')}>
        <div className={cx('date-range-from')}>
          <Tooltips classType='date-range-from' errors={errors || dateFromErrors} hints={hints || dateFromHints} warnings={warnings || dateFromWarnings} />
          <DayPickerInput
            {...dateFromProps}
            disabled={disabled || dateFromDisabled}
          />
        </div>
        <HorizontalSeparator/>
        <div className={cx('date-range-to')}>
          <Tooltips classType='date-range-to' errors={errors || dateToErrors} hints={hints || dateToHints} warnings={warnings || dateToWarnings} />
          <DayPickerInput
            {...dateToProps}
            disabled={disabled || dateToDisabled}
          />
        </div>
      {required && (
        <span className={cx('date-range-required')}>*</span>
      )}
      </div>
    );
  }
}


export default DateRange;
