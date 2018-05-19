import React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';
import Tooltips from './Tooltips';


class MultilineInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,

    value: PropTypes.any,
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

    placeholder: PropTypes.string,

    disabled: PropTypes.bool,
    focused: PropTypes.bool,
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

  shouldComponentUpdate(nextProps){
    const node = ReactDOM.findDOMNode(this.refs['input']);
    return nextProps.text !== node.innerText;
  }

  componentDidUpdate() {
    const node = ReactDOM.findDOMNode(this.refs['input']);
    if (this.props.text !== node.innerText) {
       node.innerText = this.props.text;
    }
  }

  render() {
    const {
      className,
      value, cache,
      errors, hints, warnings,
      placeholder,
      disabled = false, focused, required = false,
      onBackspace, onBlur, onChangeValue, onDelete, onEnter, onFocus, onKeyDown, onKeyPress, onKeyUp, onMouseDown, onMouseUp, onTab
    } = this.props;

    return (
      <div className={cx(className, 'multiline-input-wrapper')}>
        <Tooltips classType='multiline-input' errors={errors} hints={hints} warnings={warnings} />
        <div
          contentEditable={!disabled}
          suppressContentEditableWarning
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={(e) => {
            const node = ReactDOM.findDOMNode(this.refs['input']);
            const text = node.innerText;
            if (onChangeValue && text !== this.lastText) {
                onChangeValue(text, e);
            }
            this.lastText = text;
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 8) {
              onBackspace(e);
            } else if (e.keyCode === 9) {
              onTab(e);
            } else if (e.keyCode === 13) {
              onEnter(e);
            } else if (e.keyCode === 46) {
              onDelete(e);
            }
            onKeyDown(e);
          }}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          ref="input"
          className={cx('multiline-input', disabled && 'multiline-input-disabled', !value && !focused && 'multiline-input-placeholder', hints && !warnings && !errors && 'multiline-input-hint', warnings && !errors && 'multiline-input-warning', errors && 'multiline-input-error')}
        >{cache || (focused || disabled ? '' : placeholder)}</div>
      {required && (
        <span className={cx('multiline-input-required')}>*</span>
      )}
      </div>
    );
  }
}


export default MultilineInput;
