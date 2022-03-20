import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav' >
        <Link className='link' to='/' >Home</Link>
        <Link className='link' to='/about' >About</Link>
        <Link className='link' to='/Contact' >Contact</Link>
    </div>
  )
}

export default Navbar