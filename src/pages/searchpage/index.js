import React from "react";
import Item from "../../components/card/item";
import "./index.css";
import Navbar from "../../components/navbar/navbar";
import Card1 from "../../components/categories_card/categories_card";
import Card2 from "../../components/card/card";
import { useState } from "react";

function Index() {
	const [ItemPopup, setItemPopup] = useState(false);
	const fruits = {
		name: "Strawberry",
		seller: "Swadesh farm h bhai",
		cost: "2000",
	};
	return (
		<>
			<Navbar />
			<div className="main2">
				<div className="box1"></div>
				<div className="box2cat">
					<div className="text1">Categories</div>
					<div className="box3">
						<Card1 name="fruit" add={"/images/fruit.png"} />
					</div>
				</div>
				<div className="box2pro">
					<div className="text1">Popular Products</div>
					<div className="box3">
						<div
							onClick={() => {
								setItemPopup(!ItemPopup);
								console.log("ok");
							}}
						>
							<Card2
								name="Strawberry"
								add={"/images/strawberry.png"}
								seller="Swadesh farm"
								cost="2000"
							/>
						</div>
					</div>
				</div>
				<div className="backDrop">
					<div className="popupss">
						<Item
							trigger={true}
							itemName={fruits.name}
							itemFrom={fruits.seller}
							itemPrice={fruits.cost}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Index;
