import React from "react";
import {AppBar, Toolbar, Typography, Button} from "@mui/material";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = () => {
    return(
        <React.Fragment>
            <AppBar sx={{background: "#10BB40", minHeight: '70px'}}>
                <Toolbar>
                    <Button disableElevation='true' sx={{"&:hover": {backgroundColor: "#10EB40"}, margin:'5px', background:"#10BB40"}} variant="contained"><ArrowBackIcon /> </Button>
                    < MedicalServicesIcon />
                    <Typography marginLeft={2}  sx={{fontWeight: 'bold', fontSize: 28}}>
                        Swastha Suraksha
                    </Typography>
                    <h2 style={{width:'15%', marginLeft:'auto'}}>Patient Registration</h2>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;