const ITEM_HEIGHT = 30;
const MAX_ITEMS_VISIBLE_COUNT = 6;
const SELECT_BOX_HEIGHT = ITEM_HEIGHT * MAX_ITEMS_VISIBLE_COUNT;


export default (items, state, updateState) => {
  const itemsCount = items ? items.length : 0;
  const isScrollbarVisible = itemsCount > MAX_ITEMS_VISIBLE_COUNT;
  const isListVisible = items && items.length;

  const scrollbarHeight = SELECT_BOX_HEIGHT * SELECT_BOX_HEIGHT / (itemsCount * ITEM_HEIGHT);
  const listHeight = itemsCount * ITEM_HEIGHT;

  const maxScrollbarTop = SELECT_BOX_HEIGHT - scrollbarHeight;

  const { currentScrollbarTop } = state;
  const currentListTop = -(currentScrollbarTop / SELECT_BOX_HEIGHT) * listHeight;

  const onWheel = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const { currentScrollbarTop } = state;

    const newPosition = currentScrollbarTop + (scrollbarHeight * Math.round(e.deltaY / Math.abs(e.deltaY)));
    const $set = newPosition < 0 ? 0 : (newPosition > maxScrollbarTop && maxScrollbarTop) || newPosition;

    updateState({
      currentScrollbarTop: { $set }
    });
  };

  return {
    itemsHandler() {
      return {
        style: {
          top: currentListTop,
          position: 'relative'
        },
        onWheel
      };
    },
    scrollbarWrapperHandler() {
      return {
        onMouseDown(e) {
          e.stopPropagation();
          e.preventDefault();

          if (e.button !== 0) {
            return false;
          }

          const { currentScrollbarTop } = state;

          const scrollbarElKey = Object.keys(e.target.children).find((key) => e.target.children[key].className.indexOf('scrollbar') >= 0);
          const scrollbarPageTop = e.target.children[scrollbarElKey].getBoundingClientRect().top;

          const newPosition = currentScrollbarTop + (scrollbarPageTop < e.pageY ? scrollbarHeight : -scrollbarHeight);
          const $set = newPosition < 0 ? 0 : (newPosition > maxScrollbarTop && maxScrollbarTop) || newPosition;

          updateState({
            currentScrollbarTop: { $set }
          });
        },
        onWheel
      };
    },
    scrollbarHandler() {
      const stopDragging = (e) => {
        e.stopPropagation();
        e.preventDefault();

        updateState({
          dragging: { $set: false }
        });
      };

      return {
        style: {
          top: currentScrollbarTop,
          height: scrollbarHeight
        },
        onMouseDown(e) {
          e.stopPropagation();
          e.preventDefault();

          if (e.button !== 0) {
            return false;
          }

          const relativeElementPosition = e.target.offsetTop;
          const relativePagePosition = e.pageY;

          updateState({
            $merge: {
              dragging: true,
              relativeElementPosition,
              relativePagePosition
            }
          });
        },
        onMouseMove(e) {
          e.stopPropagation();
          e.preventDefault();

          if (!state.dragging) {
            return false;
          }

          const relativePagePosition = e.pageY;
          const relativeElementPosition = state.relativeElementPosition + (relativePagePosition - state.relativePagePosition);
          const currentScrollbarTop = relativeElementPosition < 0 ? 0 : (relativeElementPosition > maxScrollbarTop && maxScrollbarTop) || relativeElementPosition;

          updateState({
            $merge: {
              currentScrollbarTop,
              relativePagePosition,
              relativeElementPosition: currentScrollbarTop
            }
          });
        },
        onMouseUp: stopDragging,
        onMouseOut: stopDragging
      };
    },
    isListVisible,
    isScrollbarVisible
  };
};
