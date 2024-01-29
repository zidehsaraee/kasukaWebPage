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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            sollicitudin est vitae nulla tincidunt accumsan. Proin id lobortis
            mauris. Vestibulum placerat ipsum diam, ac varius sapien tempor
            viverra. Nam quis ex ac odio sodales maximus. Pellentesque vel arcu
            et sapien consectetur tempus ut ut dolor. Ut vitae nulla id felis
            condimentum rhoncus. Proin dictum, lacus vitae gravida imperdiet,
            odio mi faucibus est, sed malesuada tortor nulla vel dolor. Integer
            et justo sodales, egestas lectus vitae, dictum augue. Praesent
            commodo pharetra tortor eu ornare. Proin tristique tincidunt ligula,
            sed congue felis ultricies a. Ut dui felis, vestibulum non dui eu,
            porttitor facilisis urna. Sed sagittis nulla non est placerat
            ultricies. Quisque aliquam vulputate nisi quis eleifend. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin est
            vitae nulla tincidunt accumsan. Proin id lobortis mauris. Vestibulum
            placerat ipsum diam, ac varius sapien tempor viverra.
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
