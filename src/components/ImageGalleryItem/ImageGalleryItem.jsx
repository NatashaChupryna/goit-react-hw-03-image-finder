import { PureComponent } from 'react';
import { ListItem, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';


export class ImageGalleryItem extends PureComponent {
  state = {
    isOpen: false,
  };
  toggleModal = () => {

    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.item;

    return (
      <ListItem>
        <Image
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />

        {this.state.isOpen && (
          <Modal
            srcImg={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
      </ListItem>
    );
  }
}
