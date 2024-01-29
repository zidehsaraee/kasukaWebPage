import React from "react";
import "./Team.css";
import { Container, Row, Col } from "react-bootstrap";
import TeamItem from "./TeamItem";
import Aos from "aos";

export default function Team() {
  Aos.init({
    duration: 2000,
  });
  const teamInfo = [
    {
      id: 1,
      image: "/images/Team/team-1.jpg",
      name: "William Anderson",
      role: "CTO",
    },
    {
      id: 2,
      image: "/images/Team/team-2.jpg",
      name: "Sara Jonson",
      role: "Product manager",
    },
    {
      id: 3,
      image: "/images/Team/team-3.jpg",
      name: "Walter white",
      role: "Top manager",
    },
    {
      id: 4,
      image: "/images/Team/team-4.jpg",
      name: "Amanda Japson",
      role: "Accounter",
    },
  ];

  return (
    <Container className="team-container" id="Team">
      <h2>Our team</h2>
      <p className="team-title">See our team</p>
      <Row xs={1} sm={2} md={3} lg={4} xl={4}>
        {teamInfo.map((teamMember) => (
          <Col key={teamMember.id} data-aos="zoom-in" data-aos-delay="400">
            <TeamItem {...teamMember} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
