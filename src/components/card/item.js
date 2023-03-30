import React from "react";
import "./item.css";

export default function item(props) {
	return props.trigger ? (
		<div className="mainItem">
			<div className="whiteBox">
				
				<div className="heading">Strawberry</div>
				<div className="cross" onClick={() => props.setTrigger(false)}>X</div>
				<div className="subHeading">Frome Swadesh farm</div>
				<div className="middle">
					<img src={props.itemImgPath} className="itemImage" />
					<div className="right">
						<div className="price">Price : 20₹</div>
						<div className="disc">Description</div>
						<div className="para">
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
				<div className="last">
					<div className="leftButton">
						<div className="subleft">
						<div className="minusbtn">-</div>
						500g
						<div className="plusbtn">+</div>
						</div>
						
					
					</div>
					<div className="rightButton">
						<button
							onClick={() => props.setTrigger(false)}
							className="closeBtn"
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
