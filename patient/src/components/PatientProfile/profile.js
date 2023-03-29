import { Toolbar, TextField, Button, } from "@material-ui/core";
import React from "react";
import Header from './navbar.js'
import './styles.css'
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Profile = () =>{
    return (
        <div>
            <Header />
            <Toolbar />
            <Toolbar />
            <Toolbar />
            <TextField InputProps={{ disableUnderline: true }} style={{background:'#20CD51', borderRadius: 50, 
            margin:'auto auto 1% 40%', height:'40px', width:"20%",
            textAlign:"center"
            }} 
            placeholder='   Name' fullWidth required />
            <Button ><ModeEditIcon /></Button>
            <TextField InputProps={{ disableUnderline: true }} style={{background:'#20CD51', borderRadius: 50, margin:'1% auto 1% 40%', height:'40px',  width:"20%"}} placeholder='   Email' type='Email' fullWidth required />
            <Button ><ModeEditIcon /></Button>

            <TextField InputProps={{ disableUnderline: true }} style={{background:'#20CD51', borderRadius: 50, margin:'1% auto 1% 40%', height:'40px',  width:"20%"}} placeholder='   Password' type='Password' fullWidth required />
            <Button ><ModeEditIcon /></Button>

            <TextField InputProps={{ disableUnderline: true }} style={{background:'#20CD51', borderRadius: 50, margin:'1% auto auto 40%', height:'40px',  width:"20%"}} placeholder='   Phone Number' type='number' fullWidth required />
            <Button ><ModeEditIcon /></Button>
        </div>
    )
}

export default Profile
