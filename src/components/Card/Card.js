import React from 'react';

const Card = ({ data }) => {
  return (
    <div className='rounded-lg '>
        <img className='rounded-lg border border-white-500 card' src={data} />
    </div>
    
  )
}


export default Card;