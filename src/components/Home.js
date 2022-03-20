import React from 'react';
import shoeStore from '../shoeStores.json';
import { Link } from 'react-router-dom';

// for (let key in shoeStore) {
//   console.log(key);
// }

// const shoes = (Object.entries(shoeStore))
// console.log(shoes);


const Home = () => {

  return (
    <>
            <h1 style={{textAlign: 'center'}} >Welcome to Online Shoe Store</h1>
      <div className='products' >
      {Object.keys(shoeStore).map(shoe => {
        return ( 
        <Link className='link' to={`productitems/${shoe}`} key={shoe} >  
          <h2>{shoeStore[shoe].title}</h2>
          <img src={shoeStore[shoe].img}  height={110} alt={shoeStore[shoe].title} />
        </Link>
        )
      })}
         
         </div>
    </>
  )
}

export default Home