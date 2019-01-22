import React from "react";

const footerStyle = {
    backgroundColor: "gray",
    color: "white",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
};

const phantomStyle = {
    display: "block",
    width: "100%"
};

function Footer() {
    return (
        <div style={{marginTop:'50px'}}>
            <div style={phantomStyle}>
                <div style={footerStyle}>
                    Testtt
                </div>
            </div>
        </div>
    )
}
export default Footer;