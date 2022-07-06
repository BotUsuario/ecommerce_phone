import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src="/assets/images/contact.png"
              alt="Contact Us"
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John Doe"
                />
              </div>
              <div class="mb-3">
                <label htmlFor="exampleFormControlInput2" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput2  "
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label htmlFor="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
