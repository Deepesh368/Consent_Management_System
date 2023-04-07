import React from "react";
import {AppBar, Toolbar, Typography, Button} from "@mui/material";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Header = () => {
    let ABHA_NUM = 123455959
    let name = window.location.href.split("/")[3]
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        navigate('/');
        dispatch({ type: LOGOUT });
    }
    
    return(
        <React.Fragment>
            <AppBar sx={{background: "#10BB40", minHeight: '70px'}}>
                <Toolbar>
                    <Button disableElevation='true' sx={{"&:hover": {backgroundColor: "#10EB40"}, margin:'0px 2px 0 -25px', background:"#10BB40"}} variant="contained" onClick={()=>navigate(-1)}><ArrowBackIcon /> </Button>
                    <Button
                        // color="primary"
                        sx={{ color: 'white' }}
                        size="large"
                        startIcon={<MedicalServicesIcon />}
                        onClick={() => navigate('/')}
                    >
                        Swastha Suraksha
                    </Button>
                    <Button onClick={()=>navigate("/patient/records")} sx={{"&:hover": {backgroundColor: "#D3D3D3"}, width:"12%", marginLeft:'59.5%', borderRadius:'20px', background:"white", color:"black"}} variant="contained">Hospital Records</Button>
                    <Button onClick={()=>navigate("/patient/profile")} sx={{"&:hover": {backgroundColor: "#D3D3D3"}, marginLeft:'auto', borderRadius:'20px', background:"white", color:"black"}} variant="contained">Profile</Button>
                    <Button sx={{"&:hover": {backgroundColor: "#8A0717"}, marginLeft:'10px', borderRadius:'20px', background:"red", color:"white"}} variant="contained">Log out</Button>
                </Toolbar>
                <Typography marginLeft={8}  sx={{fontWeight: 'bold', fontSize: 16}}>
                    {name}, ABHA ID: {ABHA_NUM}
                </Typography>
            </AppBar>
            {/* <AppBar sx={{background: "#10BB40", minHeight: '70px'}}>
                <Toolbar>
                    <Typography marginLeft={2}  sx={{fontWeight: 'bold', fontSize: 16}}>
                        Swastha Suraksha
                    </Typography>
                </Toolbar>
            </AppBar> */}
        </React.Fragment>
    );
};

export default Header;