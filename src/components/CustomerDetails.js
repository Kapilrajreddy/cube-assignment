import React from "react";
import "../Styles/CustomerDetails.css";
import PhotoGrid from "./PhotoGrid";

function CustomerDetails({ customer = 1 }) {
  if (!customer) {
    return (
      <div className="customer-details">Select a customer to see details</div>
    );
  }

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <PhotoGrid />
    </div>
  );
}

export default CustomerDetails;
