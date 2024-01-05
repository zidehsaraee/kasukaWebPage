import React from "react";
import "./Slider.css";
import SliderItem from "./SliderItem";
import { Container, Row, Col } from "react-bootstrap";

export default function Slider() {
  return (
    <Container>
      <Row lg={6} md={3} xs={2} className="slider-img-wraper">
        <Col>
          <SliderItem image="./images/Slider/client-1.png" />
        </Col>
        <Col>
          <SliderItem image="./images/Slider/client-2.png" />
        </Col>
        <Col>
          <SliderItem image="./images/Slider/client-3.png" />
        </Col>
        <Col>
          <SliderItem image="./images/Slider/client-4.png" />
        </Col>
        <Col>
          <SliderItem image="./images/Slider/client-6.png" />
        </Col>
        <Col>
          <SliderItem image="./images/Slider/client-8.png" />
        </Col>
      </Row>
    </Container>

    // <div className='slider-img-wraper'>
    //     <SliderItem image = './images/Slider/client-1.png' />
    //     <SliderItem image = './images/Slider/client-2.png' />
    //     <SliderItem image = './images/Slider/client-3.png' />
    //     <SliderItem image = './images/Slider/client-4.png' />
    //     <SliderItem image = './images/Slider/client-6.png' />
    //     <SliderItem image = './images/Slider/client-8.png' />
    // </div>
  );
}
