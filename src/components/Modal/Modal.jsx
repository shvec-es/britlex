import s from './Modal.module.css';

const Modal = ({ closeModal, children }) => {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <button type="button" onClick={closeModal}>
          close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
