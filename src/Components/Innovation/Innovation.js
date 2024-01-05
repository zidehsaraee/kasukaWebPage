import React from "react";
import "./Innovation.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Innovation() {
  return (
    <Container fluid className="innovation-container">
      <Row>
        <Col>
          <Card className="bg-dark text-white text-center ">
            <Card.ImgOverlay>
              <Card.Title>Innovation</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. 
              </Card.Text>
              <Button variant="outline-light">Innovation for action</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
