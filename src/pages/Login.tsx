import React, { useState } from "react";
import "../styles/login.scss";
import { assets } from "../assets";
import {Link} from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <main id="login">
      <section className="banner-section">
        <div className="header">
          <img src={assets.icons.logo} alt="" className="logo" />
        </div>
        <img src={assets.images.banner} className="banner" alt="" />
      </section>
      <section className="form-section">
        <div className="holder">
          <h1>Welcome!</h1>
          <h4>Enter details to login</h4>
          <form action="" className="form">
            <div className="input-fields">
              <input
                type="text"
                required
                placeholder="Email"
                name="email"
                id=""
              />
            </div>
            <div className="input-fields">
              <input
                required
                type={showPassword ? "password" : "text"}
                placeholder="Password"
                name="password"
                id=""
              />
              <p
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {!showPassword ? "Hide" : "Show"}
              </p>
            </div>
            <p>FORGOT PASSWORD ?</p>
            <Link to={'../dashboard'}>
              <button type={"button"} className="login-button">
                LOG IN
              </button>
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
