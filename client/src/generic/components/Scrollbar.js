import React from 'react';
import PropTypes from 'prop-types';
import cx from '../utils/cx';
import update from '../utils/update';
import handler from '../utils/handlers/scrollbar';


class Scrollbar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onSelect: PropTypes.func,
    onCloseSuggestions: PropTypes.func,
    itemFormatter: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.object)
  };

  constructor() {
    super();
    this.state = {
      dragging: false,
      currentScrollbarTop: 0,
      relativeElementPosition: null,
      relativePagePosition: null
    };
  }

  render() {
    const { className, items, emptyMessage = 'Brak wyników wyszukiwania', onSelect, onCloseSuggestions, itemFormatter = (data) => (data) } = this.props;
    const { itemsHandler, scrollbarWrapperHandler, scrollbarHandler, isListVisible, isScrollbarVisible } = handler(items, this.state, (spec) => { this.setState(update(this.state, spec)); });

    return (
      <div>
        <div className={cx(className)}>
          <div className={cx(`${className}-items`)} {...itemsHandler()}>
          {isListVisible ? items.map(({ id, data }) => (
            <div key={id} className={cx(`${className}-item`)} onClick={(e) => {onSelect(id, e);}}>{itemFormatter(data)}</div>
          )) : (
            <div className={cx(`${className}-empty`)}>{emptyMessage}</div>
          )}
          </div>
        {isScrollbarVisible && (
          <div className={cx('scrollbar-wrapper')} {...scrollbarWrapperHandler()}>
            <div className={cx('scrollbar')} {...scrollbarHandler()}></div>
          </div>
        )}
        </div>
        <div className={cx('scrollbar-background')} onClick={onCloseSuggestions}></div>
      </div>
    );
  }
}


export default Scrollbar;
