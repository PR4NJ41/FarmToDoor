import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';


function Navbar(props) {
     
	const location = useLocation();

	let colour = props.color;
    const [Keyword,setKeyword] = useState("");
    const [SearchKeyword,setSearchKeyword] = useState("");

	const [value, setValue] = useState("");
	const SignInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((data) => {
				setValue(data.user.email);
				localStorage.setItem("userName", data.user.displayName);
				localStorage.setItem("userEmail", data.user.email);
				localStorage.setItem("userProfilePic", data.user.photoURL);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		setValue(localStorage.getItem("userEmail"));
	});
	const LogOut = () => {
		localStorage.clear();
		window.location.reload();
		console.log("cleared ok")
	};

	document.addEventListener("click", (e) => {
		const isDropdownBtn = e.target.matches("data-dropdown-button");
		if (!isDropdownBtn && e.target.closest("data-dropdown") != null) return;

		let currentDropdown;
		if (isDropdownBtn) {
			currentDropdown = e.target.closest("data-dropdown");
			currentDropdown.classList.toggle("active");
		}

		document
			.querySelectorAll("data-dropdown.active")
			.forEach((dropdown) => {
				if (dropdown === currentDropdown) return;
				dropdown.classList.remove("active");
			});
	});

	const handleSearch = (event)=>{
		localStorage.setItem("searchKeyword",Keyword);
		setSearchKeyword(localStorage.getItem("searchKeyword"));
		console.log(SearchKeyword);
		window.location.reload();
	};

	return (
		<>
			<div className="mainNavbar" style={{backgroundColor: props.bgcolor, color:props.color}}>
				<Link to="/" className="boxNavbar">
					Home
				</Link>
				<Link to="/about_us" className="boxNavbar">
					About Us
				</Link>
				<Link to="/faq" className="boxNavbar">
					FAQ
				</Link>
				<Link to="/seller" className="boxNavbar">
					Sell
				</Link>
				<Link to='/buy' className="boxNavbar">
				<img className="navimg" src="/images/search.svg" onClick={handleSearch}></img>
				 {(location.pathname === '/buy')?<input className="searchNav" onChange={(e)=>setKeyword(e.target.value)} type="text"></input>:<div></div>}
				</Link>

				<Link to="/cart" className="boxNavbar">
					<img className="navimg" src="/images/cart.svg"></img>
				</Link>

				{value ? (
					<div className="rightnav" data-dropdown>
						<button className="profileImgNav" data-dropdown-button>
							<img
								className="profileImgNav"
								alt=""
								src={localStorage.getItem("userProfilePic")}
							/>
						</button>
						<div className="dropdown">
							<div href="#" className="ok1">
								{localStorage.getItem("userName")}
							</div>
							<div href="#" className="ok2" onClick={LogOut}>
								Log Out
							</div>
						</div>
					</div>
				) : (
					<button
						className="googleSignInBtn"
						onClick={SignInWithGoogle}
					>
						Log In
					</button>
				)}
			</div>
		</>
	);
}

export default Navbar;
