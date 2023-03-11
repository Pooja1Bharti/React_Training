import React from 'react'
import { Grid,Paper,Avatar, TextField, FormControlLabel, Checkbox, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, useNavigate } from "react-router-dom";
import {Formik,Form,Field,ErrorMessage} from 'formik' 
import * as Yup from 'yup'
import { ErrorResponse } from '@remix-run/router';
function Login() {
    
   
    const paperStyle ={padding:20,height:'70vh',width:280,margin:"20px auto",backgroundColor:'#8899bc52'};
    const avatarStyle ={backgroundColor:'#1c0f75b8'}
    const btstyle ={margin:'8px 0'}
    const initialValues={
        username :'',
        Password :'',
        Remember:false
    }
    const navigate = useNavigate();
    function navigateHandler() {
        navigate("/dashboard");
    }
    const validationSchema =Yup.object().shape({
        username:Yup.string().email('enter valid email').required("Required Field"),
        Password : Yup.string().required("Password must not be empty")
    })
    const onSubmit=(values,props)=>{
        console.log(values)
        setTimeout(()=>{
            props.resetForm()
            props.setSubmitting(false)},2000)
        
        console.log(props)
    }
  return (
      <Grid>
          <Paper elevation ={10} style={paperStyle}>
             <Grid align ='center'>
             <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
             <h2>Log In</h2>
             </Grid>
             <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                 {
                     (props)=>(
                     <Form>
                        
             <Field as= {TextField} label='UserName'name="username"
             placeholder='Enter Username'fullWidth required
             helperText={<ErrorMessage name="username"/>}
             />
              <Field as= {TextField} label='Password'type="password"
             placeholder='Enter Username'fullWidth required
             helperText={<ErrorMessage name="password"/>}
             />
             <Field as ={FormControlLabel} 
             name ='Remember'
             control={
                 <Checkbox
                 
                
                 color="primary"
                 />
             }
             label="Remember Me"
             />
             <Button onClick={navigateHandler} type ='submit'color='primary' variant="contained"disabled={props.isSubmitting}
              style={btstyle}fullWidth>{props.isSubmitting?"Loading":"Submit"}</Button>
                       
                         </Form>)

                 }
             </Formik>
            
             <Typography>
                 <Link href="#">ForgotPassword??</Link>
             </Typography>
             <Typography>New User : 
             <Link to="/register">Create new Account</Link>
             </Typography>
          </Paper>
      </Grid>
  )
}

export default Login
