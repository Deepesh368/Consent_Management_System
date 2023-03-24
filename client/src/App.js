import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import PatientAuth from './components/Patient/PatientAuth/PatientAuth';
import PatientDashbord from './components/Patient/PatientDashboard/PatientDashboard';
import Doctor from './components/Doctor/Doctor';
import GetConsent from './components/Patient/GetConsent/GetConsent';
=======
import MyForm from './components/Doctor/ConsentForm';

const App = () => {
    // const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Routes>
                    <Route
                        path="/patient"
                        exact
                        element={<PatientDashbord />}
                    />
                    <Route path="/" exact element={<Home />} />
                    <Route path="/getConsent" exact element={<GetConsent />} />
                    {/* <Route
                        path="/patient"
                        element={
                            user ? (
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
                    /> */}
                    <Route path="/doctor" exact element={<Doctor />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
