import React from "react";
import "./HeaderBox.css";

export default function HeaderBox(props) {
  return (
    <div className="header-box">
      <span class="material-symbols-outlined">{props.icon}</span>
      <a href="#">
        <p>{props.text}</p>
      </a>
    </div>
  );
}
