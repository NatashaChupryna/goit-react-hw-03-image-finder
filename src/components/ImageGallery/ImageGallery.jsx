// import { PureComponent } from 'react';

// export class ImageGallery extends PureComponent {

// // componentDidMount(prevProps, prevState){
// // if(prevProps.searchQuery !== this.props.searchQuery){
// //    console.log('change')
// // }
// // }

//   render() {
//    console.log('props of image gallery', this.props)
 
//     return (
//       <ul>
//          {this.props.images.map(<li>{images.id}</li>)}
//       </ul>
//     );
//   }
// }

export const ImageGallery = (images) => {
   console.log(typeof images)
   return (
      
      <ul>
         {images.map(<li>{images.id}</li>)}
      </ul>
    );
}
