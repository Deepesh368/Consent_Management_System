import { Button, Container, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { patientlogin } from '../../../actions/patientAuth';

const initialState = {
    email: '',
    password: '',
};

const PatientAuth = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(patientlogin(formData, history));
    };

    return (
        // <div>
        //     <h1>This is LogIn page of the application for patients.</h1>
        // </div>
        <Container component="main" maxWidth="xs">
            <form onSubmit={handleSubmit}>
                <TextField
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    variant="outlined"
                    required
                    autoFocus
                    half="true"
                ></TextField>

                <TextField
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    variant="outlined"
                    required
                    autoFocus
                    half="true"
                ></TextField>

                <Button type="submit" variant="contained" color="primary">
                    Sign In
                </Button>
            </form>
        </Container>
    );
};

export default PatientAuth;
