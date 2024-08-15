import React from "react";
import "../Styles/CustomerList.css";
import CustomerCard from "./CustomerCard";

function CustomerList({ customers, selectedCustomerId, onSelectCustomer }) {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          name={customer.name}
          title={customer.title}
          isSelected={selectedCustomerId === customer.id}
          onClick={() => onSelectCustomer(customer.id)}
        />
      ))}
    </div>
  );
}

export default CustomerList;
