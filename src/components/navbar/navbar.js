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
			<Link to="/faq" className='boxNavbar'>Sell</Link>
			<Link to="/searchpage" className='boxNavbar'><img className="navimg" src="/images/search.svg"></img></Link>
			<Link to="/cart" className='boxNavbar'><img className="navimg" src="/images/cart.svg"></img></Link>
			
		</div>
    </>
  )
}

export default navbar