import React from 'react'
import "./navbar.css"
import {Link} from 'react-router-dom';

const navbar = () => {
  return (
    <>
		<div className='navbar'>
		<Link to="/" className='box'>Home</Link>
			<Link to="/about_us" className='box'>About Us</Link>
			<Link to="/faq" className='box'>FAQ</Link>
		</div>
    </>
  )
}

export default navbar