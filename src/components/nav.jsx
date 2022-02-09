import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
      <Outlet />
    </div>
  );
};

export default Nav;
