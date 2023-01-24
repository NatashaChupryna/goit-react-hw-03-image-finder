
import { PureComponent } from 'react';
import { toast } from 'react-hot-toast';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput
} from './SearchBar.styled';


export class SearchBar extends PureComponent{
  state = {
    searchQuery : ''
  }
 
 handleQueryChange = (event) =>{
this.setState({searchQuery : event.currentTarget.value.toLowerCase()});
if(this.state.searchQuery.trim() === ''){
  toast.error('Please, enter your query', {
    duration: 2000,})
    return
  }} 

handleSubmit = (event) => {
event.preventDefault();
this.props.onSubmit(this.state.searchQuery);
event.target.reset()
// this.setState({searchQuery: ''})
}

// resetForm = () => {
//   this.setState({
//     searchQuery : ''
//   })

// }

  render(){
    return (<Searchbar>
      <SearchForm onSubmit={this.handleSubmit}>
        <SearchFormButton type="submit" 
        disabled={this.props.isLoading}>
          &#128269;
        </SearchFormButton>
  
        <SearchFormInput
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
          onChange={this.handleQueryChange}
        />
      </SearchForm>
    </Searchbar>)
  }
}


