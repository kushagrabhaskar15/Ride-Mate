import React from "react";
import '../bigComponents/Components.css';
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
  return (
      <Navbar color="light">
        <div className="NavBar-left" style={{ width: "50%" }}>
          <NavbarBrand href="/">RideMate</NavbarBrand>
        </div>
        <div
          className="NavBar-right"
          style={{ display: "flex", justifyContent: "space-between" ,gap:"10px"}}
        >
          <Button color="warning" style={{color:"white"}}>
            Find a Ride
          </Button>
          <Button color="primary" outline>
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
