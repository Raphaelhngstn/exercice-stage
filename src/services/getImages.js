import axios from "axios";

const baseURL = "https://pixabay.com/api"
const key = "17555297-46a99d3dc7abf78679ec9e640"

export async function getImages(inputValue, page) {
    const url = `${baseURL}/?key=${key}&q=${inputValue}&page=${page}&image_type=photo&per_page=9`

    let imageResults = [];

    try {
        const response = await axios.get(url);

        if (response.status === 200){
                
          for (let index = 0; index < response.data.hits.length; index++) {
            imageResults.push(response.data.hits[index].webformatURL)
          }
          
        }

        return imageResults;
        
    } catch (err) {
        return err.response;
    }
}