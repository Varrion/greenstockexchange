import React from "react";

const footer = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '70px',
    backgroundColor: 'black',
    textAlign: 'center',
    paddingTop: '5px',
};

const left = {
    // display:'flex',
    // justifyContent:'flex-start',
    float: 'left',
    color: 'white',
    paddingLeft: '5px'
};

const mid = {
    position: 'absolute',
    bottom: '5 !important',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop:'21px',
    left: '0',
    right: '0',
    color:'white'
}

const right = {
    float: 'right',
    paddingTop: '21px'
};


function Footer() {
    return (
        <div style={footer}>
            <div style={left}>
                <p>Tomislav Anastasovski</p>
                <h4>Elektronska i Mobilna Trgovija</h4>

            </div>
            <div style={mid}>
                <h5>FINKI 2019</h5>
            </div>
            <div style={right}>
                <a style={{paddingRight: '5px'}} href="#"><i className="fa fa-facebook-official fa-2x"/></a>
                <a style={{paddingRight: '5px'}} href="#"><i className="fa fa-pinterest-p fa-2x"/></a>
                <a style={{paddingRight: '5px'}} href="#"><i className="fa fa-twitter fa-2x"/></a>
                <a style={{paddingRight: '5px'}} href="#"><i className="fa fa-flickr fa-2x"/></a>
                <a style={{paddingRight: '5px'}} href="#"><i className="fa fa-linkedin fa-2x"/></a>
            </div>
        </div>
    )
}

export default Footer;