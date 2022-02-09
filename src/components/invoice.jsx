import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { getInvoices } from "./../fakeData/data";

const Invoice = () => {
  let params = useParams();
  let invoice = getInvoices(parseInt(params.invoiceId, 10));
  console.log(params);
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </div>
  );
};

export default Invoice;
