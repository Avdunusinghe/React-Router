import React, { Component } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getInvoices } from "./../fakeData/data";

const Invoices = () => {
  let invoices = getInvoices();
  console.log(invoices);

  return (
    <div>
      <h2>Invoices</h2>
      {invoices.map((invoice) => (
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/invoices/${invoice.number}`}
          key={invoice.number}
        >
          {invoice.name}
        </Link>
      ))}
      <Outlet />
    </div>
  );
};

export default Invoices;
