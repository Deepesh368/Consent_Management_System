import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createconsent } from '../../actions/doctor';

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
    const [formData, useFormData] = useState(state);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createconsent(11, formData));
    };

    return (
        <div>
            <h1>Doctor Dashboard</h1>
            <h2>Doctor Data:</h2>
            <h3>doctorId: 11</h3>
            <h3>patientId: 122</h3>
            <h3>sendingHospitalId: 'sendingHospitalId'</h3>
            <h3>reqStartDate: 2023-12-24</h3>
            <h3>reqEndDate: 2023-12-24</h3>
            <h3>reqValidity: 2023-12-24</h3>

            <button onClick={handleSubmit}>Create Consent Request</button>
        </div>
    );
};

export default Doctor;
