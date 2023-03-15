import TextField from '@material-ui/core/TextField';
import React from 'react'
import './styles/Setpassword.css'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';

function Setpassword() {

    
    const confirmPasswordValidate = (e) => {
        e.preventDefault()
        var password1 = document.getElementById("pass");
        var password2 = document.getElementById("confirmPass");
        console.log(password1);
        console.log(password2);
      
        if (password1.value != password2.value) {
          password1.style.border = "3px solid red";
          password2.style.border = "3px solid red";
          document.getElementById("pass-error-label").innerHTML =
            '<span style="color:red">Passwords do not match!</span>';
          return false;
        } else {
          password1.style.border = "1px solid rgb(206, 203, 203)";
          password2.style.border = "1px solid rgb(206, 203, 203)";
          document.getElementById("pass-error-label").innerHTML = "";
          return true;
        }
      }

      const validationSchema = yup.object({
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required')
          .matches(/[a-zA-Z0-1]/, 'Password should contain at least one number and one uppercase and lowercase letter'),
          changepassword:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
      });

      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });

  return (
    <div className='wrap-div'>
         <form className='passform'>
            <h3>Please set your password</h3>
       {/*  <input
          type="text"
          className="full-span-text"
          placeholder="Username"
          id="uName"
        />
        <br /><br />
        <input
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
        />
        <label id="pass-error-label"></label>
<br /><br />
        <button
          type="submit"
          id="submit-button"
          className="submit-button"
          value="Submit"
          onClick={confirmPasswordValidate}
        >Submit</button>
        <br />
        <br /> */}

        <TextField
          
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
<br />
        <TextField
          
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <br />
        <TextField
          
          id="changepassword"
          name="changepassword"
          label="Confirm Password"
          type="password"
          value={formik.values.changepassword}
          onChange={formik.handleChange}
          error={formik.touched.changepassword && Boolean(formik.errors.changepassword)}
          helperText={formik.touched.changepassword && formik.errors.changepassword}
        />
        <br /><br />
         <Button color="primary" variant="contained" fullWidth type="submit" style={{backgroundColor : 'rgb(60, 129, 96)', width:'60%'}}>
          Submit
        </Button>
        <br /><br />
        </form>
    </div>
  )
}

export default Setpassword