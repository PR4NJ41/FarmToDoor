import React from "react";
import "./faq.css";

const faq = () => {
    function positionTheDot() {
        // What percentage down the page are we?
        var scrollPercentage =
            (document.documentElement.scrollTop + document.body.scrollTop) /
            (document.documentElement.scrollHeight -
                document.documentElement.clientHeight);
    
        // Get path length
        var path = document.getElementById("theMotionPath");
        var pathLen = path.getTotalLength();
    
        // Get the position of a point at <scrollPercentage> along the path.
        var pt = path.getPointAtLength(scrollPercentage * pathLen);
    
        // Position the red dot at this point
        var dot = document.getElementById("dot");
        dot.setAttribute("transform", "translate(" + pt.x + "," + pt.y + ")");
    }
    
    // Update dot position when we get a scroll event.
    window.addEventListener("scroll", positionTheDot);
    
    // Set the initial position of the dot.
    positionTheDot();    

    return (
        <>
            <div className="solar-system">
                <div id="sun" />

                <div className="orbit mercury-orbit" />
                <div className="mercury-spin">
                    <div id="mercury" />
                </div>

                <div className="orbit venus-orbit" />
                <div className="venus-spin">
                    <div id="venus" />
                </div>
            </div>
        </>
    );
};



export default faq;
