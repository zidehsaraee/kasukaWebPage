import React from "react";
import "./Services.css";
import ServiceItem from "./ServiceItem";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";

export default function Services() {
  AOS.init({
    duration: 2000,
  });
  return (
    <Container className="services-container" id="Services">
      <div data-aos="fade-up">
        <h2>Services</h2>
        <p className="services-title">See our services</p>
      </div>
      <Row lg={3} md={2} sm={1} xs={1} data-aos="zoom-in">
        <Col>
          <ServiceItem
            icon="acute"
            title="Digital Strategy"
            text="Tailored digital strategies crafted to maximize your online presence and drive meaningful engagement with your target audience."
          />
        </Col>
        <Col>
          <ServiceItem
            icon="sports_basketball"
            title="Content Creation"
            text="Compelling content designed to captivate your audience and convey your brand's message with creativity and authenticity."
          />
        </Col>
        <Col>
          <ServiceItem
            icon="public"
            title="Social Media Management"
            text="Strategic social media management to amplify your brand's voice, and cultivate meaningful connections."
          />
        </Col>
        <Col>
          <ServiceItem
            icon="live_tv"
            title="SEO Optimization"
            text="Comprehensive SEO solutions to improve your website's visibility, increase organic traffic, and enhance your online search presence."
          />
        </Col>
        <Col>
          <ServiceItem
            icon="article"
            title="Email Marketing"
            text="Targeted email campaigns designed to build customer relationships, and drive conversions with personalized content and automation."
          />
        </Col>
        <Col>
          <ServiceItem
            icon="account_balance"
            title="Analytics & Reporting"
            text="Actionable insights and in-depth analytics to measure ROI, and optimize marketing efforts for continuous improvement."
          />
        </Col>
      </Row>
    </Container>
  );
}
