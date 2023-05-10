import { Grid, Button, Toolbar, TextField, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import Header from './Navbar.js';
import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createHealthRecord } from '../../actions/healthRecord.js';
import DropdownTextField from './TextBox.js';
import SeverityBox from './SeverityBox.js';
import FileUploadForm from './UploadFile.js';
import MenuItem from '@mui/material/MenuItem';

const initialState = {
    patientId: '',
    dateOfVisit: '',
    recordType: '',
    reportDetails: '',
    severity: '',
};

const HealthRecordCreate = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('doctor'))
    );

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        console.log(formData);
        e.preventDefault();
        // console.log(formData);
        dispatch(createHealthRecord(formData, navigate));
    };
    const [focus, setFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

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
                                    <Grid align="center">
                                        <h2
                                            style={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Create Health Record
                                        </h2>
                                    </Grid>
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
                                        required
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '30px',
                                        }}
                                        name="dateOfVisit"
                                        label="Date of Visit"
                                        placeholder=""
                                        type={
                                            hasValue || focus ? 'date' : 'text'
                                        }
                                        fullWidth
                                        required
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '30px',
                                        }}
                                        select
                                        name="recordType"
                                        label="   Record Type"
                                        type="text"
                                        fullWidth
                                        required
                                        onChange={handleChange}
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
                                            marginBottom: '30px',
                                            height: '300px',
                                            wordWrap: 'true',
                                        }}
                                        name="reportDetails"
                                        label="   Report Details"
                                        type="text"
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
                                            marginBottom: '30px',
                                        }}
                                        name="recordType"
                                        label="  Record Type"
                                        type="text"
                                        fullWidth
                                        required
                                    /> */}
                                    {/* <DropdownTextField /> */}
                                    {/* <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            height: '100px',
                                            marginBottom: '30px',
                                        }}
                                        name="reportDetails"
                                        label="   Report details"
                                        type="text"
                                        fullWidth
                                        required
                                    /> */}
                                    {/* <SeverityBox /> */}
                                    {/* <FileUploadForm /> */}
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '30px',
                                        }}
                                        select
                                        name="severity"
                                        label="   Severity"
                                        type="text"
                                        fullWidth
                                        required
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'0'}>All</MenuItem>
                                        <MenuItem value={'3'}>Fatal</MenuItem>
                                        <MenuItem value={'2'}>High</MenuItem>
                                        <MenuItem value={'1'}>Medium</MenuItem>
                                        <MenuItem value={'0'}>Low</MenuItem>
                                    </TextField>
                                </Paper>
                            </Grid>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                style={btnstyle}
                            >
                                Create Record
                            </Button>
                        </form>
                    </div>
                </Grid>
            </div>
        </div>
    );
};

export default HealthRecordCreate;
