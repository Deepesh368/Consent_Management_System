import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/auth.js';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputAdornment } from '@mui/material';

import {
    Grid,
    Paper,
    TextField,
    Button,
    Link,
    Typography,
    IconButton,
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
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () =>
        setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleConfirmShowPassword = () =>
        setConfirmShowPassword(
            (prevConfirmShowPassword) => !prevConfirmShowPassword
        );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword, phone } = formData;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else if (phone.length !== 10) {
            alert('Phone number should be 10 digits');
        } else {
            // make API call
            dispatch(signup(formData, navigate));
        }
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
                            label="Name"
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
                            type="number"
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
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            {!showPassword ? (
                                                <VisibilityIcon
                                                    onClick={handleShowPassword}
                                                />
                                            ) : (
                                                <VisibilityOffIcon
                                                    onClick={handleShowPassword}
                                                />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                            }}
                            style={{
                                background: 'white',
                                borderRadius: 50,
                                margin: '4px',
                                height: '40px',
                            }}
                            label="   Password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            required
                            onChange={handleChange}
                        />
                        <TextField
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            {!showConfirmPassword ? (
                                                <VisibilityIcon
                                                    onClick={
                                                        handleConfirmShowPassword
                                                    }
                                                />
                                            ) : (
                                                <VisibilityOffIcon
                                                    onClick={
                                                        handleConfirmShowPassword
                                                    }
                                                />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                            }}
                            style={{
                                background: 'white',
                                borderRadius: 50,
                                margin: '4px',
                                height: '40px',
                            }}
                            label="   Confirm Password"
                            name="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
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
