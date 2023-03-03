import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createconsent } from '../../actions/doctor';
import { TextField } from '@material-ui/core';

const state = {
    doctorId: '11',
    patientId: '122',
    sendingHospitalId: 'sendingHospitalId',
    reqStartDate: '2023-12-24',
    reqEndDate: '2023-12-24',
    reqValidity: '2023-12-24',
};

const Doctor = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(state);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createconsent(11, formData));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // return (
    //     <div>
    //         <h1>Doctor Dashboard</h1>
    //         <h2>Doctor Data:</h2>
    //         <h3>doctorId: 11</h3>
    //         <h3>patientId: 122</h3>
    //         <h3>sendingHospitalId: 'sendingHospitalId'</h3>
    //         <h3>reqStartDate: 2023-12-24</h3>
    //         <h3>reqEndDate: 2023-12-24</h3>
    //         <h3>reqValidity: 2023-12-24</h3>

    //         <button onClick={handleSubmit}>Create Consent Request</button>
    //     </div>
    // );
    return (
        <div>
            <h1>Doctor Dashboard</h1>
            <h2>Doctor Data:</h2>
            <TextField
                required
                id="doctorId"
                name="doctorId"
                label="Doctor id"
                fullWidth
                variant="outlined"
                onChange={handleChange}
            />

            <TextField
                required
                id="patientId"
                name="patientId"
                label="Patient id"
                fullWidth
                variant="outlined"
                onChange={handleChange}
            />

            <TextField
                required
                id="sendingHospitalId"
                name="sendingHospitalId"
                label="Sending Hospital id"
                fullWidth
                variant="outlined"
                onChange={handleChange}
            />

            <TextField
                required
                id="reqStartDate"
                name="reqStartDate"
                label="Request Start Date"
                fullWidth
                variant="outlined"
                onChange={handleChange}
            />
            <TextField
                required
                id="reqEndDate"
                name="reqEndDate"
                label="Request End Date"
                fullWidth
                variant="outlined"
                onChange={handleChange}
            />

            <TextField
                required
                id="reqValidity"
                name="reqValidity"
                label="Request Validity"
                fullWidth
                variant="outlined"
                onChange={handleChange}
            />

            {/* <h3>doctorId: 11</h3> */}
            {/* <h3>patientId: 122</h3> */}
            {/* <h3>sendingHospitalId: 'sendingHospitalId'</h3> */}
            {/* <h3>reqStartDate: 2023-12-24</h3> */}
            {/* <h3>reqEndDate: 2023-12-24</h3> */}
            {/* <h3>reqValidity: 2023-12-24</h3> */}

            <button onClick={handleSubmit}>Create Consent Request</button>
        </div>
    );
};

export default Doctor;
