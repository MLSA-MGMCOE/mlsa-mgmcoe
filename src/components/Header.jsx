import React from "react";
import "../style/Header.css";
import logo from "../assets/mlsalogo.png";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
        <Link href="/">
          <img src={logo} alt="MLSALogo" className="logo" />
        </Link>
          <Nav
            className="
            justify-content-end"
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </div>
      </header>
    </>
  );
};

export default Header;
