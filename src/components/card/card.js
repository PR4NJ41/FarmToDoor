import "./card.css";
import React from "react";

const Card = ({ name, add, cost, seller }) => {
	console.log(name, add);
	return (
		<div>
			<div className="mainCard ">
				<img src={add} className="imgCard " alt="cat_img"></img>
				<div className="txt1Card ">{name}</div>
				<div className="txt2Card ">{seller}</div>
				<div className="rowCard ">
					<div className="txt3Card ">{cost + "₹"}<div className="txt4Card ">/per kg</div></div>
					<img
						alt="abc"
						className="iconCard"
						src="/images/add.svg"
					></img>
				</div>
			</div>
		</div>
	);
};

export default Card;
