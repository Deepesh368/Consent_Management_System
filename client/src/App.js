import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import PatientAuth from './components/Patient/PatientAuth/PatientAuth';
import PatientDashbord from './components/Patient/PatientDashboard/PatientDashboard';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route
                        path="/patient"
                        element={
                            !user ? (
                                <Navigate to={'/patient/auth'} />
                            ) : (
                                <PatientDashbord />
                            )
                        }
                    />
                    <Route
                        path="/patient/auth"
                        exact
                        element={
                            !user ? (
                                <PatientAuth />
                            ) : (
                                <Navigate replace to={'/patient'} />
                            )
                        }
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
