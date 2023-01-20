import { PureComponent } from 'react';
import { StyledApp } from './App.styled';
import { SearchBar } from './Searchbar/SearchBar';
import API from './API/Api';
// import { Modal } from './Modal/Modal';

export class App extends PureComponent {
  state = {
    searcQuery: '',
    showModal: false,
    isLoading: false,
    images: '',
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const images = API.getImage('dog');
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
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
    return (
      <StyledApp>
        <SearchBar onSubmit={this.handleFormSubmit}></SearchBar>
        {this.state.isLoading && <h1>loading</h1>}
        {this.state.images && <div>done</div>}

        {/* <button type='button' onClick={this.toggleModal}>open modal</button>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}></Modal>
        )} */}
      </StyledApp>
    );
  }
}
