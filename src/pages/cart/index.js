import React from "react";
import "./index.css"
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/cart_card/cart_card";
import cart_data from "./../../cart.json";

const index = () => {
	var s=0;
	cart_data.map((element)=>{
		s+=Number(element.cost);
	})
  return (
	<>
		<Navbar/>
		<div className="mainSearch">
			<text className="txtCart">My Cart</text>
            <div className="lineCart"></div>
			<div className="rowCart">
			<text className="colCart">Product Name</text> 
			<text className="colCart">Quantity</text>
			<text className="colCart">Price</text>
			</div>
			<div className="lineCart"></div>
			<div className="itemsCart">
                {cart_data.map((element)=> (
					<Card name={element.name} add={element.add} cost={element.cost} quantity={element.quantity}/>
				))}
			</div>
			<div className="rowCart">
				<div className="CheckoutBtnCart">Checkout</div>
				<div className="CheckoutBtnCart">Continue Shopping</div>
				<div className="colCart">Total:-</div>
				<div className="colCart">{s}</div>
			</div>
		</div>

	</>
  )
}

export default index