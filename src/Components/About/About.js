import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";

export default function About() {
  AOS.init({
    duration: 2000,
  });
  return (
    <Container className="about-container" id="About">
      <Row lg={2} md={1} sm={1} xs={1}>
        <Col className="about-text" data-aos="zoom-in-right">
          <h3>Our Company</h3>
          <p>
            Welcome to our company, your trusted partner in the ever-evolving
            world of marketing. Established in 2014, we have been on a mission
            to redefine the way brands connect with their audiences and drive
            business growth. With a relentless passion for innovation and a
            commitment to excellence, we have emerged as a leading force in the
            industry, delivering tailored marketing solutions that resonate with
            consumers and deliver measurable results. At our company, we
            believe in the power of collaboration, creativity, and strategic
            thinking to unlock the full potential of every brand we work with.
            Our team of seasoned professionals brings together a wealth of
            experience and expertise across various disciplines, allowing us to
            offer a comprehensive suite of services tailored to meet the unique
            needs of each client. From brand development and digital marketing
            to content creation and social media management, we offer end-to-end
            solutions designed to elevate your brand and drive meaningful
            engagement. By combining cutting-edge technology with
            tried-and-tested strategies, we help our clients navigate the
            complexities of the digital landscape and stay ahead of the
            competition.
          </p>
        </Col>
        <Col className="about-image" data-aos="zoom-out">
          <img
            src={process.env.PUBLIC_URL + "/images/About/about.jpg"}
            alt="About"
          />
        </Col>
      </Row>
    </Container>
  );
}
