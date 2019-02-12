import {Carousel} from "react-bootstrap";
import Image1 from "../assets/berries-bowl-of-fruit-citrus-1128678-900x500.jpg";
import Image2 from "../assets/siner-indigo-farmers web.jpg";
import Image3 from "../assets/GettyImages-998356312_0.jpg";
import React from "react";

function Dashboard() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection:'column', margin:'0 auto', width:'900px'}}>
            <Carousel>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={Image1}/>
                    <Carousel.Caption>
                        <h3>Fresh Food</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={Image2}/>
                    <Carousel.Caption>
                        <h3>Hard Working Farmers</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={Image3} align="middle"/>
                    <Carousel.Caption>
                        <h3>From the Best Places in Macedonia</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div style={{width:'900px'}}>
                <h3 style={{textAlign:'center'}}>Green Stock Exchange</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet volutpat lacus et
                    sodales. Donec
                    sit amet velit consectetur, semper sem a, varius quam.
                    Vivamus eu venenatis purus. Sed id dolor porta, elementum ex et, ornare leo. Class aptent taciti
                    sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos. Duis vitae maximus nunc. Aliquam rhoncus
                    magna eu
                    tempor congue. Nullam porta, ligula at bibendum commodo, eros erat blandit orci, a mattis orci urna
                    quis metus.

                    Nullam ac erat dui. Morbi ac velit turpis. Nunc sit amet augue eget nibh ornare fringilla. Curabitur
                    ultrices,
                    tellus et aliquam luctus, diam augue feugiat metus, vel pulvinar urna odio quis lacus. Aliquam
                    tellus leo, tempus nec
                    posuere id, mattis eget nisi. Nullam efficitur auctor nibh vel efficitur. Integer turpis tellus,
                    porttitor eu vehicula
                    vitae, ornare nec purus. Ut in scelerisque orci. Nulla nisi ex, pretium semper ante vitae, sodales
                    ultricies libero.
                    Nullam diam nisi, semper eu blandit a, sollicitudin quis erat. Nullam eget congue quam.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget laoreet lorem. Aenean convallis
                    nunc non
                    pharetra volutpat. Quisque quis molestie ante. Proin non odio vel lorem sagittis varius.
                    Pellentesque consectetur
                    velit ut orci ultricies, eu pulvinar dui bibendum. Donec accumsan enim et pellentesque bibendum. Ut
                    aliquet diam quam,
                    at gravida velit tempor eu. Phasellus sit amet lectus suscipit, iaculis velit vestibulum, efficitur
                    felis. In fringilla
                    augue eu sapien finibus commodo. Sed sodales sit amet odio ac placerat. Donec nunc diam, fermentum
                    vel tortor
                    vel, semper eleifend lorem. Integer euismod auctor sapien, vel facilisis justo convallis ac.
                </p>
            </div>


        </div>

    );
}

export default Dashboard;