import React from "react";
import "./index.css"
import Navbar from "../../components/navbar/navbar";
import {Link} from 'react-router-dom';

const index = () => {
  return (
	<>
		<Navbar/>
		<div className="main">
			<h1 className="landingPageHeading">Locally Produced<br/>
			Delivered Direct To<br/>
			Your Door</h1>
			<div className='searchBoxContainer'>
				<input className="searchBox" placeholder="Enter address to find nearby shops"/>
				<Link to="/searchpage"><button className="searchBoxButton" >Shop Now</button></Link>
			</div>
			<div className="scooterBox">
				<img className="img1" src="/images/ellipse.svg" alt="Ellipse" />
				<img className="scooter" src="/images/scooter3.svg" alt="Scooter" /> 
			</div>

		</div>
	</>
  )
}

export default index