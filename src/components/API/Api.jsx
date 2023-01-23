import axios from 'axios';

export async function getImage(query, page) {
    try {
      const response = await axios.get('https://pixabay.com/api/?',{
        params: {
          key: '31663443-8f4004a5a69c11dc368053c6d',
          g : `${query}`,
          page : `${page}`,
          per_page : 12,
          image_type : 'photo',
          orientation : 'horizontal'
        }});
        console.log('data', response.data.hits)
    return response.data.hits;
    
    } catch (error) {
      console.error(error);
    }
  }

  // export default {
  //   getImage
  // }//