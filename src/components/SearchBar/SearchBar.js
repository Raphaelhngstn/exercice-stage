import React from 'react';

const SearchBar = ({
    setInputValue, 
    inputValue
}) => {


    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }

  return (
    <form>
        <input 
        type="text"
        value={inputValue}
        onChange={handleChange}
        />
    </form>
    
  )
}

export default SearchBar;