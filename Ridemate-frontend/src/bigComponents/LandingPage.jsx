import React from "react";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const LandingPage = () => {
  const nav = useNavigate();

  return (
    <div
      className="page"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Button
        size="lg"
        color="primary"
        outline
        onClick={() => {
          nav("/SignUp");
        }}
      >
        SignUp
      </Button>
    </div>
  );
};

export default LandingPage;
