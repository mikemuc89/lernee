import PropTypes from 'prop-types';
import ViewComponent from './ViewComponent';


class FlowComponent extends ViewComponent {
  static childContextTypes = {
    flow: PropTypes.shape({
      onCancel: PropTypes.func,
      onFinish: PropTypes.func
    })
  }

  afterFetch(/* oldState */) {
    if (this.state.step === '_end_') {
      return this.onFinish();
    }
    super.afterFetch();
  }

  getChildContext() {
    return {
      flow: {
        onCancel: this.onCancel,
        onFinish: this.onFinish
      }
    };
  }

  onCancel() {}

  onFinish() {}
}


export default FlowComponent;
