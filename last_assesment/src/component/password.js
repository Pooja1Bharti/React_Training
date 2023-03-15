import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Password() {
  return (
    <div style={{textAlign: "center"}}>
        <h1>Set Password</h1>
        <br/>
        <br/>
        User Name :<TextField required id="outlined-required" label="Required"
          
        /><br/>
        <br/>
        Password:  <TextField
          id="outlined-password-input"
          label="Required"
          type="password"
          autoComplete="current-password"
        /><br/><br/><br/>
        
        Confirm Password:  <TextField
          id="outlined-password-input"
          label="Required"
          type="password"
          autoComplete="current-password"
        /><br/><br/>
        <Stack direction="row" spacing={5} justifyContent="center">
        <Button type='submit' variant="contained" color="success" >Login</Button>
         </Stack>

    </div>
  )
}

export default Password