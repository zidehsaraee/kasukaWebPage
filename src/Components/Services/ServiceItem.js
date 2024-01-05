import React from "react";
import "./ServiceItem.css";

export default function ServiceItem(props) {
  return (
    <div className="serviceItem-wrapper">
      <div className="serviceItem-icon">
        <span class="material-symbols-outlined">{props.icon}</span>
      </div>
      <div className="serviceItem-content">
        <h4 className="serviceItem-title">{props.title}</h4>
        <p className="serviceItem-text">{props.text}</p>
      </div>
    </div>
  );
}
