import {Carousel} from "react-bootstrap";
import Image1 from "../assets/berries-bowl-of-fruit-citrus-1128678-900x500.jpg";
import Image2 from "../assets/siner-indigo-farmers web.jpg";
import Image3 from "../assets/GettyImages-998356312_0.jpg";
import React from "react";

function Dashboard() {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Carousel>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={Image1}/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={Image2}/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={Image3} align="middle"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Dashboard;