import { PureComponent } from 'react';
import { Toaster } from 'react-hot-toast';
import { StyledApp } from './App.styled';
import { SearchBar } from './Searchbar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImage } from './API/Api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends PureComponent {
  state = {
    isLoading: false,
    images: [],
    error: null,
    page: 1,
    total: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchQuery !== this.state.searchQuery
    ) {
      try {
        const images = await getImage(this.state.searchQuery, this.state.page);
   if(!images){
    throw new Error()
   }
        this.setState(prevState => ({
          images: prevState.images.concat(images),
          isLoading: true,
          error: null,
          total: images.totalHits,
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = query => {
    this.setState({ searchQuery: query,
    images: [],
  page: 1 });
  };

  onLoadButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <StyledApp>
        <SearchBar onSubmit={this.handleFormSubmit} isLoading={this.state.isLoading}></SearchBar>

        {this.state.isLoading && <Loader></Loader>}


        {this.state.images && (
          <ImageGallery
            images={this.state.images}
            onModalClick={this.toggleModal}
          ></ImageGallery>
        )}

        {this.state.images.length > 0 && (
          <Button
            onClick={this.onLoadButtonClick}
            // isLoading={this.state.isLoading}
          ></Button>
        )}

<Toaster
  position="top-right"
  reverseOrder={false}
/>
      </StyledApp>
    );
  }
}
