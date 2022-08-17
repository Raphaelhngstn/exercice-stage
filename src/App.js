import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Container from './components/Container/Container';

function App() {

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getData = async () => {
    const response = await axios.get("https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640&q=yellow+flowers&image_type=photo&pretty=true");
    console.log(response.data);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <SearchBar 
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Container 
        data={data}
      />
    </div>
  );
}

export default App;
