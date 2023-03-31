import "./cart_card.css";
import React from "react";

const Card = ({ name, add, cost, quantity }) => {
	// console.log(name, add);
	var itemcost=cost*quantity;
	return (
		<div className="rowCartCard">
			<div className="imgCartCard"><img src={add}></img><p className="nameCartCard">{name}</p></div>
			<div className="row2CartCard">
			<div className="minusbtnItem">-</div>
			<text className="quantityCartCard">{quantity}</text>
			<div className="plusbtnItem">+</div>
			</div>
			<text className="priceCartCard">{itemcost}</text>
		</div>
	);
};

export default Card;
