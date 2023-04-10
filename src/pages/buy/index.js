import React from "react";
import Item from "../../components/card/item";
import "./index.css";
import Navbar from "../../components/navbar/navbar";
import Card1 from "../../components/categories_card/categories_card";
import Card2 from "../../components/card/card";
import { useState } from "react";
// import fruits from "../../data.json";
import { useEffect } from "react";
// import categories from "../../categories.json";
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
    
	const [Category,setCategory] = useState("");
	const prodCollectionRef = collection(db, "Products");
	const categCollectionRef = collection(db, "Categories");


	const q = query(categCollectionRef,orderBy("name"))
	const q2 = query(prodCollectionRef,orderBy("name"))
	const [Prod,setProd] = useState([]); 
	const [Prod2,setProd2]= useState([]);
	const [Categ,setCateg] = useState([]); 
	const [pranjal,setPranjal] = useState([]);
	const[SearchKeyword,setSearchKeyword] = useState("");


	const product = {
		id: 'kela',
		name: 'Fresh Foam 1080v9',
		brand: 'New Balance',
		color: 'Neon Emerald with Dark Neptune',
		size: 'US 9',
		width: 'B - Standard',
		sku: 'W1080LN9',
		price: 15000
	}
    
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


	}, [])
	const getProd2 = async(Category) => {
		setProd2(Prod.filter(doc=>doc.category===Category));
	}
	const getProd21=async(name) => {
		setProd2(Prod.filter(doc=>doc.name.toLowerCase()===name.toLowerCase()));
	}
	// console.log(ItemPrice);
	return (
		<div>
			<Navbar bgcolor="#6ab860"/>
			<div className="mainSearch">
				<div className="box1Search"></div>
				<div className="rowBuy1"><img className="imgSearchBuy" src="/images/search.svg"></img>
				<input className="searchBuy" type="text" 
				onChange={(e)=>
					{setSearchKeyword(e.target.value);
				       getProd21(e.target.value);
				}}></input></div>
				<div className="boxCatSearch">
					<div className="txtSearch">Categories</div>
					<div className="box3Search">
						{Categ.map((item) => (

							<div 
							 onClick={()=>{
								setCategory(item.name);
								getProd2(item.name);
								
							 }}>
								<Card1 name={item.name} add={item.token2}/>
								</div>

						))}
					</div>
				</div>

				<div className="boxProSearch">
					<div className="txtSearch">Popular Products</div>
					<div className="box3Search">
						{(((Category!="" || SearchKeyword!=""))?Prod2:Prod).map((item) => (
							<div
								onClick={() => {
									setItemPopup(!ItemPopup);
									setItemNo(item.name);
									setItemSeller(item.seller);
									setItemPrice(item.cost);
									setItemImgPath(item.token);
									setItemDes(item.description);
									setPranjal(item);
								}}
							>
								<Card2
									name={item.name}
									add={item.token}
									seller={item.seller}
									cost={item.price}
									item={item}
									id = {item.cost}
								/>
							</div>

						))}
						<Footer/>
					</div>
				</div>

				<Item
					id={item.cost}
					trigger={ItemPopup}
					setTrigger={setItemPopup}
					itemName={ItemNo}
					itemFrom={ItemSeller}
					itemPrice={ItemPrice}
					itemImgPath={ItemImgPath}
					itemDes={ItemDes}
					master = {pranjal}
					quantity={"1"}
					// itemPath={ItemPat2}
				/>
			</div>
		</div>
	);
}

export default Index;
