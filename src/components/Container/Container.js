import React from 'react';
import Card from '../Card/Card';
import { getImages } from '../../services/getImages';

/**
 * Component that contains a grid of images
 */

const Container = ({ 
  arrayOfImages,
  setArrayOfImages,
  setPageNumber,
  pageNumber,
  inputValue 
}) => {

  const handleClick = async () => { 
    const images = await getImages(inputValue, pageNumber+1);
    /**
     * Add new images to the old board
     */
    setArrayOfImages(arrayOfImages.concat(images));
    /**
     * Retrieving the new image page
     */
    setPageNumber(pageNumber+1);
  }

  return (

    /**
     * The button "More Images" is displayed only when we have results"
     */
    <>
      <div className='mx-auto px-8 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
          arrayOfImages.map((image,index) => {
            return <Card key={index} image={image} />
          })
        }
      </div>
      {
        arrayOfImages.length ?
        <div className='mx-auto grid w-48 mt-6 py-4'>
        <button
          onClick={handleClick} 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">
          More images
        </button>
      </div>
      :
      <div class="text-white px-6 py-4 border rounded relative mb-4 bg-red-500">
        <span class="text-xl inline-block mr-5 align-middle">
        <i class="fas fa-bell" />
        </span>
        <span class="inline-block align-middle mr-8">
        <b>Sorry there is no images corresponding to your request !</b> 
        </span>
      </div>
      }
      
    </>
  )
}

export default Container;