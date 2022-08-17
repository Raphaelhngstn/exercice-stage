import './App.css';
import { getFirstData } from './services/getFirstData';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Container from './components/Container/Container';


function App() {

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getData = async () => {
    const response = await getFirstData();
    if (response.status === 200){
      let imageResults = [];

    for (let index = 0; index < response.data.hits.length; index++) {
      imageResults.push(response.data.hits[index].webformatURL)
    }
    setData(imageResults);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <SearchBar 
        inputValue={inputValue}
        setInputValue={setInputValue}
        setData={setData}
      />
      <Container 
        data={data}
      />
    </div>
  );
}

export default App;
