import React, { useState } from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';


const Search = (props) => {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({
      type: "GET_WEATHER",
      payload: {
        q: input
      }
    })
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents the default action (e.g., form submission)
      handleEnter();
    }
  };

  const handleEnter = () => {
    handleSubmit();
    setInput("")
  };

  return (
    <div className="search">
      <div className="search-wrapper">
        <input
          type="text"
          value={input}
          placeholder="City Name"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />


      </div>
    </div>
  );

};

export default Search;

{/* <Autocomplete
          id="city-autocomplete"
          className='input-autocomplete'
          options={options}
          getOptionLabel={(option) => option.name} // Change this to match your API response structure
          inputValue={input}
          onInputChange={(_, newInputValue) => {
            setInput(newInputValue);
          }}
          renderInput={(params) => (
            <TextField
              className='input'
              {...params}
              label="City Name"
              variant="outlined"
              // fullWidth
              onChange={(e) => setInput(e.target.value)}
            />
          )}
        /> */}