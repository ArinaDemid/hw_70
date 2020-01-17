import React, {useState, Fragment, useEffect} from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import Item from '../../components/Items/Item/Item';

let movieList = [];
// let movieAct = null;

const TVShowInput = (props) => {

  const valueEntered = null;
  const [valueFromInput, setValueFromInput] = useState(valueEntered);
  const valueChanged = (value) => {
    // console.log(value);
    // movieAct = value;
    setValueFromInput(value);
    fetchData(value);
    
    // console.log(valueFromInput);
  };

  const fetchData = async (value) => {
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${value}`);
    // console.log(response.data)
    const movies = [...response.data];
    // movieList = [];
    movies.forEach(movie => {
      movieList.push({name: movie.show.name, key: movie.show.id});
    });
    console.log(movieList);
  };


  useEffect(() => {
    // fetchData(valueFromInput);
    movieList = [];
  }, [valueFromInput]);

  return (
    <Fragment>
      <Form>
        <FormGroup>
          <Label for="text">Search for TV Shows</Label>
          <Input type="text" name="text" id="text" autoComplete="off" placeholder="Enter name of movie" 
            onChange={(event) => valueChanged(event.target.value)}/>
        </FormGroup>
      </Form>
      { movieList.length !==0 ? 
        <ul style={{listStyleType: 'none', border: '1px solid grey'}}>
          {movieList.map(movie => (
            <Item key={movie.key} name={movie.name}/>
          ))}
        </ul>
        : null 
      }
    </Fragment>
  );
}

export default TVShowInput;