import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Grid, Paper, TextField, Button, Link } from '@material-ui/core';
import Header from './Header.js';
import { login } from '../../actions/auth.js';

const initialState = {
    email: '',
    password: '',
};

const Login = () => {
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () =>
        setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData, navigate));
    };

    const paperStyle = {
        padding: 40,
        height: '45%',
        width: 400,
        margin: '50px auto',
        backgroundColor: '#20CD51',
    };
    const btnstyle = {
        backgroundColor: '#20CD51',
        left: '45%',
        width: '150px',
        borderRadius: 50,
    };
    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <Grid style={{ margin: '200px 0 50px  0' }}>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align="center">
                            <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                Log In
                            </h2>
                        </Grid>
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                borderRadius: 50,
                                margin: '3px',
                                height: '40px',
                            }}
                            name="email"
                            label="   Enter Email"
                            fullWidth
                            required
                            onChange={handleChange}
                        />
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                borderRadius: 50,
                                margin: '4px',
                                height: '40px',
                                marginBottom: '30px',
                            }}
                            name="password"
                            label="   Enter password"
                            type="password"
                            fullWidth
                            required
                            onChange={handleChange}
                        />
                        <Link
                            href="#"
                            style={{
                                color: 'white',
                                textDecoration: 'underline',
                                fontStyle: 'italic',
                            }}
                        >
                            Forgot password ?
                        </Link>
                        <Link
                            href="#"
                            style={{
                                color: 'white',
                                margin: '0 0 0 145px',
                                fontWeight: 'bold',
                            }}
                        >
                            Sign Up
                        </Link>
                    </Paper>
                </Grid>
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                >
                    Login
                </Button>
            </form>
        </div>
    );
};

export default Login;
