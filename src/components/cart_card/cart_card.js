import "./cart_card.css";
import React from "react";

const Card = ({ name, add, cost, quantity }) => {
	console.log(name, add);
	var itemcost=cost*quantity;
	return (
		<div className="rowcart">
			<img classname="item_img" src={add}></img>
			<p className="item_name">{name}</p>
			<text className="item_quantity">{quantity}</text>
			<text className="item_price">{itemcost}</text>
		</div>
	);
};

export default Card;
