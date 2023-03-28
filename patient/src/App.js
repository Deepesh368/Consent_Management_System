import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/login.js'
import PatientDashBoard from './components/PatientDashboard/patientDashboard.js';
import Profile from './components/PatientProfile/profile.js'
const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/maruthi" exact element={<PatientDashBoard />} />
                </Routes>
                <Routes>
                    <Route path="/maruthi/profile" exact element={<Profile />} />
                </Routes>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/Login" exact element={<Login />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
