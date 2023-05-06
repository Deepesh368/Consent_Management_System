import { Grid, Button, Toolbar, TextField, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from './navbar.js';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { updateConsent } from '../../actions/consent.js';

const updateForm = {
    status: '',
    startDate: '',
    endDate: '',
    validity: '',
};

const EditConsent = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const updateData = useSelector((state) => state.consent.consentToUpdate);

    const [formData, setFormData] = useState(updateForm);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        await dispatch(updateConsent(updateData.consentId, formData));
        navigate('/patient/consents');
    };

    useEffect(() => {
        console.log(updateData);
    }, []);

    const paperStyle = {
        padding: 40,
        height: '45%',
        width: 400,
        marginTop: '15%',
        marginLeft: '35%',
        backgroundColor: '#20CD51',
    };
    const btnstyle = {
        backgroundColor: '#20CD51',
        left: '43%',
        width: '200px',
        borderRadius: 50,
    };
    return (
        <div>
            <Header />
            <div style={{}}>
                <Grid
                    style={{ margin: '80px 0 20px  0' }}
                    alignContent="center"
                >
                    <div>
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
                                            Edit Consent
                                        </h2>
                                    </Grid>
                                    <div>
                                        <label
                                            style={{
                                                display: 'inline-block',
                                                width: '25%',
                                                textAlign: 'right',
                                                color: 'white',
                                                fontSize: 20,
                                            }}
                                        >
                                            Start Date:
                                        </label>
                                        <TextField
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                            style={{
                                                background: 'white',
                                                borderRadius: 50,
                                                margin: '4px',
                                                height: '40px',
                                                marginBottom: '30px',
                                            }}
                                            name="startDate"
                                            defaultValue={moment(
                                                `${updateData.startDate}`
                                            ).format('YYYY-MM-DD')}
                                            type="date"
                                            fullWidth
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <label
                                        style={{
                                            display: 'inline-block',
                                            width: '25%',
                                            color: 'white',
                                            fontSize: 20,
                                        }}
                                    >
                                        End Date:
                                    </label>
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="endDate"
                                        defaultValue={moment(
                                            `${updateData.endDate}`
                                        ).format('YYYY-MM-DD')}
                                        type="date"
                                        fullWidth
                                        required
                                        onChange={handleChange}
                                    />
                                    <label
                                        style={{
                                            display: 'inline-block',
                                            width: '10px',
                                            textAlign: 'right',
                                            color: 'white',
                                            fontSize: 20,
                                        }}
                                    >
                                        Status:
                                    </label>
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="status"
                                        type="text"
                                        defaultValue={updateData.status}
                                        fullWidth
                                        required
                                        onChange={handleChange}
                                    />

                                    <label
                                        style={{
                                            display: 'inline-block',
                                            width: '10px',
                                            textAlign: 'right',
                                            color: 'white',
                                            fontSize: 20,
                                        }}
                                    >
                                        Validity:
                                    </label>
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="validity"
                                        defaultValue={updateData.validity}
                                        fullWidth
                                        required
                                        type="date"
                                        onChange={handleChange}
                                    />
                                </Paper>
                            </Grid>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                style={btnstyle}
                            >
                                Make Changes
                            </Button>
                        </form>
                    </div>
                </Grid>
            </div>
        </div>
    );
};

export default EditConsent;
