import React from 'react';
import PropTypes from 'prop-types';
import cx from '../utils/cx';
import Tooltips from './Tooltips';
import DayPickerInput from 'react-day-picker/DayPickerInput';


class DateInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,

    value: PropTypes.string,
    cache: PropTypes.string,
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

    onChangeDate: PropTypes.func,
    onChangeValue: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  }

  render() {
    const {
      className,
      errors, hints, warnings,
      required = false,
      ...props
    } = this.props;

    return (
      <div className={cx(className, 'date-input-wrapper')}>
        <Tooltips classType='date-input' errors={errors} hints={hints} warnings={warnings} />
        <DayPickerInput {...props} />
      {required && (
        <span className={cx('date-input-required')}>*</span>
      )}
      </div>
    );
  }
}


export default DateInput;
