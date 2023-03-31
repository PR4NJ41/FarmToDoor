import React from "react";
import "./index.css";
import Navbar from "../../components/navbar/navbar";

const about = () => {
    
    return (
        <div>  
                <Navbar className="nave"/>
            <div className="mainAboutUs">
            <div className="blackAboutUs">
                <div className="headingAboutUs">ABOUT US</div>
                <p className="paraAboutUs">INTO partnerships empower universities to recruit international students with unparalleled reach, control and transparency. Our global recruitment network, digital platforms and forensic insights strengthen universities’ presence in key and emerging markets, while our focus on student success supports academic and career achievement on campus.
                </p>
                <div className="whyAboutUs">WHY US?</div>
                <div className="rowAboutUs">
                    <img src="/images/farmers1.jpg" className="imgAboutUs"></img>
                    <p className="paraAboutUs">INTO partnerships empower universities to recruit international students with unparalleled reach, control and transparency. Our global recruitment network, digital platforms and forensic insights strengthen universities’ presence in key and emerging markets, while our focus on student success supports academic and career achievement on campus.</p>
                </div>
                </div>
                
                </div>
        </div>
    );
};



export default about;
