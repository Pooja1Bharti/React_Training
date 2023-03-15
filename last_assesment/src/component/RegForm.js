import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/RegForm.css";
import corp from "./images/corp.jpg";

function RegForm(props) {
  const { onSubmitForm, inputData } = props;

  var [sInputData, setSInputData] = useState(inputData);

  const style = {
    backgroundImage: `url(${corp})`,
    backgroundSize: `cover`
  };

  const navigate = useNavigate();

  const handler = () => {
    navigate("/setpassword", {
      state: {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        // dob : document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        email: document.getElementById("email").value,
        number: document.getElementById("pnum").value
        // address : document.getElementById("addr").value
      }
    });
  };

  const validateFirstName = () => {
    // getInputValues();
    var firstName = document.getElementById("fname");

    if (firstName.value.trim() == "") {
      firstName.style.border = "3px solid red";
      document.getElementById("first-error-label").innerHTML =
        '<span style="color:red">First Name cannot be empty</span>';
      return false;
    } else {
      firstName.style.border = "2px solid rgb(141, 221, 141)";
      document.getElementById("first-error-label").innerHTML = "";
      //   getInputValues();
      return true;
    }
  };

  const validateLastName = () => {
    var lastName = document.getElementById("lname");
    if (lastName.value.trim() == "") {
      lastName.style.border = "3px solid red";
      document.getElementById("last-error-label").innerHTML =
        '<span style="color:red">Last Name cannot be empty</span>';
      return false;
    } else {
      lastName.style.border = "2px solid rgb(141, 221, 141)";
      document.getElementById("last-error-label").innerHTML = "";
      return true;
    }
  };

  const validateDOB = () => {
    var dob = document.getElementById("dob");

    if (dob.value.trim() == "") {
      dob.style.border = "3px solid red";
      document.getElementById("dob-error-label").innerHTML =
        '<span style="color:red">Please enter your Birthday</span>';
      return false;
    } else {
      dob.style.border = "2px solid rgb(141, 221, 141)";
      document.getElementById("dob-error-label").innerHTML = "";
      return true;
    }
  };

  const validateGender = () => {
    var gender = document.getElementById("gender");
    console.log(gender.value);

    if (gender.value.trim() == "gender") {
      gender.style.border = "3px solid red";
      document.getElementById("gender-error-label").innerHTML =
        '<span style="color:red">Gender is required</span>';
      return false;
    } else {
      gender.style.border = "2px solid rgb(141, 221, 141)";
      document.getElementById("gender-error-label").innerHTML = "";
      return true;
    }
  };

  const validateEmail = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email = document.getElementById("email");
    if (email.value.match(validRegex)) {
      email.style.border = "2px solid rgb(141, 221, 141)";
      document.getElementById("email-error-label").innerHTML = "";
      return true;
    } else {
      email.style.border = "3px solid red";
      document.getElementById("email-error-label").innerHTML =
        '<span style="color:red">Please provide a proper email address</span>';
      return false;
    }
  };

  const validatePhoneNumber = () => {
    var phnNumber = document.getElementById("pnum");
    if (phnNumber.value.trim().length == 10) {
      phnNumber.style.border = "2px solid rgb(141, 221, 141)";
      document.getElementById("phone-error-label").innerHTML = "";
      return true;
    } else {
      phnNumber.style.border = "3px solid red";
      document.getElementById("phone-error-label").innerHTML =
        '<span style="color:red">Please enter a 10 digit mobile number</span>';
      return false;
    }
  };

  const validateNationality = () => {
    if (
      window.getComputedStyle(document.querySelector("#toggle"))
        .backgroundColor == "rgb(141, 221, 141)"
    ) {
      console.log("Indian");
    }
  };

  const validateAccountType = () => {
    var account = document.getElementsByName("account");
    var flag = false;

    for (var i = 0; i < account.length; i++) {
      if (account[i].checked) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    return flag;
  };

  const validateAddress = () => {
    var address = document.getElementById("addr");
    if (address.value.trim() == "") {
      address.style.border = "3px solid red";
      document.getElementById("addr-error-label").innerHTML =
        '<span style="color:red">Address should not be empty</span>';
      return false;
    } else {
      address.style.border = "2px solid rgb(141, 221, 141)";
      document.getElementById("addr-error-label").innerHTML = "";
      return true;
    }
  };

  // const confirmPasswordValidate = () => {
  //   var password1 = document.getElementById("pass");
  //   var password2 = document.getElementById("confirmPass");
  //   console.log(password1);
  //   console.log(password2);

  //   if (password1.value != password2.value) {
  //     password1.style.border = "3px solid red";
  //     password2.style.border = "3px solid red";
  //     document.getElementById("pass-error-label").innerHTML =
  //       '<span style="color:red">Passwords do not match!</span>';
  //     return false;
  //   } else {
  //     password1.style.border = "1px solid rgb(206, 203, 203)";
  //     password2.style.border = "1px solid rgb(206, 203, 203)";
  //     document.getElementById("pass-error-label").innerHTML = "";
  //     return true;
  //   }
  // }

  const disclaimer = () => {
    if (document.getElementById("agree").checked) {
      return true;
    } else {
      return false;
    }
  };

  const enableButton = () => {
    if (
      validateFirstName() &&
      validateLastName() &&
      // validateDOB() &&
      validateGender() &&
      validateEmail() &&
      validatePhoneNumber() &&
      // validateAccountType() &&
      // validateAddress() &&
      // confirmPasswordValidate() &&
      disclaimer
    ) {
      document.getElementById("submit").disabled = false;
    }
  };

  const getInputValues = (event) => {
    event.preventDefault();
    console.log(sInputData);
    var accountName;
    var account = document.getElementsByName("account");

    for (var i = 0; i < account.length; i++) {
      if (account[i].checked) {
        accountName = account[i].value;
        console.log("account:::", accountName);
      }
    }
    const inputValues = {
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      dob: document.getElementById("dob").value,
      gender: document.getElementById("gender").value,
      email: document.getElementById("email").value,
      number: document.getElementById("pnum").value,
      address: document.getElementById("addr").value,
      account: accountName
    };
    console.log(inputValues);
    sInputData = inputValues;

    onSubmitForm(sInputData);
    return inputValues;
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div className="container-div" style={style}>
      <div className="left-section">
        <br />
        <form
          name="register-form"
          className="register-form"
          id="register-form"
          onSubmit={handler}
        >
          <h3>Sign Up</h3>
          <input
            type="text"
            className="half-span-text"
            name="fname"
            id="fname"
            placeholder="First Name"
            onBlur={validateFirstName}
          />
          <label id="first-error-label"></label>

          <input
            type="text"
            className="half-span-text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            onBlur={validateLastName}
          />
          <label id="last-error-label"></label>
          <br />
          <br />
          {/* <input
          type="date"
          name="dob"
          className="half-span-text"
          placeholder="DOB"
          id="dob"
          onBlur={validateDOB}
        />
        <label id="dob-error-label"></label> */}

          <select
            className="half-span-text"
            name="gender"
            id="gender"
            title="gender"
            onBlur={validateGender}
          >
            <option className="option" value="gender" defaultValue="Gender">
              Gender
            </option>

            <option className="option" value="female">
              Female
            </option>

            <option className="option" value="male">
              Male
            </option>

            <option className="option" value="custom">
              Custom
            </option>
          </select>
          <label id="gender-error-label"></label>
          <br />
          <br />
          <input
            type="email"
            name="email"
            className="full-span-text"
            placeholder="Email"
            id="email"
            onBlur={validateEmail}
          />
          <label id="email-error-label"></label>
          <br />
          <br />
          <input
            type="number"
            name="pnum"
            className="full-span-text"
            placeholder="Mobile Number"
            id="pnum"
            onBlur={validatePhoneNumber}
          />
          <label id="phone-error-label"></label>
          <br />
          <br />
          <input
            type="number"
            name="age"
            className="full-span-text"
            placeholder="Age"
            id="age"
          />
          {/* <textarea
          className="address"
          rows="3"
          cols="39"
          name="address"
          id="addr"
          form="register-form"
          placeholder="Address"
          onBlur={validateAddress}
        >
        </textarea>
        <label id="addr-error-label"></label> */}
          <br />

          {/*         
        <label className="labels">Account Type:</label>
        <input
          type="radio"
          name="account"
          id="regular"
          value="regular"
        /><label htmlFor="regular" className="radio-label">Regular</label>&nbsp;
        <input
          type="radio"
          name="account"
          id="premium"
          value="premium"
        /><label htmlFor="premium" className="radio-label">Premium</label>
        <br /><br /> */}

          <label className="labels">Skills:</label>
          <br />
          <input type="checkbox" name="skills" id="html" value="html" />
          <label htmlFor="html" className="radio-label">
            HTML
          </label>
          <br />
          <input type="checkbox" name="skills" id="css" value="css" />
          <label htmlFor="css" className="radio-label">
            CSS
          </label>
          <br />
          <input
            type="checkbox"
            name="skills"
            id="javascript"
            value="javascript"
          />
          <label htmlFor="javascript" className="radio-label">
            Javascript
          </label>
          <br />
          <input type="checkbox" name="skills" id="react" value="react" />
          <label htmlFor="react" className="radio-label">
            React
          </label>
          <br />
          <br />

          {/* <input
          type="password"
          className="full-span-text"
          placeholder="Password"
          id="pass"
        />
        <br />
        <br />
        <input
          type="password"
          className="full-span-text"
          placeholder="Confirm Password"
          id="confirmPass"
          onBlur={confirmPasswordValidate}
        />
        <label id="pass-error-label"></label>
        <br /><br /><br /> */}
          <input type="checkbox" id="agree" onClick={enableButton} />
          <span className="radio-label">
            All the above mentioned information are correct{" "}
          </span>
          <br />
          <br />
          <button
            type="submit"
            id="submit"
            className="submit"
            value="Create account"
            disabled
          >
            Create account
          </button>
          <br />
          <br />
          <span className="radio-label">Already have an account? </span>
          <Link to="/">Log In</Link>
        </form>
      </div>
    </div>
  );
}

export default RegForm;
