import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Box } from '@material-ui/core';

const Header = () => {
    return (
        <React.Fragment>
            <AppBar sx={{ background: '#10BB40', minHeight: '100px' }}>
                <Toolbar>
                    <Button
                        disableElevation="true"
                        sx={{
                            '&:hover': { backgroundColor: '#10EB40' },
                            margin: '5px',
                            background: '#10BB40',
                        }}
                        variant="contained"
                    >
                        <ArrowBackIcon />{' '}
                    </Button>
                    <MedicalServicesIcon />
                    <Typography
                        marginLeft={2}
                        sx={{ fontWeight: 'bold', fontSize: 28 }}
                    >
                    <Button
                        disableElevation="true"
                        sx={{
                            '&:hover': { backgroundColor: '#10EB40' },
                            margin: '2px',
                            background: '#10BB40',
                        }}
                        variant="contained"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowBackIcon />{' '}
                    </Button>
                    <Button
                        <Typography>
                            sx={{ color: 'white' }}
                            size="large"
                            startIcon={<MedicalServicesIcon />}
                            onClick={() => navigate('/')}
                            Swastha Suraksha
                            </Typography>
                    </Button>
                    <h2 style={{ width: '10%', margin: '0px 0px 0px 970px' }}>
                        Doctor Login{' '}
                    </h2>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
