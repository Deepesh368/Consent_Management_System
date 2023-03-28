import { Toolbar, TextField, Grid} from "@material-ui/core";
import { color } from "@mui/system";
import React from "react";
import Header from './navbar.js'
import './styles.css'
const Profile = () =>{
    return (
        <div>
            <Header />
            <Toolbar />
            <Toolbar />
            <Toolbar />

            <TextField InputProps={{ disableUnderline: true }} style={{background:'#20CD51', borderRadius: 50, 
            margin:'auto auto 1% 40%', height:'40px', width:"20%", color:"white"} } placeholder='   Name' fullWidth required />
            <TextField InputProps={{ disableUnderline: true }} style={{background:'#20CD51', borderRadius: 50, margin:'1% auto 1% 40%', height:'40px',  width:"20%"}} placeholder='   Email' type='Email' fullWidth required />
            <TextField InputProps={{ disableUnderline: true }} style={{background:'#20CD51', borderRadius: 50, margin:'1% auto 1% 40%', height:'40px',  width:"20%"}} placeholder='   Password' type='Password' fullWidth required />
            <TextField InputProps={{ disableUnderline: true }} style={{background:'#20CD51', borderRadius: 50, margin:'1% auto auto 40%', height:'40px',  width:"20%"}} placeholder='   Phone Number' type='number' fullWidth required />
        </div>
    )
}

export default Profile
