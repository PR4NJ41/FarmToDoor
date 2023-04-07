import React from "react";
import "./index.css";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/cart_card/cart_card";
import cart_data from "./../../cart.json";
import { Link } from "react-router-dom";

const index = () => {
	let s = 0;
	for (let i = 0; i < cart_data.length; i++) {
		s += Number(cart_data[i].cost) * Number(cart_data[i].quantity);
	}
	return (
		<>
			<Navbar />
			<div className="mainSearch">
				<div className="txtCart">{localStorage.getItem("userName")}'s Cart</div>
				<div className="lineCart"></div>
				<div className="rowCart">
					<text className="colCart">Product Name</text>
					<text className="colCart">Quantity</text>
					<text className="colCart">Price</text>
				</div>
				<div className="lineCart"></div>
				<div className="itemsCart">
					{cart_data.map((element) => (
						<Card
							name={element.name}
							add={element.add}
							cost={element.cost}
							quantity={element.quantity}
						/>
					))}
				</div>
				<div className="rowCart1">
					<div className="colCart2">Total {"➤"} ₹</div>
					<div className="colCart2">{s}</div>
				</div>
				<div className="rowCart">
					<Link to="/buy" className="boxNavbar">
						<div className="discCart">Continue Shopping</div>
					</Link>
					<Link to="/buy" className="boxNavbar">
						<div className="discCart">Checkout</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default index;
