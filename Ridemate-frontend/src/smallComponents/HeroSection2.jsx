import React from "react";
import "../allOverCss/commonClassNames.css";
import "../allOverCss/fonts.css";
import "../bigComponents/Components.css";
import backgroundImage from "../assets/Gemini_Generated_Image_wlygrhwlygrhwlyg.png";

function HeroSection2() {
  return (
    <div className="displayFlex HeroSection2 position-relative">
      <div className="hero-section2-features display-flex">
        <div className="hero-section2-individual-feature">
          <i className="fa-solid fa-sack-dollar hero-section2-individual-feature-icon"></i>
          <p className="hero-section2-individual-feature-heading">Save Money</p>
          <p className="hero-section2-individual-feature-para">
            Slash your daily commuting costs by sharing fuel expenses. Our app
            helps you save big on every trip.
          </p>
        </div>
        <div className="hero-section2-individual-feature">
          <i className="fa-solid fa-clock hero-section2-individual-feature-icon"></i>
          <p className="hero-section2-individual-feature-heading">
            Reduce Commute Time
          </p>
          <p className="hero-section2-individual-feature-para">
            Get a ride and beat the traffic. Reach your destination faster.
          </p>
        </div>
        <div className="hero-section2-individual-feature">
          <i className="fa-solid fa-users hero-section2-individual-feature-icon"></i>
          <p className="hero-section2-individual-feature-heading">
            Meet New People
          </p>
          <p className="hero-section2-individual-feature-para">
            Connect with new people from your area and make your daily commute
            more social and fun.
          </p>
        </div>
        <div className="hero-section2-individual-feature">
          <i className="fa-solid fa-earth-asia hero-section2-individual-feature-icon"></i>
          <p className="hero-section2-individual-feature-heading">
            Reduce Pollution
          </p>
          <p className="hero-section2-individual-feature-para">
            Help reduce carbon emissions. Share a ride and make the planet
            greener
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection2;
