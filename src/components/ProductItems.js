import React from 'react';
import { useParams } from 'react-router-dom';
import shoeStore  from '../shoeStores.json';

const ProductItems = () => {
    const { id } = useParams();
    const shoe = shoeStore[id];

    if(!shoe) return <h3>Product not found</h3>

    console.log(shoe);
  return (
      <>
        <h1 style={{textAlign: 'center'}} >Item Detail</h1>
        <div className='productitem' >
            <h2>{shoe.title}</h2>
            <img src={shoe.img} alt={shoe.title} />
        </div>
      </>
  )
}

export default ProductItems;