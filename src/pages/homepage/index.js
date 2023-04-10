import React from "react";
import "./index.css";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";

const index = () => {
	return (
		<>
			<Navbar bgcolor="#6ab860"/>
			
			<div className="mainHome">
				<div className="cycleHome"><img src="/images/bicycle-women.svg"></img></div>
				<div className="berryHome"><img src="/images/berry.svg"></img></div>
				<div className="leafHome"><img src="/images/leaf.svg"></img></div>
				<div className="appleHome"><img src="/images/apple.svg"></img></div>
				<h1 className="headingHome">
					Locally Produced
					<br />
					Delivered Direct To
					<br />
					Your Door
				</h1>
				
				<div className="searchBoxContainerHome">
					<input
						className="searchBoxHome"
						placeholder="Enter your pincode to start buying"
						type="number"
					/>
					<Link to="/buy">
						<button className="searchBoxButtonHome">
							Shop Now
						</button>
					</Link>
				</div>
				<div className="scooterBoxHome">
					
				 <img className="imgHome" src="/images/ellipse2.svg" alt="Ellipse" />
 				{/* <img className="scooterHome" src="/images/scooter3.svg" alt="Scooter" />   */}
				
					{/* <img
							className="imgHome"
							src="/images/final.svg"
							alt="scooter"
						/> */}
					{/* <svg>
						<image xlinkHref="/images/final.svg"></image>
					</svg> */}
					<Footer/>
				</div>
			</div>
			
		</>
	);
};

export default index;
