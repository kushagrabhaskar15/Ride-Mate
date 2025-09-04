import React from "react";
import '../bigComponents/Components.css';
import '../allOverCss/fonts.css';
import Login from '../bigComponents/Login';
import { useNavigate } from "react-router-dom"; 
import {
  Button,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarText,
  NavLink,
  NavbarToggler,
  Container,
} from "reactstrap";

function Header() {

  const navigate = useNavigate();

  return (
      <Navbar color="light" className="Header">
        
        <div className="NavBar-left" style={{ width: "50%" }}>
          <NavbarBrand href="/" className="bungee-regular" style={{fontSize:"larger"}}>RideMate</NavbarBrand>
        </div>

        <div
          className="NavBar-right"
          style={{ display: "flex", justifyContent: "space-between" ,gap:"10px"}}
        >
          <Button color="warning" style={{color:"white"}}>
            Find a Ride
          </Button>
          <Button color="primary" outline onClick={()=>{navigate("/Login")}}>
            Login
          </Button>
          <Button color="link">
            <i class="fa-solid fa-user fa-lg"></i>
          </Button>
        </div>
      </Navbar>
  );
}

export default Header;
