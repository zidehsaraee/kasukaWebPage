import React from "react";
import "./Footer.css";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Navbar,
  Nav,
} from "react-bootstrap";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function Footer() {
  return (
    <Container className="footer-container mt-5 pt-5 pb-5" fluid>
      <Container>
        <Row className="footer-wrapper">
          <Col lg={3} md={12} className="mb-3">
            <Navbar.Brand href="#home">
              <h1 className="logo">
                <a href="#">
                  <img src="./images/Header/logo.png" alt="LOGO" />
                  KASUKA
                </a>
              </h1>
            </Navbar.Brand>
            <div className="text-white mt-4 footer-address-wrapper">
              <p>Manchester</p>
              <p>Tel: +44 111 1111</p>
              <p>Email: info@example.com</p>
            </div>
            <div className="d-flex mt-4 mb-4">
              <SocialMedia icon="bi bi-twitter" />
              <SocialMedia icon="bi bi-instagram" />
              <SocialMedia icon="bi bi-facebook" />
              <SocialMedia icon="bi bi-skype" />
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-3">
            <div className="text-white footer-list-wrapper">
              <h4>Title</h4>
              <Nav className="me-auto mb-4 footer-nav-wrapper">
                <Nav.Link href="#home">
                  <i class="bi bi-chevron-right"></i>Lorem Ipsom 1
                </Nav.Link>
                <Nav.Link href="#About">
                  <i class="bi bi-chevron-right"></i>Lorem Ipsom 2
                </Nav.Link>
                <Nav.Link href="#Services">
                  <i class="bi bi-chevron-right"></i>Lorem Ipsom 3
                </Nav.Link>
                <Nav.Link href="#Portfolio">
                  <i class="bi bi-chevron-right"></i>Lorem Ipsom 4
                </Nav.Link>
                <Nav.Link href="#Team">
                  <i class="bi bi-chevron-right"></i>Lorem Ipsom 5                </Nav.Link>
                <Nav.Link href="#ContactUs">
                  <i class="bi bi-chevron-right"></i>Lorem Ipsom 6
                </Nav.Link>
              </Nav>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12} className="mb-3">
            <div className="text-white footer-list-wrapper">
              <h4>Useful link</h4>
              <Nav className="me-auto mb-4 footer-nav-wrapper">
                <Nav.Link href="#home">
                  <i class="bi bi-chevron-right"></i>Home
                </Nav.Link>
                <Nav.Link href="#About">
                  <i class="bi bi-chevron-right"></i>About
                </Nav.Link>
                <Nav.Link href="#Services">
                  <i class="bi bi-chevron-right"></i>Services
                </Nav.Link>
                <Nav.Link href="#Portfolio">
                  <i class="bi bi-chevron-right"></i>Product
                </Nav.Link>
                <Nav.Link href="#Team">
                  <i class="bi bi-chevron-right"></i>Team
                </Nav.Link>
                <Nav.Link href="#ContactUs">
                  <i class="bi bi-chevron-right"></i>Contact us
                </Nav.Link>
              </Nav>
            </div>
          </Col>
          <Col lg={5} md={12} sm={12}>
            <h3 className="text-white">News</h3>
            <p className="text-white">
              It is a long established fact that a reader will be distracted by
              the readable content{" "}
            </p>
            <InputGroup className="mt-7">
              <Button id="button-addon1" className="footer-form-btn">
                Follow
              </Button>
              <Form.Control
                placeholder="Email"
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
