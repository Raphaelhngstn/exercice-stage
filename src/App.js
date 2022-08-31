import './App.css';
import { getImages } from './services/getImages';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Container from './components/Container/Container';


/**
* Main entry point
*/

function App() {

  /**
   * Initiate states variables
   */

  const [arrayOfImages, setArrayOfImages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  /**
   * Fetch initial images
   */

  const loadImages = async (value) => {
    const images = await getImages(value, pageNumber);
    setArrayOfImages(images);
  }

  /**
   * When the component is mounted
   */

  useEffect(() => {
    loadImages(inputValue, pageNumber);
  }, [])

  return (
    <div className="App min-h-screen bg-green-900 ">
      <SearchBar
        setArrayOfImages={setArrayOfImages}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <Container 
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        arrayOfImages={arrayOfImages}
        setArrayOfImages={setArrayOfImages}
        inputValue={inputValue}
      />
    </div>
  );
}

export default App;
