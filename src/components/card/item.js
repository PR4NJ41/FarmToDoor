import React from "react";
import "./item.css";

export default function item(props) {
	return props.trigger ? (
		<div className="mainItem">
			<div className="whiteBoxItem">
				<div className="headingItem">{props.itemName}</div>
				<div className="crossItem" onClick={() => props.setTrigger(false)}>X</div>
				<div className="subHeadingItem">Frome Swadesh farm</div>
				<div className="middleItem">
					<img src={props.itemImgPath} className="imgItem" />
					<div className="rightItem">
						<div className="priceItem">Price : 20₹</div>
						<div className="discItem">Description</div>
						<div className="paraItem">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Perspiciatis dolorum easapiente doloribus
							alias itaque ipsa incidunt deserunt amet quod
							praesentium, hic esse ut similique dolor molestias
							dolore culpa nisi Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Perslor molestias
							dolore culpa nisi
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
							onClick={() => props.setTrigger(false)}
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
