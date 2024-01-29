import React from "react";
import "./Slider.css";
import SliderItem from "./SliderItem";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";

export default function Slider() {
  AOS.init({ duration: 2000 });
  return (
    <Container>
      <Row lg={6} md={3} xs={2} className="slider-img-wraper" data-aos="zoom-in-up">
        <Col>
          <SliderItem
            image={process.env.PUBLIC_URL + "/images/Slider/client-1.png"}
          />
        </Col>
        <Col>
          <SliderItem
            image={process.env.PUBLIC_URL + "/images/Slider/client-2.png"}
          />
        </Col>
        <Col>
          <SliderItem
            image={process.env.PUBLIC_URL + "/images/Slider/client-3.png"}
          />
        </Col>
        <Col>
          <SliderItem
            image={process.env.PUBLIC_URL + "/images/Slider/client-4.png"}
          />
        </Col>
        <Col>
          <SliderItem
            image={process.env.PUBLIC_URL + "/images/Slider/client-6.png"}
          />
        </Col>
        <Col>
          <SliderItem
            image={process.env.PUBLIC_URL + "/images/Slider/client-8.png"}
          />
        </Col>
      </Row>
    </Container>
  );
}
