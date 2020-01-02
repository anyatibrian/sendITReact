import React from "react";
import { Link } from "react-router-dom";
const RegisterComponent = props => {
  const {
    errors,
    username,
    email,
    password,
    confirmPassword,
    onChange,
    onSubmit,
    hidden,
    onToggle,
    isLoading
  } = props;
  return (
    <div className="row mt-5">
      <div className="col col-lg-6 col-md-5" />
      <div className="col col-lg-5 col-md-6">
        <div className="">
          <form onSubmit={onSubmit} className="form">
            <h2 className="header-login"> Register </h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                value={username}
                onChange={onChange}
                placeholder="username"
              />
              <p>
                {errors.username.length > 0 ? (
                  <span> {errors.username}</span>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                className="form-control"
                value={email}
                onChange={onChange}
                id="email"
                placeholder="johdoe@gmail.com"
              />
              <p>
                {errors.email.length > 0 ? <span>{errors.email}</span> : ""}
              </p>
            </div>
            <div className="form-group">
              <input
                type={hidden ? "text" : "password"}
                name="password"
                className="form-control"
                value={password}
                id="password"
                onChange={onChange}
                placeholder="password"
                onClick={onToggle}
              />
              {errors.password.length > 0 ? (
                <span style={{ color: "white" }}>{errors.password}</span>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={confirmPassword}
                id="passwordConfirm"
                onChange={onChange}
                placeholder="passwordConfirm"
              />
              {errors.confirmPassword.length > 0 ? (
                <span style={{ color: "white" }}>{errors.confirmPassword}</span>
              ) : (
                ""
              )}
            </div>

            <input
              type="submit"
              className="btn btn-success login-button"
              value={isLoading?"loading....":"register"}
            />
            <p className="">
              <Link to="/" id="Link">
                Already have an account ,login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="col col-lg-1" />
    </div>
  );
};
export default RegisterComponent;
