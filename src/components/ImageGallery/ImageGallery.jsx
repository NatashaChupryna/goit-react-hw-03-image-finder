import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';



export const ImageGallery = props => {
  const { images, error } = props;
  return (
    <div>
      {props.error && <h2>{' Please try again'}</h2>}

      {images && (
        <List>
          {images.map(item => (
            <ImageGalleryItem key={item.id} item={item} />
          ))}
        </List>
      )}
    </div>
  );
};
