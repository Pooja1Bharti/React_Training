import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Login.css";
import corp from "./images/corp.jpg";

function Login(props) {
  const navigate = useNavigate();

  const style = {
    backgroundImage: `url(${corp})`,
    backgroundSize: `cover`
  };

  const validateUserName = () => {
    var userName = document.getElementById("uname");
    if (userName.value.trim() == "") {
      userName.style.border = "3px solid rgb(182, 81, 81)";
      document.getElementById("user-error-label").innerHTML =
        '<span style="color:red">Username cannot be empty</span>';
      return false;
    } else {
      userName.style.border = "2px solid rgb(141, 221, 141)";
      document.getElementById("user-error-label").innerHTML = "";
      return true;
    }
  };

  const validatePassword = () => {
    var password = document.getElementById("password");
    if (password.value.trim() == "") {
      password.style.border = "2px solid rgb(182, 81, 81)";
      document.getElementById("pass-error-label").innerHTML =
        '<span style="color:red">Password cannot be empty</span>';
      return false;
    } else if (password.value.trim().length < 5) {
      password.style.border = "2px solid rgb(182, 81, 81)";
      document.getElementById("pass-error-label").innerHTML =
        '<span style="color:red">Password should have at least 5 characters</span>';
      return false;
    } else {
      password.style.border = "2px solid rgb(141, 221, 141)";
      document.getElementById("pass-error-label").innerHTML = "";
      return true;
    }
  };

  function validateInput(event) {
    event.preventDefault();
    if (validateUserName() && validatePassword()) {
      navigate("/dashboard", {
        state: {
          fname: document.getElementById("uname").value,
          pass: document.getElementById("password").value
        }
      });
    }
  }

  return (
    <>
      <div className="body">
        <div className="hero" style={style}>
          <div className="login-content">
            <br />
            <span className="heading">Already a member?</span>
            <br />
            <span className="login-text">Login</span>
            <br />
            <div className="innerdiv">
              <form
                name="login-form"
                className="login-form"
                id="login-form"
                onSubmit={validateInput}
              >
                <label id="user-error-label"></label>
                <br />
                <input
                  type="text"
                  className="textbox"
                  name="uname"
                  id="uname"
                  placeholder="User Name"
                  onBlur={validateUserName}
                />
                <br />
                <br />
                <label id="pass-error-label"></label>
                <br />
                <input
                  type="password"
                  className="textbox"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onBlur={validatePassword}
                />
                <label id="user-error-label"></label>
                <br />
                <br />
                <br />
                <br />
                <button type="submit" className="submitlogin">
                  Sign In{" "}
                </button>
                <p className="question">Do not have an account? </p>
                <Link to="/regForm">Create Account</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
