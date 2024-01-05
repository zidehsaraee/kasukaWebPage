import React from "react";
import "./Contact.css";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import Introduce from "../introduceHelper/Introduce";

export default function Contact() {
  return (
    <Container className="contact-container" id="ContactUs">
      <h2>Contact us</h2>
      <p className="contact-title">Contact us</p>
      <Row>
        <Image src="./images/ContactUs/map.jpg" />
      </Row>
      <Row className="contact-form-wrapper">
        <Col lg={4}>
          <Introduce
            classStyle="icon-bg"
            icon="location_on"
            title="Address"
            text="lorem address"
          />
          <Introduce
            classStyle="icon-bg"
            icon="schedule"
            title="Tell"
            text="+44 111 1111"
          />
          <Introduce
            classStyle="icon-bg"
            icon="map"
            title="Email"
            text="info@example.com"
          />
        </Col>
        <Col lg={8}>
          <Row>
            <Col lg={6}>
              <Form.Control
                className="mb-3 contact-form"
                type="text"
                id="inputPassword5"
                placeholder="Name"
              />
            </Col>
            <Col lg={6}>
              <Form.Control
                className="mb-3 contact-form"
                type="email"
                id="inputPassword5"
                placeholder="Email"
                aria-describedby="passwordHelpBlock"
              />
            </Col>
            <Col lg={12}>
              <Form.Control
                className="mb-3 contact-form"
                type="text"
                id="inputPassword5"
                placeholder="Title"
              />
            </Col>
            <Col lg={12}>
              <Form.Control
                className="contact-form"
                as="textarea"
                rows={3}
                placeholder="Message"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-3">
          <button className="contact-btn">Send message</button>
        </Col>
      </Row>
    </Container>
  );
}
