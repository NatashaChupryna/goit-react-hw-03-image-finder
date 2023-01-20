import { createPortal } from 'react-dom';
import { PureComponent } from 'react';
import { Backdrop, ModalDiv } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
 
  closeOnBackdropClick = (event) => {
if(event.target === event.currentTarget)
this.props.onClose();
  }

  render() {
    return createPortal(
      <Backdrop onClick={this.closeOnBackdropClick}>
        <ModalDiv></ModalDiv>
      </Backdrop>,
      modalRoot
    );
  }
}
