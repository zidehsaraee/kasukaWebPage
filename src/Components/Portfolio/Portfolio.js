import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { portfoliosImg } from "../../datas";
import "./Portfolio.css";
import AOS from "aos";

export default function Portfolio() {
  AOS.init({
    duration: 2000,
  });

  return (
    <Container className="portfolio-container" id="Portfolio">
      <div data-aos="zoom-in-up">
        <h2>Portfolios</h2>
        <p className="portfolio-title">See our portfolios</p>
      </div>
      <Row className="portfolioGallery">
        {portfoliosImg.map((portfolio) => (
          <Col key={portfolio.id} lg={4} md={6} sm={12} data-aos="zoom-in-up">
            <Image
              className="galleryImg"
              src={process.env.PUBLIC_URL + portfolio.imgPath}
              thumbnail
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
