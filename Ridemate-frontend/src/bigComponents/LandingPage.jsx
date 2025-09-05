import React from "react";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Header from "../smallComponents/Header";
import HeroSection1 from "../smallComponents/HeroSection1";
import HeroSection2 from "../smallComponents/HeroSection2";
import Footer from "../smallComponents/Footer";

const LandingPage = () => {
  const nav = useNavigate();

  return (
    <>
      <Header/>
      <HeroSection1/>
      <Footer/>
    </>
  );
};

export default LandingPage;