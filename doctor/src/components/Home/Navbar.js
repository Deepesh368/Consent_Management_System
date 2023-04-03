import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { useNavigate } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate();

    const registerPath = () => {
        navigate('/register');
    };

    const loginPath = () => {
        navigate('/login');
    };

    return (
        <>
            <AppBar sx={{ background: '#10BB40', minHeight: '70px' }}>
                <Toolbar>
                    <Button
                        // color="primary"
                        sx={{ color: 'white' }}
                        size="large"
                        startIcon={<MedicalServicesIcon />}
                    >
                        Swastha Suraksha
                    </Button>

                    <Box
                        m={1}
                        //margin
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                        sx={{ flexGrow: 1 }}
                    >
                        <Button
                            variant="contained"
                            onClick={loginPath}
                            sx={{
                                marginRight: '10px',
                                borderRadius: 50,
                                color: 'black',
                                background: '#DDEEE2',
                                '&:hover': {
                                    border: '1px solid black',
                                    color: 'black',
                                    backgroundColor: '#DDEEE2',
                                },
                            }}
                        >
                            Log In
                        </Button>

                        <Button
                            variant="contained"
                            onClick={registerPath}
                            sx={{
                                borderRadius: 50,
                                color: 'black',
                                background: '#DDEEE2',
                                '&:hover': {
                                    border: '1px solid black',
                                    color: 'black',
                                    backgroundColor: '#DDEEE2',
                                },
                            }}
                        >
                            Register
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
