import React from "react";
import "./index.css";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import { useCart } from 'react-use-cart';

function Index(){
	const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
	
	return (
		<div className="mainCart">
			<Navbar bgcolor="#6ab860"/>
			<div className="mainSearch">
				<div className="txtCart">{localStorage.getItem("userName")}'s Cart</div>
				<div className="lineCart"></div>
				<div className="rowCart">
					<text className="colCart">Product Name</text>
					<text className="colCart">Quantity</text>
					<text className="colCart">Price (per kg)</text>
				</div>
				<div className="lineCart"></div>
				<div className="itemsCart">
					{items.map((element,index) => (
						<div className="rowCartCard">
							<div className="imgCartCard"><img src={element.token}></img><p className="nameCartCard2">{element.name}</p></div>
							<div className="row2CartCard">
							<div className="minusbtnItem" onClick={()=> updateItemQuantity(element.id, element.quantity - 1)}>-</div>
							<text className="quantityCartCard">{element.quantity}</text>
							<div className="plusbtnItem" onClick={()=> updateItemQuantity(element.id, element.quantity + 1)}>+</div>
							</div>
							<text className="priceCartCard" >{element.price}</text>
							<div className="crossCartCard" onClick={()=> removeItem(element.id)}><img src="/images/cross.svg"></img></div>
						</div>
					))}
				</div>
				<div className="rowCart1">
					<div className="colCart2">Total {"➤"} ₹</div>
					<div className="colCart2">{cartTotal}</div>
				</div>
				<div className="rowCart">
					<Link className="linkCart" to="/buy">
						<div className="discCart">Continue Shopping</div>
					</Link>
					<Link className="linkCart" to="/buy">
						<div className="discCart">Checkout</div>
					</Link>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Index;
