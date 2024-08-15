import React from "react";
import "../Styles/CustomerCard.css";

function CustomerCard({ name, title, isSelected, onClick }) {
  return (
    <div
      className={`customer-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
}

export default CustomerCard;
