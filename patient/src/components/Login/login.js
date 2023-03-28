import React from 'react'
import { Grid,Paper, TextField, Button,Link, Typography } from '@material-ui/core'
// import './navBar/styles.css'
import Header from './header.js'


const Login=()=>{

    const paperStyle={padding :20,height:'40vh',width:350, margin:"20px auto", backgroundColor:'#20CD51'}
    const btnstyle={ backgroundColor:'#20CD51', left:'45%', width:'150px', borderRadius: 50}
    return(
        <div>
            <Header />
            <Grid style={{margin:"120px 0 20px  0"}}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <h2 style={{color:"white", fontWeight:"bold"}}>Log In</h2>
                    </Grid>
                    <TextField InputProps={{ disableUnderline: true }} style={{background:'white', borderRadius: 50, margin:'3px', height:'40px'}} placeholder='   Enter Email' fullWidth required />
                    <TextField InputProps={{ disableUnderline: true }} style={{background:'white', borderRadius: 50, margin:'4px', height:'40px'}} placeholder='   Enter password' type='password' fullWidth required />
                    {/* <Typography > */}
                        <Link href="#" style={{color:'white', textDecoration:'underline', fontStyle:"italic"}}>
                            Forgot password ?
                        </Link>
                    {/* </Typography> */}
                    {/* <Typography >  */}
                        <Link href="#"  style={{color:'white', margin:"0 0 0 145px", fontWeight:"bold"}}>
                            Sign Up 
                    </Link>
                    {/* </Typography> */}
                </Paper>    
            </Grid>
            <Button type='submit' color='primary' variant="contained" style={btnstyle} >Login</Button>

        </div>
    )
}

export default Login