import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { Data } from "./data";
import { Fade } from "react-reveal";
import "./faq.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const MySection = styled.div`
flex-direction: column;
display: flex;
	align-items: center;
	position: relative;
	justify-content: center;
	width: 100%;
	height: 150vh;
	background: #fff;
	overflow-x: hidden;
	@media (max-width: 768px) {
		height: 320vh;
	}
`;

const Container = styled.div`
top: 5%;
position: absolute;
max-width: 1500px;
width: 100vw;
color: #fff;
	@media (max-width: 768px) {
		width: 80vw;
	}
`;

const Wrap = styled.div`
	background: #fff;
	display: flex;
	color: black;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	text-align: center;
	position: relative;
	cursor: pointer;
	span {
		margin-right: 1.5rem;
	}
	@media (max-width: 400px) {
		h1 {
			font-weight: 400;
			font-size: 25px;
			line-height: 33px;
		}
	}
`;

const Dropdown = styled.div`
	background: #fff;
	width: 100%;
	color: black;
	display: flex;
	position: relative;
	align-items: left;
	justify-content: space-between;
	margin: 15px;

	p {
		font-size: 20px;
		padding: 15px;
		font-family: Nunito Sans;
	}
`;

function Faqq() {
	const ref_container = useRef();
	useEffect(() => {
		const scrollDiv = document.getElementById("header").offsetTop;
		window.scrollTo({ top: scrollDiv - 200, behavior: "smooth" });
	}, []);
	const [clicked, setClicked] = useState(false);

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}

		setClicked(index);
	};

	return (
		<div
			className="HEADER"
			style={{}}
			id="header"
			ref_container={useRef}
		>
			<Navbar bgcolor="#6ab860"/>
			<div className="heas">
				<div>
					<h2 className="heading">FAQ</h2>
				</div>
			</div>
			<IconContext.Provider value={{ color: "black", size: "47px" }}>
				<MySection className="accordion">
					<Container>
						{Data.map((item, index) => (
							<>
								<Wrap onClick={() => toggle(index)} key={index}>
									<div>
										<h1
											style={{
												padding: "15px 100px",
												fontFamily: "Montserrat",
												fontStyle: "normal",
												color: "black",
												fontWeight: "500",
												fontSize: "22px",
												lineHeight: "44px",
											}}
										>
											{item.question}
										</h1>
									</div>
									<Fade bottom>
										<span
											style={{
												fontFamily: "Montserrat",
												fontStyle: "normal",
											}}
										>
											{clicked === index ? (
												<img
													src="/images/upArrowFaq.svg"
													style={{
														maxWidth: "max-content",
														paddingRight: "100px",
													}}
												/>
											) : (
												<img
													style={{
														maxWidth: "max-content",
														paddingRight: "100px",
													}}
													src="/images/downArrowFaq.svg"
												/>
											)}
										</span>
									</Fade>
								</Wrap>
								<hr
									style={{
										color: "black",
										marginTop: "30px",
										border: "0.25px solid #000000",
									}}
								></hr>
								{clicked === index ? (
									<Fade bottom>
										<Dropdown>
											<p
												style={{
													fontFamily: "Montserrat",
													fontStyle: "normal",
													fontWeight: "400",
													fontSize: "18px",
													lineHeight: "145.9%",
													padding: "15px 100px",
												}}
											>
												{item.answer}
											</p>
										</Dropdown>
									</Fade>
								) : null}
							</>
						))}
					</Container>
				</MySection>
			</IconContext.Provider>

			<Footer/>

		</div>
	);
}

export default Faqq;
