import React from "react";
import "./index.css"
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/cart_card/cart_card";
import cart_data from "./../../cart.json";

const index = () => {
  return (
	<>
		<Navbar/>
		<div className="main2">
			<text className="MyCart">My Cart</text>
            <div className="line"></div>
			<div className="rowhead">
			<text className="col">Product Name</text> 
			<text className="col">Quantity</text>
			<text className="col">Price</text>
			</div>
			<div className="line"></div>
			<div className="cart_items">
                {cart_data.map((element)=> (
					<Card name={element.name} add={element.add} cost={element.cost} quantity={element.quantity}/>
				))}
			</div>
		</div>

	</>
  )
}

export default index