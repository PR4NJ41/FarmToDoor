import React from "react";
import "./index.css"
import Navbar from "../../components/navbar/navbar";
import {Link} from 'react-router-dom';

const index = () => {
  return (
	<>
		<Navbar/>
		<div className="mainHome">
			<h1 className="headingHome">Locally Produced<br/>
			Delivered Direct To<br/>
			Your Door</h1>
			<div className='searchBoxContainerHome'>
				<input className="searchBoxHome" placeholder="Enter address to find nearby shops"/>
				<Link to="/searchpage"><button className="searchBoxButtonHome" >Shop Now</button></Link>
			</div>
			<div className="scooterBoxHome">
				<img className="imgHome" src="/images/ellipse.svg" alt="Ellipse" />
				<img className="scooterHome" src="/images/scooter3.svg" alt="Scooter" /> 
			</div>

		</div>
	</>
  )
}

export default index