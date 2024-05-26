import React from "react";
import "./Features.css";
import AOS from 'aos';
import Introduce from "../introduceHelper/Introduce";
import { Container, Row, Col } from "react-bootstrap";

export default function Features() {
  AOS.init({
    duration: 2000,
  });
  return (
    <Container className="features-container">
      <Row>
        <Col lg={6} sm={12} className="feature-image" data-aos="zoom-in-right">
          <img src={process.env.PUBLIC_URL + "/images/Features/feature1.jpg"} alt="" />
        </Col>
        <Col
          lg={6}
          sm={12}
          className="d-flex flex-column justify-content-between features-wrapper"
          data-aos="zoom-out"
        >
          <Introduce
          classStyle="icon-out"
            icon="perm_media"
            title="Creative Design"
            text="Innovative and eye-catching designs that captivate your audience."
          />
          <Introduce
          classStyle="icon-out"
            icon="description"
            title="Detailed Analytics"
            text="Comprehensive analytics to track performance and optimize strategies."
          />
          <Introduce
          classStyle="icon-out"
            icon="conveyor_belt"
            title="Efficient Workflow"
            text="Streamlined processes to ensure timely and efficient project delivery."
          />
          <Introduce
          classStyle="icon-out"
            icon="pallet"
            title="Scalable Solutions"
            text="Flexible and scalable solutions tailored to your business needs."
          />
        </Col>
      </Row>
    </Container>
  );
}
