// src/App.js
import React, { useState } from "react";
import "./App.css";
import CustomerDetails from "./components/CustomerDetails";
import CustomerList from "./components/CustomerList";
import { customersData } from "./CustomerData";

function App() {
  const [selectedCustomerId, setSelectedCustomerId] = useState(1);

  const selectedCustomer =
    customersData.find((customer) => customer.id === selectedCustomerId) || 1;

  return (
    <div className="app">
      <div className="customer-list-container">
        <CustomerList
          customers={customersData}
          selectedCustomerId={selectedCustomerId}
          onSelectCustomer={setSelectedCustomerId}
        />
      </div>
      <div className="customer-details-container">
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
}

export default App;
