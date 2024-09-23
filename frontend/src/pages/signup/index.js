import { React } from "react";
import "./index.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


async function sleep(s) {
	return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

const Signup = () => {
    const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("buyer");
	
	// let url2 = "";

	const handleSubmit = async (e) => {
		e.preventDefault();
        let formData = {
            email: email,
            name: name,
            password: password,
            role: role
        };
		await sleep(5);
        try{
        const response = await fetch("http://localhost:5000/user/register", {
           method: "POST",
           headers: {
              "Content-Type": "application/json"
           },
           body: JSON.stringify(formData)
        });
        const result = await response.json();
        console.log(result);
        alert("User created successfully");
        // navigate("/login");
        }catch(error){
        console.error(error.message);
        }finally{
        console.log(formData);
		setName("");
		setEmail("");
		setPassword("");
		setRole("");

		window.location.reload();
        }
	};

	return (
		<div>
			<div className="imgSeller"></div>
			<Navbar bgcolor="#908f8f25" />
			<div className="addSeller">
				<div className="txtSeller"> Signup</div>
				<form className="add" onSubmit={handleSubmit}>
					<label className="txtSeller2" for="name">
						Name :
					</label>
					<input
						className="inputSeller"
						type="text"
						id="name"
						value={name}
						name="name"
						placeholder="Enter Name"
						onChange={(e) => setName(e.target.value)}
						required
					></input>

					<label className="txtSeller2" for="email">
						Email :
					</label>
					<input
						className="inputSeller"
						type="text"
						id="email"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
						required
						placeholder="Enter Email"
					></input>

					<label className="txtSeller2" for="password">
						Password : 
					</label>
					<input
						className="inputSeller"
						type="text"
						id="password"
						name="password"

						onChange={(e) => setPassword(e.target.value)}
						required
            placeholder="Enter Password"
					></input>

					{/* <label className="txtSeller2" for="desc">
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
					</div> */}

					<label className="txtSeller2" for="role">
						Choose a role
					</label>
					<select
						id="role"
						name="role"
						className="selct"
						onChange={(e) => setRole(e.target.value)}
					>
						<option value="buyer">buyer</option>
						<option value="seller">seller</option>
					</select>

					<button id="add" type="submit">
						Signup
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

export default Signup;
