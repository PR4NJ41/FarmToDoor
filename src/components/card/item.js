import React from "react";
import "./item.css";
import {useCart} from "react-use-cart"

function Item(props){
	const { addItem } = useCart();
	const addToCart = () =>{
        addItem(props.kela);
    }
	


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
						<div className="minusbtnItem">-</div>
						500g
						<div className="plusbtnItem">+</div>
						</div>
						
					
					</div>
					<div className="rightButtonItem">
						<button
						onClick={()=> addToCart()}
							className="closeBtnItem"
						>
							Add to CartCheck
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