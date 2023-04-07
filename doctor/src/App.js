import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import DashBoard from './components/Dashboard/Dashboard'
import ConsentDashboard from './components/DashboardConsent/consentDashBoard'


const App = () => {
    const user = JSON.parse(localStorage.getItem('doctor'));

    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/" exact element={<Navigate to="/login" />} />

                    <Route
                        path="/login"
                        exact
                        element={!user ? <Login /> : <Navigate to="/doctor" />}
                    />

                    <Route
                        path="/doctor"
                        exact
                        element={!user ? <DashBoard /> : <Navigate to="/doctor" />}
                    />

                    <Route
                        path="/consents"
                        exact
                        element={!user ? <ConsentDashboard /> : <Navigate to="/doctor" />}
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
