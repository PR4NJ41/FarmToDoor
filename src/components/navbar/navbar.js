import React from 'react'
import "./navbar.css"
import {Link} from 'react-router-dom';

const navbar = () => {
  return (
    <>
		<div className='mainNavbar'>
		<Link to="/" className='boxNavbar'>Home</Link>
			<Link to="/about_us" className='boxNavbar'>About Us</Link>
			<Link to="/faq" className='boxNavbar'>FAQ</Link>
		</div>
    </>
  )
}

export default navbar