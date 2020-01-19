import React, {useState, Fragment} from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import Item from '../../components/Items/Item/Item';

const TVShowInput = (props) => {

  const valueEntered = null;
  const [valueFromInput, setValueFromInput] = useState(valueEntered);

  let moviesList = null;
  const [movies, setMovies] = useState(moviesList);
  
  const valueChanged = (value) => {
    fetchData(value);
    setValueFromInput(value);
  };

  const fetchData = async (value) => {
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${value}`);

    let movieList = [];
    response.data.forEach(movie => {
      movieList.push({name: movie.show.name, key: movie.show.id});
    });
    setMovies(movieList);
  };

  const closeAutocomplete = () => {
    const movieClean = null;
    setMovies(movieClean);
  };

  return (
    <Fragment>
      <Form>
        <FormGroup>
          <Label for="text">Search for TV Shows</Label>
          <Input type="text" name="text" id="text" autoComplete="off" placeholder="Enter name of movie" 
            onChange={(event) => valueChanged(event.target.value)}/>
        </FormGroup>
      </Form>
      { movies ? 
        <ul style={{listStyleType: 'none', border: '1px solid grey'}}>
          {movies.map(movie => (
            <Item key={movie.key} name={movie.name} id={movie.key} clicked={closeAutocomplete}/>
          ))}
        </ul>
        : null 
      }
    </Fragment>
  );
};

export default TVShowInput;