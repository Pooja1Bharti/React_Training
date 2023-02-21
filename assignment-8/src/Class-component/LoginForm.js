import React, { Component } from "react";

export class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1> Welcome to UST </h1>
        <h3>Sign Up </h3>

        <h4>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          ></input><br/>
           <input
            type="text"
            name="emailId"
            placeholder="emailId"
            required
          ></input><br/>
          <input type="password" name="password"  placeholder="password " required ></input>

        </h4>
        <h7>
            <input type= "submit" name ="save" ></input>
        </h7>
      </div>
    );
  }
}

export default LoginForm;
