import { Toolbar, TextField, Grid} from "@material-ui/core";
import React from "react";
import Header from './navbar.js'
const Profile = () =>{
    return (
        <div>
            <Header />
            <Toolbar />
            <Grid>
                <TextField InputProps={{ disableUnderline: true }} style={{background:'white', borderRadius: 50, margin:'3px', height:'40px'}} placeholder='   Enter Email' fullWidth required />
                <TextField InputProps={{ disableUnderline: true }} style={{background:'white', borderRadius: 50, margin:'4px', height:'40px'}} placeholder='   Enter password' type='password' fullWidth required />
            </Grid>
            
        </div>
    )
}

export default Profile
