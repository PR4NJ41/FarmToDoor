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
	return (
		<>
			<Navbar />
			<div className="mainSearch">
				<div className="box1Search"></div>
				<div className="boxCatSearch">
					<div className="txtSearch">Categories</div>
					<div className="box3Search">
						{categories.map((item) => (
							<Card1 name={item.name} add={item.add} />
						))}
					</div>
				</div>
				<div className="boxProSearch">
					<div className="txtSearch">Popular Products</div>
					<div className="box3Search">
						{fruits.map((item) => (
							<div
								onClick={() => {
									setItemPopup(!ItemPopup);

									console.log("ok", item.name);
								}}
							>

								<Card2
									name={item.name}
									add={item.add}
									seller={item.seller}
									cost={item.cost} />

								<Item
									id="itmes"
									trigger={ItemPopup}
									setTrigger={setItemPopup}
									itemName={item.name}
									itemFrom={item.seller}
									itemPrice={item.cost}
									itemImgPath={item.add}
								/>

							</div>
						))}
					</div>
				</div>

			</div>
		</>
	);
}

export default Index;
