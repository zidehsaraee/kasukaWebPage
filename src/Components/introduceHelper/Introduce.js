import React from "react";
import "./Introduce.css";

export default function Introduce(props) {
  return (
    <div className="introduce-container">
      <div className={props.classStyle}>
        <span className="material-symbols-outlined">{props.icon}</span>
      </div>
      <div className="introduce-text">
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
