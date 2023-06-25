// IMPORT PACKAGES
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// IMPORT SHARED COMPONENTS
import PasswordType from "./../../shared/InputForm/PasswordType";
import EmailType from "./../../shared/InputForm/EmailType";

// IMPORT LOGO - LOCAL ASSETS
import logo from "./../../assets/logo/logo.png";

// IMPORT SHARED COMPONENTS
import MetaData from "./../../shared/MetaData";

// IMPORT SCSS
import "./Auth.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // FORM FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      return toast.warning("Invalid Email ID or Password");
    } catch (error) {
      toast.error("Invalid Entry Details Please Try Again!");
      console.log(error);
    }
  };

  return (
    <>
      <MetaData title={"NO:1 IT COMPANY IN INDIA AND UAE"} />

      <div className="__login">
        <form className="__form" onSubmit={handleSubmit}>
          <div>
            <div className="logo pb-3">
              <img src={logo} style={{ width: "250px" }} alt="IT 4 Supports" />
            </div>

            <div className="mb-3">
              <EmailType
                placeholder={"Registered Email ID"}
                name={"email"}
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <PasswordType
                placeholder={"Password"}
                name={"password"}
                value={password}
                handleChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3 d-flex justify-content-between">
              <Link className="btn btn-primary w-100 me-1" to="/">
                Home
              </Link>

              <button type="submit" className="btn btn-primary w-100 ms-1">
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
