import React from "react";
import Item from "../../components/card/item";
import "./index.css";
import Navbar from "../../components/navbar/navbar";
import Card1 from "../../components/categories_card/categories_card";
import Card2 from "../../components/card/card";
import { useState } from "react";
import fruits from "./../../data.json";
import categories from "./../../categories.json";

function Index() {
	const [ItemPopup, setItemPopup] = useState(false);
	// const fruits = {
	// 	name: "Strawberry",
	// 	seller: "Swadesh farm h bhai",
	// 	cost: "2000",
	// 	add: "/images/strawberry.png",
	// };
	return (
		<>
			<Navbar />
			<div className="main2">
				<div className="box1"></div>
				<div className="box2cat">
					<div className="text1">Categories</div>
					<div className="box3">
					{categories.map((item)=>(
						<Card1 name={item.name} add={item.add}/>
					))}
					</div>
				</div>
				<div className="box2pro">
					<div className="text1">Popular Products</div>
					<div className="box3">
					{fruits.map((item) => (
						<div
							onClick={() => {
								setItemPopup(!ItemPopup);
								console.log("ok");
							}}
						>
							
								<Card2
									name={item.name}
									add={item.add}
									seller={item.seller}
									cost={item.cost} />
							
						</div>
						))}
					</div>
				</div>
				 {/*
				  <div className="backDrop">
  					<div className="popupss">  
				 */}
						<Item
							id = "itmes"
							trigger={ItemPopup}
							setTrigger = {setItemPopup}
							itemName={fruits.name}
							itemFrom={fruits.seller}
							itemPrice={fruits.cost}
							itemImgPath={fruits.path}
						/>
					</div>
				 {/*
				  </div>
  			</div> 
				 */} 
		</>
	);
}

export default Index;
