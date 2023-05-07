import { Grid, Button, Toolbar, TextField, Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Header from './navbar.js';
import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createConsent } from '../../actions/consent.js';
import decode from 'jwt-decode';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import DoctorDashBoard from '../Dashboard/Dashboard.js';

const initialState = {
    doctorId: '',
    patientId: '',
    requestingHospitalId: '',
    sendingHospitalId: '',
    reqStartDate: '',
    reqEndDate: '',
    reqValidity: '',
    status: '',
    consentValidity: '',
    record_type: '',
    severity: '',
};

const ConsentCreate = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            // console.log(decodedToken);
            setFormData({
                ...formData,
                doctorId: `${decodedToken.id}`,
                requestingHospitalId: decodedToken.hospital_id,
            });
            // console.log(formData);
        }
    }, []);

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('doctor'))
    );

    const [formData, setFormData] = useState(initialState);
    const [focus, setFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);
    const [age, setAge] = React.useState('');

    const handleAgeChange = (e) => {
        setAge(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [focus1, setFocused1] = useState(false);
    const [hasValue1, setHasValue1] = useState(false);
    const onFocus1 = () => setFocused1(true);
    const onBlur1 = () => setFocused1(false);

    const [focus2, setFocused2] = useState(false);
    const [hasValue2, setHasValue2] = useState(false);
    const onFocus2 = () => setFocused2(true);
    const onBlur2 = () => setFocused2(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createConsent(formData, navigate));
        <Navigate to="/DoctorDashBoard" />;
    };

    const paperStyle = {
        padding: 40,
        height: '45%',
        width: 400,
        marginTop: '1%',
        marginLeft: '35%',
        backgroundColor: '#20CD51',
    };
    const btnstyle = {
        backgroundColor: '#20CD51',
        marginLeft: '42%',
        width: '200px',
        borderRadius: 50,
    };

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />
            <Toolbar />
            <div style={{}}>
                <Grid
                    style={{ margin: '80px 0 20px  0' }}
                    alignContent="center"
                >
                    <div>
                        <Header />
                        <form onSubmit={handleSubmit}>
                            <Grid style={{ margin: '70px 0 50px  0' }}>
                                <Paper elevation={10} style={paperStyle}>
                                    <h2
                                        style={{
                                            marginLeft: '25%',
                                            color: 'white',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Create Consent
                                    </h2>

                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '30px',
                                        }}
                                        name="patientId"
                                        label="   Patient ID"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    />

                                    {/* <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="sendingHospitalId"
                                        label="   Sending Hospital ID"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                    /> */}
                                    <TextField
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '30px',
                                        }}
                                        name="reqStartDate"
                                        label="   Request Start Date"
                                        type={
                                            hasValue || focus ? 'date' : 'text'
                                        }
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    />
                                    <TextField
                                        onFocus={onFocus1}
                                        onBlur={onBlur1}
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '30px',
                                            shrink: true,
                                        }}
                                        name="reqEndDate"
                                        label="  Request End Date"
                                        type={
                                            hasValue1 || focus1
                                                ? 'date'
                                                : 'text'
                                        }
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    />
                                    {/* <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '30px',
                                        }}
                                        name="reqValidity"
                                        label="   Request Validity"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    /> */}
                                    <TextField
                                        onFocus={onFocus2}
                                        onBlur={onBlur2}
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '30px',
                                            shrink: true,
                                        }}
                                        name="reqValidity"
                                        label="  Request Validity"
                                        type={
                                            hasValue2 || focus2
                                                ? 'date'
                                                : 'text'
                                        }
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    />
                                    {/* <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '30px',
                                        }}
                                        name="consentValidity"
                                        label="   Consent Validity"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    /> */}
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '30px',
                                        }}
                                        select
                                        name="record_type"
                                        label="   Record Type"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    >
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value="Diagnostic">
                                            Diagnostic
                                        </MenuItem>
                                        <MenuItem value="Prescription">
                                            Prescription
                                        </MenuItem>
                                        <MenuItem value="Lab Report">
                                            Lab Report
                                        </MenuItem>
                                    </TextField>
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '1px',
                                        }}
                                        select
                                        name="severity"
                                        label="   Severity"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                    >
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value={'0'}>0</MenuItem>
                                        <MenuItem value={'1'}>1</MenuItem>
                                        <MenuItem value={'2'}>2</MenuItem>
                                        <MenuItem value="3">3</MenuItem>
                                       
                                    </TextField>
                                </Paper>
                            </Grid>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                style={btnstyle}
                            >
                                Create Consent
                            </Button>
                        </form>
                    </div>
                </Grid>
            </div>
        </div>
    );
};

export default ConsentCreate;
