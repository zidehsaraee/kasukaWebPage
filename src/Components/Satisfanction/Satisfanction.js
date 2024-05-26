import React from "react";
import "./Satisfanction.css";
import Introduce from "../introduceHelper/Introduce";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";

export default function Satisfanction() {
  AOS.init({
    duration: 2000,
    delay: 200,
  });
  return (
    <Container className="satisfanction-container">
      <Row>
        <Col lg={6} sm={12} className="satisfanction-image" data-aos="zoom-out">
          <img
            src={
              process.env.PUBLIC_URL + "/images/Satisfanction/satisfanction.jpg"
            }
            alt=""
          />
        </Col>

        <Col
          className="d-flex flex-column justify-content-between"
          data-aos="zoom-in-left"
        >
          <div className="content">
            <h3>Customers satisfanction</h3>
            <p>
              Customer satisfaction is our top priority, driving every decision
              we make. We are committed to delivering exceptional service and
              exceeding your expectations at every turn.
            </p>
          </div>

          <Introduce
            classStyle="icon-out"
            icon="schedule"
            title="Timely Service"
            text="Prompt and timely service for all customer inquiries."
          />
          <Introduce
            classStyle="icon-out"
            icon="verified"
            title="Quality Assurance"
            text="High standards of quality and verified excellence."
          />
          <Introduce
            classStyle="icon-out"
            icon="sentiment_satisfied"
            title="Client Satisfaction"
            text="Consistently high satisfaction rates among clients."
          />
          <Introduce
            classStyle="icon-out"
            icon="news"
            title="Transparent Updates"
            text="Regular updates and transparent communication."
          />
        </Col>
      </Row>
    </Container>
  );
}
