import React from 'react'
import { useState } from 'react';

function LoginFunction(props) {
    //destructuring
    const {Organization, Location, onButtonClicked}= props;
    const [getLocation , setLocation]= useState(Location)

    const buttonClicked= () =>{
       const location= getLocation
       console.log(location);
        setLocation("Pune");
        onButtonClicked("Thank you for succesfully completing the registration...");
    }
  return (
    <div>
   {/* <h1> Welcome to {props.Organization}  {props.Location}</h1>*/}
   <h1> Welcome to {Organization}  {Location}</h1>
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
    <h5>
        <button onClick={buttonClicked} >Save</button>
    </h5>
  </div>

  )
}

export default LoginFunction