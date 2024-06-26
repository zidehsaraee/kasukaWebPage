import React from "react";
import "./Innovation.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Aos from "aos";

export default function Innovation() {
  Aos.init({ duration: 2000 });
  return (
    <Container fluid className="innovation-container">
      <Row>
        <Col data-aos="zoom-in-up">
          <Card className="bg-dark text-white text-center ">
            <Card.ImgOverlay>
              <Card.Title>Innovation</Card.Title>
              <Card.Text>
                Innovation is at the heart of everything we do, driving us to
                push boundaries and pioneer new approaches in marketing.
              </Card.Text>
              <Button variant="outline-light">Innovation for action</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
