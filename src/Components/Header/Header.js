import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import HeaderBox from "./HeaderBox";
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <Container fluid className="header-container">
      <Navbar />

      <Row>
        <Col className="title">
          <h1>Strong Digital Solutions with</h1>
          <span>KASUKA</span>
          <p>We are a team of talented digital marketers</p>
        </Col>
      </Row>

      <Row lg={5} md={3} sm={2} xs={1} className="headerBox-wrapper">
        <Col>
          <HeaderBox icon="insert_chart" text="Chart" />
        </Col>
        <Col>
          <HeaderBox icon="storefront" text="Demo text" />
        </Col>
        <Col>
          <HeaderBox icon="event_note" text="Portfolio" />
        </Col>
        <Col>
          <HeaderBox icon="sync_saved_locally" text="Final actions" />
        </Col>
        <Col>
          <HeaderBox icon="database" text="Saved information" />
        </Col>
      </Row>
    </Container>
  );
}
