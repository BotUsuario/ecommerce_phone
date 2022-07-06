import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About us</h1>
            <hr />
            <p className="lead">
              Mobile commerce, also called m-commerce, includes any monetary
              transaction completed using a mobile device, such as a cell phone
              or tablet. It is an advancement of ecommerce, enabling people to
              buy and sell goods or services from almost anywhere, simply using
              a mobile phone or tablet device. But mobile commerce is more than
              just a simple evolution of electronic commerce.
            </p>
            <ul className="text-secondary py-2">
              <li>Mobile money transfers.</li>
              <li>Electronic ticketing and boarding passes.</li>
              <li>Digital content purchases and delivery.</li>
              <li>Mobile banking.</li>
              <li>Contactless payments and in-app payments.</li>
              <li>Contactless payments and in-app payments.</li>
            </ul>
            <NavLink to="/contact" className="btn btn-outline-primary">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6">
            <img
              src="/assets/images/about.png"
              alt="About us"
              height="400ox"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
