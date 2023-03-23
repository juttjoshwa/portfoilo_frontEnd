import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

const AuthPage = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const If_the_user_authanticated_or_not = () => {};

  let Change = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/GetAllProjects");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // check if the password is correct
    if (password === "yashwa") {
      setIsAuthenticated(true);
      setIsAdmin(true);
    } else {
      setIsAuthenticated(true);
    }
  };

  if (isAuthenticated && isAdmin) {
    return navigate("/projectcreate");
  }
  if (isAuthenticated) {
    return navigate("/");
  }

  return (
    <div className="auth-page-container">
      <div
        data-aos="fade-up"
        data-aos-anchor=".other-element"
        data-aos-duration="1000"
      >
        <div className="customMargin">
          <h1 className="auth-title">Are you Admin</h1>
        </div>
        <p className="customMargin text-capitalize text-center">
          If AdminPass is not ture you will redirect to user page
          
        </p>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="customMargin">
              <input
                type="password"
                value={password}
                autoFocus
                className="form hoverEffect"
                onChange={(event) => setPassword(event.target.value)}
                id="inputPassword"
              />
              <button type="submit" className="auth-btn hoverEffect">
                Admin
              </button>
            </div>
          </form>
          <div className="customMargin">
            <button id="12m" className="auth-btn hoverEffect" onClick={handleClick}>
              View as a Client
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
