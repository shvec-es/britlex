import { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.closeByEsc);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.closeByEsc);
  };

  closeByEsc = e => {
    if (e.code === 'Escape') this.props.closeModal();
  };

  closeOnOverlay = e => {
    if (e.target === e.currentTarget) this.props.closeModal();
  };

  render() {
    return (
      <div className={s.overlay} onClick={this.closeOnOverlay}>
        <div className={s.modal}>
          <button type="button" onClick={this.props.closeModal}>
            close
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
