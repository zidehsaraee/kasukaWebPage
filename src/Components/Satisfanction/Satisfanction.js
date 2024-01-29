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
        <Col
          lg={6}
          sm={12}
          className="satisfanction-image"
          data-aos="zoom-out"
        >
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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>
          </div>

          <Introduce
            classStyle="icon-out"
            icon="schedule"
            title="35"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Introduce
            classStyle="icon-out"
            icon="verified"
            title="85"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Introduce
            classStyle="icon-out"
            icon="sentiment_satisfied"
            title="65"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Introduce
            classStyle="icon-out"
            icon="news"
            title="20"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Col>
      </Row>
    </Container>
  );
}
