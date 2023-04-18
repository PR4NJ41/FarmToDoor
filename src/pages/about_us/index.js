import React from "react";
import "./index.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const about = () => {
	return (
		<div>
			<div className="mainAboutUs">
				<div className="blackAboutUs">
					<Navbar className="nave" bgcolor="#908f8f25" color="white"/>
					<div className="headingAboutUs">ABOUT US</div>
					<p className="paraAboutUs">
						At FarmToDoor, we believe that everyone deserves access to fresh, healthy food. 
						That's why we connect buyers with local farmers, making it easy to purchase the 
						freshest, highest-quality produce. Our online platform allows you to browse a wide
						 variety of fruits, vegetables, cereals, and more, all grown by small farmers in your
						  area. By buying from FarmToDoor, you are not only getting delicious, nutritious food,
						   but you are also supporting your local community and building a more sustainable food system.
					</p>
					<div className="whyAboutUs">WHY US?</div>
					<div className="rowAboutUs">
						<img
							src="/images/farmer.jpeg"
							className="imgAboutUs"
						></img>
						<p className="paraAboutUs">
						We are also committed to helping small farmers increase their profits and build a better life for
						 themselves and their families. Many farmers struggle to make ends meet due to unfair prices and 
						 lack of access to markets. By selling their harvest through FarmToDoor, farmers can reach a wider 
						 audience and earn a fair price for their hard work. This helps to support local economies, reduce
						  food waste, and promote sustainable agriculture practices. Together, we can make a difference for 
						  farmers and consumers alike. Thank you for choosing FarmToDoor!
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default about;
