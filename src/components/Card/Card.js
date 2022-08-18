import React from 'react';

/**
 * Card component to display a single image
 */

const Card = ({ image }) => {
  return (
    <div className='rounded-lg mx-auto '>
        <img 
            className='rounded-lg border object-cover h-48 w-96' 
            src={image} 
        />
    </div>
  )
}

export default Card;