import React from "react";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Header from "../smallComponents/Header";
import HeroSection1 from "../smallComponents/HeroSection1";

const LandingPage = () => {
  const nav = useNavigate();

  return (
    <>
      <Header/>
      <HeroSection1/>
    </>
  );
};

export default LandingPage;