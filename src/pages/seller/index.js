import { React } from "react";

import "./index.css";
import Navbar from "../../components/navbar/navbar";
import data from "../../data.json";
import Card2 from "../../components/card/card";
import Footer from "../../components/footer/footer";
const about = () => {
    return (
            <div><div className="imgSeller"></div><Navbar color="#6ab860" bgcolor="#908f8f25" />
                    
                <div className="addSeller"><div className="txtSeller"> Add Product For Selling</div><form className="add">
                    <label className="txtSeller2" for="name">Name of product:</label>
                    <input className="inputSeller" type="text" id="name" name="name"></input>
                    <label className="txtSeller2" for="cost">Cost of product(per kg)</label>
                    <input className="inputSeller" type="number" id="cost" name="cost"></input>
                    <label className="txtSeller2" for="pincode">Pincode of seller</label>
                    <input className="inputSeller" type="number" id="pincode" name="pincode"></input>
                    <label className="txtSeller2" for="cost">Cost of product(per kg)</label>
                    <input className="inputSeller" type="number" id="cost" name="cost"></input>
                    <label className="txtSeller2" for="desc">Description of product:</label>
                    <input className="inputSeller" type="text" id="desc" name="desc"></input>
                    <label className="txtSeller2" for="sname">Seller Name</label>
                    <input className="inputSeller" type="sname" id="sname" name="sname"></input>
                    <label className="txtSeller2" for="image">Product Image</label>
                    <input className="inputSeller" type="file" id="image" name="image"></input>
                    <label className="txtSeller2" for="category">Choose a category</label>
                    <select id="category" name="category">
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Nuts">Nuts</option>
                        <option value="Seeds">Seeds</option>
                        <option value="Cereals">Cereals</option>
                        <option value="Pulses">Pulses</option>
                    </select>
                    <div id="add">Add Item</div>
                </form></div>
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
                <Footer/> 
            </div>

    );
};

export default about;

