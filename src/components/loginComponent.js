import React from "react";
import { Link } from "react-router-dom";
export const LoginComponent = (props) => {
  const {
    username,
    password,
    handleChange,
    handleSubmit,
    isLoading
  }= props;
  return (
    <div className="login-container">
      <div className="row mt-5">
        <div className="col col-lg-6 col-md-6" />
        <div className="col col-lg-5 col-md-3">
          <div className="">
            <form method="POST" onSubmit={handleSubmit} className="form">
              <h2 className="header-login"> Login </h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <input
                type="submit"
                className="btn btn-success login-button"
                value={isLoading?"loading":"login"}
              />
              <p className="">
                <Link to="/register" id="Link">
                  Don't have an account yet, create one
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="col col-lg-1 col-md-1" />
      </div>
    </div>
  );
};
