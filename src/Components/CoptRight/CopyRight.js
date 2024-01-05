import React from "react";
import "./CopyRight.css";
import { Container, Row, Col } from "react-bootstrap";

export default function CopyRight() {
  return (
    <Container className="copy-right-container pt-4 pb-4" fluid>
      <Row>
        <Col className="d-flex justify-content-center flex-column align-items-center">
          <p>Copyright statement © 2024</p>
          <p>Built with <span>Moein</span></p>
        </Col>
      </Row>
    </Container>
  );
}
