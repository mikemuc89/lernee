import React from 'react';
import PropTypes from 'prop-types';
import cx from '../utils/cx';
import Select from 'react-select';
import Tooltips from './Tooltips';


const LITERALS = {
  CLEAR_ALL: 'Wyczyść',
  CLEAR_VALUE: 'Wyczyść',
  NO_RESULTS: 'Brak wyników wyszukiwania'
};


class Autocomplete extends React.Component {
  static propTypes = {
    className: PropTypes.string,

    value: PropTypes.any,

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

    placeholder: PropTypes.string,

    disabled: PropTypes.bool,
    required: PropTypes.bool,

    onBackspace: PropTypes.func,
    onBlur: PropTypes.func,
    onChangeValue: PropTypes.func,
    onDelete: PropTypes.func,
    onEnter: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onTab: PropTypes.func
  }

  render() {
    const {
      className,
      widget, placeholder,
      errors, hints, warnings,
      required = false, disabled = false,
      onChangeValue,
      ...props
    } = this.props;
    const { items, multiChoice = false } = widget;

    return (
      <div className={cx(className, 'input-wrapper')}>
        <Tooltips classType='input' errors={errors} hints={hints} warnings={warnings} />
        <Select
          clearAllText={LITERALS.CLEAR_ALL}
          clearValueText={LITERALS.CLEAR_VALUE}
          options={items}
          labelKey='data'
          multi={multiChoice}
          noResultsText={LITERALS.NO_RESULTS}
          valueKey='id'
          onChange={onChangeValue}
          placeholder={!disabled && placeholder}
          disabled={disabled}
          {...props}
        />
      {required && (
        <span className={cx('input-required')}>*</span>
      )}
      </div>
    );
  }
}


export default Autocomplete;
