import React from "react";
import "./Navbar.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

export default function TopNavbar() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">
          <h1 className="logo">
            <a href="#">
              <img src={process.env.PUBLIC_URL +"/images/Header/logo.png"} alt="LOGO" />
              KASUKA
            </a>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ham-menu" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Portfolio">Product</Nav.Link>
            <Nav.Link href="#Team">Team</Nav.Link>
            <Nav.Link href="#ContactUs">Contact us</Nav.Link>
          </Nav>
          <Button className="nav-btn">Start</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
