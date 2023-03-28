import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
<<<<<<< HEAD
import Login from './components/Login/login.js'
import PatientDashBoard from './components/PatientDashboard/patientDashboard.js';
import Profile from './components/PatientProfile/profile.js'
=======
import Patientregister from './components/Register/Patientregister';

>>>>>>> ad0b21f03826f00efdee0bf581abe091c803dc38
const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Routes>
<<<<<<< HEAD
                    <Route path="/maruthi" exact element={<PatientDashBoard />} />
                </Routes>
                <Routes>
                    <Route path="/maruthi/profile" exact element={<Profile />} />
                </Routes>
                <Routes>
                    <Route path="/" exact element={<Home />} />
=======
                    <Route path="/" element={<Home />} />
                    <Route path="/patient_register" element={<Patientregister />} />
>>>>>>> ad0b21f03826f00efdee0bf581abe091c803dc38
                </Routes>
                <Routes>
                    <Route path="/Login" exact element={<Login />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
