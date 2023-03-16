import React from "react";
import "./index.css"
import Navbar from "../../components/navbar/navbar";
import Card1 from "../../components/categories_card/categories_card";
const index = () => {
  return (
	<>
		<Navbar/>
		<div className="main">
			<div className="box1"></div>
            <div className="box2">
                <div className="text1">Categories</div>
                <div className="box3">
                  <Card1 name="fruit" add="../../components/images/fruit.png"/>
                </div>
            </div>
            <div className="popular"> 
            <text className="text1">Popular Products</text>
            </div>
		</div>
	</>
  )
}

export default index