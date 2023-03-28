import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import Button from "@mui/material-next/Button";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';


const Navbar = () => {
    return(
        <>
            <AppBar sx={{background: "#10BB40", minHeight: '70px'}}>
                <Toolbar>
                    <MedicalServicesIcon />
                    <Typography sx={{fontWeight: 'bold', fontSize: 32, marginLeft: '8px'}}>
                        Swastha Suraksha
                    </Typography>
                    <Button sx={{marginLeft:'auto'}} variant="contained">LogIn</Button>
                    <Button sx={{marginLeft:'10px'}} variant="contained">Register</Button>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;