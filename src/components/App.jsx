import { PureComponent } from 'react';
import { Toaster } from 'react-hot-toast';
import { StyledApp } from './App.styled';
import { SearchBar } from './Searchbar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImage } from './API/Api';
// import { Modal } from './Modal/Modal';

export class App extends PureComponent {
  state = {
    searchQuery: '',
    showModal: false,
    isLoading: false,
    images: [{ id: 1 }, { id: 2 }],
    error: null,
    page: 1,
    total: 0,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      try {
        const images = getImage(this.state.searchQuery, this.state.page);
        this.setState({
          images,
          isLoading: true,
          error: null,
          total: images.totalHits,
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = query => {
    this.setState({ searcQuery: query });
  };

  // Модалка
  // showNodal : false, in state
  // toggleModal = () => {
  //   this.setState(prevState => ({
  //     showModal: !prevState.showModal,
  //   }));
  // };

  render() {
    console.log('App state images-', typeof this.state.images) 
    return (
      <StyledApp>
        <SearchBar onSubmit={this.handleFormSubmit}></SearchBar>
        {this.state.isLoading && <h1>loading</h1>}
        {this.state.images && (
          <ImageGallery images={this.state.images}></ImageGallery>
        )}
        {/* <button type='button' onClick={this.toggleModal}>open modal</button>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}></Modal>
        )} */}

        <Toaster />
      </StyledApp>
    );
  }
}
