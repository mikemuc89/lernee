import PropTypes from 'prop-types';
import ViewComponent from './ViewComponent';
import request from '../../App/utils/request';


class StepComponent extends ViewComponent {
  static contextTypes = {
    flow: PropTypes.shape({
      onCancel: PropTypes.func,
      onFinish: PropTypes.func
    })
  }

  doAction(action, data/*, errors*/) {
    const url = this.getUrl();
    this.fetched = false;
    if (url) {
      const oldState = Object.assign({}, this.state);
      return request(url, { action, data, step: this.state.step }).then((response) => {
        this.fetched = true;
        this.setState({ ...this.state, ...response }, () => { this.afterFetch(oldState); });
      });
    } else {
      this.setState(this.state);
      this.fetched = true;
    }
  }

  doBack() {
    this.onBack();
    this.doAction('back');
  }

  doSubmit() {
    const errors = this.getErrors();
    if (errors) {
      return null;
    }
    const data = this.getData();
    this.onSubmit(data, errors);
    this.doAction('submit', data, errors);
  }

  doPartial() {
    const data = this.getData();
    this.onPartial(data);
    this.doAction('partial', data);
  }

  onSubmit(/* data, errors */) {}

  onPartial(/* data */) {}

  onBack() {}
}


export default StepComponent;
