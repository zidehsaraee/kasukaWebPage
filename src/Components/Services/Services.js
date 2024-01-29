import React from "react";
import "./Services.css";
import ServiceItem from "./ServiceItem";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";

export default function Services() {
  AOS.init({
    duration: 2000,
  });
  return (
    <Container className="services-container" id="Services">
      <div data-aos="fade-up">
        <h2>Services</h2>
        <p className="services-title">See our services</p>
      </div>
      <Row lg={3} md={2} sm={1} xs={1} data-aos="zoom-in">
        <Col>
          <ServiceItem
            icon="acute"
            title="Service 1"
            text="It is a long established fact that a reader will be distracted by the readable content "
          />
        </Col>
        <Col>
          <ServiceItem
            icon="sports_basketball"
            title="Service 2"
            text="It is a long established fact that a reader will be distracted by the readable content "
          />
        </Col>
        <Col>
          <ServiceItem
            icon="public"
            title="Service 3"
            text="It is a long established fact that a reader will be distracted by the readable content "
          />
        </Col>
        <Col>
          <ServiceItem
            icon="live_tv"
            title="Service 4"
            text="It is a long established fact that a reader will be distracted by the readable content "
          />
        </Col>
        <Col>
          <ServiceItem
            icon="article"
            title="Service 5"
            text="It is a long established fact that a reader will be distracted by the readable content "
          />
        </Col>
        <Col>
          <ServiceItem
            icon="account_balance"
            title="Service 6"
            text="It is a long established fact that a reader will be distracted by the readable content "
          />
        </Col>
      </Row>
    </Container>
  );
}
