import React from "react";
import Item from "../../components/card/item";
import "./index.css";
import Navbar from "../../components/navbar/navbar";
import Card1 from "../../components/categories_card/categories_card";
import Card2 from "../../components/card/card";
import { useState } from "react";
import fruits from "../../data.json";
import { useEffect } from "react";
import categories from "../../categories.json";
import item from "../../components/card/item";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
import Footer from "../../components/footer/footer";

function Index() {
	const [ItemPopup, setItemPopup] = useState(false);
	const [ItemNo, setItemNo] = useState("Pranjal");
	const [ItemSeller, setItemSeller] = useState("");
	const [ItemPrice, setItemPrice] = useState("");
	const [ItemImgPath, setItemImgPath] = useState("");
	const [ItemDes, setItemDes] = useState("");

	const prodCollectionRef = collection(db, "Products");
	const categCollectionRef = collection(db, "Categories");
	const q = query(categCollectionRef, orderBy("name"));
	const q2 = query(prodCollectionRef, orderBy("name"));
	const [Prod, setProd] = useState([]);
	const [Categ, setCateg] = useState([]);

	useEffect(() => {
		const getProd = async () => {
			const data = await getDocs(q2);
			setProd(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			console.log(data);
		};
		const getCateg = async () => {
			const cdata = await getDocs(q);
			setCateg(
				cdata.docs.map((cdoc) => ({ ...cdoc.data(), id: cdoc.id }))
			);
			console.log(cdata);
		};
		getCateg();
		getProd();
	}, []);

	return (
		<div>
			<Navbar bgcolor="#6ab860" />
			<div className="mainSearch">
				<div className="box1Search"></div>
				<div className="boxCatSearch">
					<div className="txtSearch">Categories</div>
					<div className="box3Search">
						{Categ.map((item) => (
							<Card1 name={item.name} add={item.token2} />
						))}
					</div>
				</div>

				<div className="boxProSearch">
					<div className="txtSearch">Popular Products</div>
					<div className="box3Search">
						{Prod.map((item) => (
							<div
								onClick={() => {
									setItemPopup(!ItemPopup);
									setItemNo(item.name);
									setItemSeller(item.seller);
									setItemPrice(item.cost);
									setItemImgPath(item.token);
									setItemDes(item.description);
								}}
							>
								<Card2
									name={item.name}
									add={item.token}
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
					itemFrom={ItemSeller}
					itemPrice={ItemPrice}
					itemImgPath={ItemImgPath}
					itemDes={ItemDes}
					// itemPath={ItemPat2}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default Index;
