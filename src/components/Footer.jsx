import React from "react";
// import ReactDom from "react-dom";

const newYear = new Date();
const currentYear = newYear.getFullYear();

function Footer(){
    return <footer>
        <p>copyright © {currentYear}</p>
    </footer>
}

export default Footer;