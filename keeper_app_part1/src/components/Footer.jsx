import React from "react";

function getCurrentYear() {
    const date = Date();
    const year = date.getFullYear();
    return year;
}

export default function Footer() {
    const getYear = new Date().getFullYear()
    return(
        <footer>
            <p>copy right {getYear}</p>
        </footer>
        
    );
}