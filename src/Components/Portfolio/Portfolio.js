import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <Container className="portfolio-container" id="Portfolio">
      <h2>Portfolios</h2>
      <p className="portfolio-title">See our porfolios</p>
      <Row>
        <Col lg={4} md={6} sm={12}>
          <Image src="./images/Portfolio/portfolio-1.jpg" thumbnail />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Image src="./images/Portfolio/portfolio-2.jpg" thumbnail />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Image src="./images/Portfolio/portfolio-3.jpg" thumbnail />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Image src="./images/Portfolio/portfolio-4.jpg" thumbnail />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Image src="./images/Portfolio/portfolio-5.jpg" thumbnail />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Image src="./images/Portfolio/portfolio-6.jpg" thumbnail />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Image src="./images/Portfolio/portfolio-7.jpg" thumbnail />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Image src="./images/Portfolio/portfolio-8.jpg" thumbnail />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Image src="./images/Portfolio/portfolio-9.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}
