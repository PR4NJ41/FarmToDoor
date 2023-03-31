import "./cart_card.css";
import React from "react";

const Card = ({ name, add, cost, quantity }) => {
	console.log(name, add);
	var itemcost=cost*quantity;
	return (
		<div className="rowCartCard">
			<img classname="imgCartCard" src={add}></img>
			<p className="nameCartCard">{name}</p>
			<text className="quantityCartCard">{quantity}</text>
			<text className="priceCartCard">{itemcost}</text>
		</div>
	);
};

export default Card;
