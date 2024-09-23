import { React } from "react";
import "./index.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useState, useEffect } from "react";
import { auth, provider, db, storage } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function sleep(s) {
	return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

const Seller = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [pincode, setPincode] = useState("");
	const [seller, setSeller] = useState("");
	const [category, setCategory] = useState("Fruits");
	const [image, setImage] = useState(null);
	let url2 = "";

	const uploadImage = () => {
		if (image == null) return;
		const imageRef = ref(storage, `Products/${image.name}`);
		uploadBytes(imageRef, image).then((snapshot) => {
			getDownloadURL(snapshot.ref).then((url) => {
				url2 = url;
			});
		});
	};

	const handleSubmit = async (e) => {
		console.log(name);
		e.preventDefault();
		uploadImage();
		await sleep(5);

		try {
			const docRef = await addDoc(collection(db, "Products"), {
				name: name,
				price: price,
				description: description,
				pincode: pincode,
				seller: seller,
				category: category,
				token: url2,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (error) {
			alert(error.message);
		}

		setName("");
		setPrice("");
		setDescription("");
		setPincode("");
		setSeller("");
		setCategory("");
		alert("Item added for selling");
		window.location.reload();
	};

	return (
		<div>
			<div className="imgSeller"></div>
			<Navbar bgcolor="#908f8f25" />
			<div className="addSeller">
				<div className="txtSeller"> Add Product For Selling</div>
				<form className="add" onSubmit={handleSubmit}>
					<label className="txtSeller2" for="name">
						Name of product:
					</label>
					<input
						className="inputSeller"
						type="text"
						id="name"
						value={name}
						name="name"
						placeholder="Enter Name of Product"
						onChange={(e) => setName(e.target.value)}
						required
					></input>

					<label className="txtSeller2" for="price">
						Cost of product(per kg)
					</label>
					<input
						className="inputSeller"
						type="number"
						id="price"
						name="price"
						onChange={(e) => setPrice(e.target.value)}
						required
						placeholder="Enter Cost of product(per kg)"
					></input>

					<label className="txtSeller2" for="pincode">
						Pincode of seller
					</label>
					<input
						className="inputSeller"
						type="number"
						id="pincode"
						name="pincode"

						onChange={(e) => setPincode(e.target.value)}
						required
            placeholder="Enter Pincode of seller"
					></input>

					<label className="txtSeller2" for="desc">
						Description of product:
					</label>
					<input
						className="inputSeller"
						type="text"
						id="desc"
						name="desc"
						onChange={(e) => setDescription(e.target.value)}
						required
            placeholder="Enter Description of product"
					></input>

					<label className="txtSeller2" for="sname">
						Seller Name
					</label>
					<input
						className="inputSeller"
						type="sname"
						id="sname"
						name="sname"
						onChange={(e) => setSeller(e.target.value)}
						required
            placeholder="Enter Seller Name"
					></input>

					<label className="txtSeller2" for="image">
						Product Image
					</label>
					<div className="container">
						<input
							type="file"
							className="upload-box"
							id="image"
							name="image"
							accept="image/*"
							onChange={(event) => {
								setImage(event.target.files[0]);
							}}
							required
						/>
					</div>

					<label className="txtSeller2" for="category">
						Choose a category
					</label>
					<select
						id="category"
						name="category"
						className="selct"
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value="Fruits">Fruits</option>
						<option value="Vegetables">Vegetables</option>
						<option value="Nuts">Nuts</option>
						<option value="Seeds">Seeds</option>
						<option value="Cereals">Cereals</option>
						<option value="Pulses">Pulses</option>
					</select>

					<button id="add" type="submit">
						Add Item
					</button>
				</form>
			</div>
			{/*
             <div className="currentSeller">
             				<div className="txtSeller">Products Currently Selling</div>
             				<div className="currentSellerSearch">
             					{data.map((item) => (
             						<Card2
             							name={item.name}
             							add={item.token}
             							seller={item.seller}
             							cost={item.cost}
             						/>
             					))}
             				</div>
             			</div> 
            */}
			<Footer />
		</div>
	);
};

export default Seller;
