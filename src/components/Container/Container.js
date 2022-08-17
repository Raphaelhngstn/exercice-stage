import React from 'react';
import Card from '../Card/Card';
import './container.scss';

const Container = ({ data }) => {

  return (
    <div className='max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4'>
      {
        data.map((url,index) => {
          return <Card key={index} data={url} />
        })
      }
    </div>
  )
}

export default Container;