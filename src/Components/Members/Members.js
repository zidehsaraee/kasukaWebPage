import React from "react";
import "./Members.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import AOS from "aos";
export default function Members() {
  AOS.init({
    duration: 2000,
  });
  return (
    <Container fluid className="members-container">
      <Row>
        <Col data-aos="zoom-in-up" data-aos-delay="200">
          <Card className="bg-dark text-white text-center">
            <Card.ImgOverlay className="member-content-wrapper">
              <Image
                src={process.env.PUBLIC_URL + "/images/Members/Member-1.jpg"}
                className="member-image"
                roundedCircle
              />
              <Card.Title className="member-name">Sara wilson</Card.Title>
              <Card.Title className="member-role">Manager</Card.Title>
              <Card.Text className="member-text">
                <i class="bi bi-quote normal"></i>
                Sara's expertise in marketing strategies ensures our clients'
                success in every campaign. Her analytical skills and creative
                approach allow her to develop and execute marketing plans that
                deliver outstanding results.
                <i class="bi bi-quote rotate"></i>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
