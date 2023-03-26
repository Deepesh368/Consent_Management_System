import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import Patientregister from './components/Register/Patientregister';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/patient_register" element={<Patientregister />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
