import React, {useEffect, useState} from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import decode from 'jwt-decode';

const Header = () => {
    let name = window.location.href.split('/')[3];
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [docname, setName] = useState('NULL');
        const [user, setUser] = useState(JSON.parse(localStorage.getItem('doctor')));

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            setName(decodedToken?.name);
        }
    }, []);
    const logout = () => {
        navigate('/login');
        dispatch({ type: LOGOUT });
    };

    return (
        <React.Fragment>
            <AppBar sx={{ background: '#10BB40', minHeight: '70px' }}>
                <Toolbar>
                    <Button
                        disableElevation="true"
                        sx={{
                            '&:hover': { backgroundColor: '#10EB40' },
                            margin: '0px 2px 0 -25px',
                            background: '#10BB40',
                        }}
                        variant="contained"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowBackIcon />{' '}
                    </Button>
                    <MedicalServicesIcon />
                    <Typography
                        marginLeft={2}
                        sx={{ fontWeight: 'bold', fontSize: 32 }}
                    >
                        Swastha Suraksha
                    </Typography>

                    <Typography
                        marginLeft={2}
                        sx={{
                            fontWeight: 'bold',
                            marginLeft: '75%',
                            fontSize: 16,
                        }}
                    >
                        {docname}
                    </Typography>
                    <Button
                        sx={{
                            '&:hover': { backgroundColor: '#8A0717' },
                            marginLeft: '10px',
                            borderRadius: '20px',
                            background: 'red',
                            color: 'white',
                        }}
                        variant="contained"
                        onClick={logout}
                    >
                        Log out
                    </Button>
                </Toolbar>
                <Typography
                    marginLeft={2}
                    sx={{ fontWeight: 'bold', marginLeft: '4%', fontSize: 16 }}
                >
                    Hospital Name
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
