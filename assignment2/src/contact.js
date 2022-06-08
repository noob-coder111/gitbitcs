import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row box">
          <h1>Contact Us</h1>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              ></input>
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Your Name"
              ></input>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              ></input>
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
