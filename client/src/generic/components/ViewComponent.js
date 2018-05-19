import Component from './Component';


class ViewComponent extends Component {
  viewHandler() {
    return {
      ...super.viewHandler(),
      contentState: this.props.contentState.contentState,
      navigate: this.props.navigate
    };
  }

  prepareView(props, callback) {
    const contentState = props.contentState;

    this.setState(contentState ? Object.assign({}, contentState.state, {
      content: contentState.contentState && contentState.contentState.content
    }) : {}, callback);
  }

  afterFetch(/* oldState */) {
    super.afterFetch();
  }

  componentWillReceiveProps(newProps) {
    this.prepareView(newProps, () => {
      super.componentWillReceiveProps(newProps);
    });
  }

  componentWillMount() {
    this.navigate = this.props.navigate;
    this.prepareView(this.props, () => {
      super.componentWillMount();
    });
  }
}


export default ViewComponent;
