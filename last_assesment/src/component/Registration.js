import React from 'react'
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/joy/Checkbox';
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";

function Registration() {
    const validationSchema = yup.object({
        email: yup
          .string('Enter your email id')
          .email('Enter a valid email')
          .required('Email is required'),
        phoneNumber: yup
          .string('Enter your phone number')
          .email('Enter a valid phone Number')
          .required('Phone Number is required'),
        
      });
      const navigate = useNavigate();
      function navigateHandler() {
          navigate("/password");
      }
      
      const WithMaterialUI = () => {
        const formik = useFormik({
          initialValues: {
            email: '',
            phoneNumber:'',
           
          },
          validationSchema: validationSchema,
          onSubmit :(values, props) => {console.log(values);}
          
        });   
       
    
    
  return (
    <div style={{textAlign: "center"}}>
        <h1>Registration Form</h1><br/>
    
        <form >
        First Name :<TextField required id="outlined-required" label="Required"
          
        /><br/>
        <br/>
        Last Name :<TextField required id="outlined-required" label="Required"
         
        /><br/>
        <br/>
        Email : <TextField
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br/>
        <br/>
        Phone Number :<TextField required id="phoneNumber"
         name="phoneNumber"  
        /><br/>
        <br/>
       Age :<TextField required id="outlined-required" label="Required"
          
        /><br/>
        <br/>
        <Box>
        Gender:<Radio value="male" label="Male" name="radio-buttons" />
            <Radio value="male" label="Female" name="radio-buttons" />
        </Box>
        <br/>
        <br/>
        Skills: 
        <Checkbox label="React" variant="outlined"  />&nbsp;
        <Checkbox label="PHP" variant="outlined"  />&nbsp;
        <Checkbox label="Java " variant="outlined"  />
        <br/>
        <br/>
        
        <Stack direction="row" spacing={5} justifyContent="center">
        <Button onClick={navigateHandler} type='submit' variant="contained" color="success" >Submit</Button>
        
         </Stack>
        </form>
         </div>
  )
      };
      ReactDOM.render(<WithMaterialUI />, document.getElementById('root'));

}

export default Registration