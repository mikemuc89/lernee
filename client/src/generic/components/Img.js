import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { PropTypes } from 'prop-types';
import cx from '../utils/cx';


class Img extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    hasPopup: PropTypes.bool,
    opened: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.node
    ])
  }

  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened || false
    };
  }

  toggleImage = () => {
    const { hasPopup } = this.props;
    const { opened } = this.state;

    if (hasPopup) {
      this.setState({ ...this.state, opened: !opened });
    }
  }

  render() {
    const { className, src, children, hasPopup = false, half = false } = this.props;
    const { opened = false } = this.state;

    return (
      <div className={cx('img-wrapper', half && 'half')}>
        <img src={src} className={cx(className, 'img', children && 'with-title')} onClick={this.toggleImage} />
      {Array.isArray(children) ? (children.map((item, idx) => (
        <div dangerouslySetInnerHTML={{ __html: item }} key={idx} className={cx('img-title')} onClick={this.toggleImage} />
      ))) : children && (
        <div className={cx('img-title')} onClick={this.toggleImage}>{children}</div>
      )}
        <ReactCSSTransitionGroup
          transitionName="modal-img"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
          {hasPopup && opened && (
            <table className={cx('img-modal')} onClick={this.toggleImage}>
              <tbody>
                <tr>
                  <td className={cx('img-modal-helper')}>
                    <i className={cx('fa', 'fa-close')}></i>
                    <img src={src} className={cx('img-modal-content', children && 'with-title')} onClick={(e) => {
                      e.stopPropagation();
                    }} />
                  {Array.isArray(children) ? (children.map((item, idx) => (
                    <div dangerouslySetInnerHTML={{ __html: item }} key={idx} className={cx('img-modal-title')} />
                  ))) : children && (
                    <div className={cx('img-modal-title')}>{children}</div>
                  )}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}


export default Img;
