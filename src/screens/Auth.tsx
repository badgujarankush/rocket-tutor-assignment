import React from "react";
import { Link, Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="authContainer">
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Auth;
