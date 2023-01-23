import { createPortal } from 'react-dom';
import { PureComponent } from 'react';
import { Backdrop, ModalDiv } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends PureComponent
{ 
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyD )
    }

    componentWillUnmount(){
            window.removeEventListener('keydown', this.handleKeyD )
        }
    handleKeyD = e => {
        if (e.code === 'Escape') {
        this.props.onClose()
        }

    }
 handleBackdropClick = e => {
            
     if (e.currentTarget === e.target) {
         this.props.onClose()
     }
}

    render() {
    const { srcImg, tags } = this.props
return createPortal( <Backdrop onClick={this.handleBackdropClick}>
  <ModalDiv className="modal">
    <img src={srcImg}  alt={tags} />
  </ModalDiv>
</Backdrop>, modalRoot)
}
  
}

