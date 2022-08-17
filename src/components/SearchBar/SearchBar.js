import React from 'react';
import { getNewData } from '../../services/getNewData';

const SearchBar = ({
    setInputValue, 
    inputValue,
    setData,
}) => {

    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await getNewData(inputValue);
        if(response.status === 200){
            let imageResults = [];

            for (let index = 0; index < response.data.hits.length; index++) {
            imageResults.push(response.data.hits[index].webformatURL)
        }
            setData(imageResults);
        }
        
    }

  return (

    <form onSubmit={handleSubmit}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" strokeWidth="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900  rounded-lg border border-gray-300  green:border-gray-600 dark:placeholder-gray-400 dark:text-black " placeholder="Search" 
        value={inputValue}
        onChange={handleChange}
        required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Search</button>
    </div>
</form>
    
  )
}

export default SearchBar;