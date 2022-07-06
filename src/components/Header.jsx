import React from "react";
import { NavLink } from "react-router-dom";
import CardBtn from "./buttons/CardBtn";
import Login from "./buttons/Login";
import SingUp from "./buttons/SingUp";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
            <img src="https://media.istockphoto.com/vectors/online-shop-logo-design-template-vector-id1150644423?k=20&m=1150644423&s=612x612&w=0&h=xKnuj3AhBbMAjxnJdT6Mh7o4BDIGaEwyol33tRwG7mU=" width='40' height='40' alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <span className="navbar-text fw-bold pr-10">Ecommerce Phone</span>
                <Login />
                <SingUp />
                <CardBtn />
          </div>

        </div>
      </nav>
    </>
  );
};

export default Header;
