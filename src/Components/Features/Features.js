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
            title="Lorem ipsum 1"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Introduce
          classStyle="icon-out"
            icon="description"
            title="Lorem ipsum 2"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Introduce
          classStyle="icon-out"
            icon="conveyor_belt"
            title="Lorem ipsum 3"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Introduce
          classStyle="icon-out"
            icon="pallet"
            title="Lorem ipsum 4"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Col>
      </Row>
    </Container>
  );
}
