import React, {useState} from "react";
import "./item.css";
import {useCart} from "react-use-cart"

function Item(props){
	const [Quantity,setQuantity]=useState("1");
	const increase =()=>{
       setQuantity(Number(Quantity)+1);
	   
	}
	const decrease = () =>{
		setQuantity((Number(Quantity)-1>1)?Number(Quantity)-1:1);
	}
	const { addItem } = useCart();
	const addToCart = () =>{
		alert("Item added to cart");
        addItem(props.master,Number(Quantity));
    }
	console.log(props.master.itemPrice);


	return props.trigger ? (
		<div className="mainItem">
			<div className="whiteBoxItem">
				<div className="headingItem">{props.itemName}</div>
				<div className="crossItem" onClick={() => props.setTrigger(false)}>X</div>
				<div className="subHeadingItem">{props.itemFrom}</div>
				<div className="middleItem">
					<img src={props.itemImgPath} className="imgItem" />
					<div className="rightItem">
						<div className="priceItem">Price : {props.itemPrice}</div>
						<div className="discItem">Description</div>
						<div className="paraItem">
							{props.itemDes}
						</div>
					</div>
				</div>
				<div className="lastItem">
					<div className="leftButtonItem">
						<div className="subleftItem">
						<div className="minusbtnItem" onClick={()=>decrease()}>-</div>
						{Quantity} kg
						<div className="plusbtnItem" onClick={()=>increase()}>+</div>
						</div>
						
					
					</div>
					<div className="rightButtonItem">
						<button
						onClick={()=> addToCart()}
							className="closeBtnItem"
						>
							Add to Cart
						</button>
					</div>
				</div>
				{/*
				 <div>Name {props.itemName}</div>
 				<div>Seller {props.itemFrom}</div>
 				<div>Price {props.itemPrice}</div>
 				<div>Image {props.itemImgPath}</div> 
				*/}
			</div>
		</div>
	) : (
		""
	);
}


export default Item;