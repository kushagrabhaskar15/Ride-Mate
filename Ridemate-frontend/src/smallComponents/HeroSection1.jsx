import React from "react";
import headerImg1 from "./headerImg1.jpg";
import { Button } from "reactstrap";
import "../bigComponents/Components.css";

function HeroSection1() {

    return (
        <div className="display-flex hero-section1">
            
            <div style={{width:"58%"}}>
            
                <h1>Your Daily Commute, Elevated</h1>
                <p> Save time,money and the planet by sharing rides with verified users. </p>

                <div className="display-flex hero-section1-btns">

                    <Button className="btnFind" size="lg">
                        <i className="fa-solid fa-search"></i>
                        Find a Ride
                    </Button>

                    <Button className="btnOffer" size="lg">
                        Offer a Ride
                        <i className="bi bi-car-front"></i>
                    </Button>

                </div>

            </div>

            <img src={headerImg1} style={{ width: "30rem" }} />
    
        </div>
    );
}

export default HeroSection1;
