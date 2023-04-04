import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/auth.js';
import { useNavigate } from 'react-router-dom';

import {
    Grid,
    Paper,
    TextField,
    Button,
    Link,
    Typography,
} from '@material-ui/core';
// import './navBar/styles.css'
import Header from './Header.js';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
};

const Register = () => {
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
        dispatch(signup(formData, navigate));
    };

    const paperStyle = {
        padding: 20,
        height: '40%',
        width: 350,
        margin: '20px auto',
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
                <Grid style={{ margin: '10% 0 5% 0' }}>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align="center">
                            <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                Register
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
                            name="name"
                            label="   Name"
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
                            }}
                            name="phone"
                            label="   Phone Number"
                            fullWidth
                            required
                            onChange={handleChange}
                        />
                        {/* <TextField
                        InputProps={{ disableUnderline: true }}
                        style={{
                            background: 'white',
                            borderRadius: 50,
                            margin: '4px',
                            height: '40px',
                        }}
                        placeholder="   Date Of Birth"
                        type="password"
                        fullWidth
                        required
                    /> */}
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                borderRadius: 50,
                                margin: '4px',
                                height: '40px',
                            }}
                            label="   Email"
                            name="email"
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
                            }}
                            label="   Password"
                            name="password"
                            type="password"
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
                            }}
                            label="   Confirm Password"
                            name="confirmPassword"
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
                                margin: '8px',
                            }}
                        >
                            Already a user?
                        </Link>
                    </Paper>
                </Grid>
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                >
                    Register
                </Button>
            </form>
        </div>
    );
};

export default Register;
