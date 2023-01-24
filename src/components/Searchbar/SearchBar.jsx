import { PureComponent } from 'react';
import { toast } from 'react-hot-toast';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBar.styled';

export class SearchBar extends PureComponent {
  state = {
    searchQuery: '',
  };

  handleQueryChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    if (this.state.searchQuery === '') {
      toast.error('Please, enter your query', {
        duration: 2000,
      });
      return;
    }

    // this.setState({searchQuery: ''})
    event.target.reset();
  };

  // resetForm = () => {
  //   this.setState({
  //     searchQuery : ''
  //   })

  // }
  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            &#128269;
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          />
        </SearchForm>
      </Searchbar>
    );
  }
}
