import React from 'react';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';
import Tooltips from './Tooltips';
import Checkbox from './Checkbox';
import Label from './Label';


class CheckboxGroup extends React.Component {
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

    disabled: PropTypes.bool,
    required: PropTypes.bool,

    onBlur: PropTypes.func,
    onChangeValue: PropTypes.func,
    onFocus: PropTypes.func
  }

  render() {
    const {
      className,
      value,
      widget = {},
      errors, warnings, hints,
      onChangeValue,
      ...props
    } = this.props;

    const { items = [] } = widget;
    const val = value || [];

    return (
      <div className={cx(className, 'checkbox-group-wrapper')}>
        <Tooltips classType='checkbox-group' errors={errors} hints={hints} warnings={warnings} />
      {items.map(({ id, data }) => (
        <div key={id}>
          <Checkbox
            value={val.includes(id)}
            widget={widget}
            onChangeValue={(e) => { onChangeValue(id, e); }}
            {...props}
          />
          <Label className={cx('label-checkbox')}>{data}</Label>
        </div>
      ))}
      </div>
    );
  }
}


export default CheckboxGroup;
