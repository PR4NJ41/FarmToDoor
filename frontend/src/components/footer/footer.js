import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

function Footer() {
    return (
        <div className="mainfooter">
            <img  className="logoFooter" src="/images/logo.svg"/>
    
            <div className="contFooter">
                <div className="txtFooter">
                    <div className="greenBoxFooter"></div>Contact Information</div>
                <div className="elemnFooter">
                    <img className="iconFooter" src="/images/phone.svg"/>
                    <div className="linesFooter">
                        <text className="txt3Footer">Mobile:</text>
                        <text className="txt2Footer">+(91)98675-67546</text>
                    </div>
                </div>
                <div className="elemnFooter">
                    <img className="iconFooter" src="/images/mail.svg"></img>
                    <div className="linesFooter">
                        <text className="txt3Footer">Mail:</text>
                        <text className="txt2Footer">farm2door@gmail.com</text>
                    </div>
                </div>
                <div className="elemnFooter">
                    <img className="iconFooter" src="/images/website.svg"/>
                    <div className="linesFooter">
                        <text className="txt3Footer">Website:</text>
                        <text className="txt2Footer">www.farm2door.com</text>
                    </div>
                </div>
            </div>
            <div className="contFooter">
                <div className="txtFooter">
                    <div className="greenBoxFooter"></div>Sections</div>
                    <div className="txt2Footer"><Link className="linkfooter" to="/about_us">
                <div className="txt2Footer">About Us</div>
				</Link></div>
                <div className="txt2Footer"><Link className="linkfooter" to="/faq">
                <div className="txt2Footer">FAQ</div>
				</Link></div>
                <div className="txt2Footer"><Link className="linkfooter" to="/buy">
                <div className="txt2Footer">Products</div>
				</Link></div>
                <div className="txt2Footer"><Link className="linkfooter" to="/cart">
                <div className="txt2Footer">Cart</div>
				</Link></div></div>
                <img className="thankFooter" src="/images/thankyou.webp"/>
        </div>
    )
}

export default Footer;