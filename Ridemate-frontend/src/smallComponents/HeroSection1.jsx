import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';

/* importing dedicated css files*/
import "../bigComponents/Components.css";
import "../allOverCss/commonClassNames.css";
import "../allOverCss/fonts.css";

/* importing svgs*/
import headerImg1 from "../assets/headerImg1.jpg";
import HeroSection2 from "./HeroSection2";

function HeroSection1() {

    const navigate = useNavigate();

    return (
        <div className='hero-section1'>
        <div className="display-flex">
            
            <div className="hero-section1-written-part position-relative">
            
                <h1 className="bungee-regular">Your Daily Commute, Elevated</h1>
                <p className="pt-sans-bold"> Save time, money and the planet by sharing rides with verified users. </p>

                <div className="position-relative display-flex hero-section1-btns">

                    <Button className="btnFind" size="lg" onClick={()=>{navigate("/findARide")}}>
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

        <hr/>
        <br/>
        <br/>

        <HeroSection2/>
        </div>
    );
}

export default HeroSection1;
