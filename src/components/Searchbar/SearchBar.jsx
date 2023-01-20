
import { PureComponent } from 'react';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput
} from './SearchBar.styled';


export class SearchBar extends PureComponent{
  state = {
    searcQuery : ''
  }
 
 handleQueryChange = (event) =>{
this.setState({searcQuery : event.currentTarget.value.toLowerCase()})
console.log(event.currentTarget.value)
 } 

handleSubmit = (event) => {
event.preventDefault();
this.props.onSubmit(this.state.searcQuery);
this.setState({
  searcQuery : ''
})
}
  render(){
    return (<Searchbar>
      <SearchForm onSubmit={this.handleSubmit}>
        <SearchFormButton type="submit" >
          <SearchFormLabel>Search</SearchFormLabel>
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


