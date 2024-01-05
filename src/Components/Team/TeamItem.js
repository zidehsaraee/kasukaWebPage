import React from "react";
import "./TeamItem.css";
import { Card } from "react-bootstrap";

export default function TeamItem(props) {
  return (
    <Card className="TeamItem-wrapper">
      <Card.Img className="team-item-image" variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className="team-item-role">{props.role}</Card.Text>
      </Card.Body>
    </Card>
  );
}
