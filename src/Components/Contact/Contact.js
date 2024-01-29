import React from "react";
import "./Contact.css";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import Introduce from "../introduceHelper/Introduce";
import Aos from "aos";

export default function Contact() {
  Aos.init({
    duration: 2000,
  });
  return (
    <Container className="contact-container" id="ContactUs">
      <div>
        <h2>Contact us</h2>
        <p className="contact-title">Contact us</p>
      </div>
      <Row>
        <Image src={process.env.PUBLIC_URL + "/images/ContactUs/map.jpg"} data-aos="zoom-in" data-aos-delay="600"/>
      </Row>
      <Row className="contact-form-wrapper">
        <Col lg={4} data-aos="zoom-in">
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
        <Col lg={8} data-aos="zoom-in" data-aos-delay="600">
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
          <button className="contact-btn" data-aos="zoom-in" data-aos-delay="600">Send message</button>
        </Col>
      </Row>
    </Container>
  );
}
