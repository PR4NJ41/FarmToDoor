import React from "react";
import Item from "../../components/card/item";
import "./index.css";
import Navbar from "../../components/navbar/navbar";
import Card1 from "../../components/categories_card/categories_card";
import Card2 from "../../components/card/card";
import { useState } from "react";
import fruits from "./../../data.json";
import categories from "./../../categories.json";
import item from "../../components/card/item";

function Index() {
	const [ItemPopup, setItemPopup] = useState(false);
	const [ItemNo, setItemNo] = useState("Pranjal");
	let itemNa ="";
	return (
		<>
			<Navbar />
			<div className="main2">
				
				<div className="box1"></div>
				<div className="box2cat">
					<div className="text1">Categories</div>
					<div className="box3">
						{categories.map((item) => (
							<Card1 name={item.name} add={item.add} />
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
									itemNa = item.name;
									setItemNo(itemNa);
									console.log(">>>>>>>>>>>>>>>>>", itemNa);
								}}
							>
								<Card2
									name={item.name}
									add={item.add}
									seller={item.seller}
									cost={item.cost}
								/>
							</div>
						))}
					</div>
				</div>
									
				<Item
					id="itmes"
					trigger={ItemPopup}
					setTrigger={setItemPopup}
					itemName={ItemNo}
					itemFrom={item.seller}
					itemPrice={item.cost}
					itemImgPath={item.add}
				/>
			</div>
		</>
	);
}

export default Index;
