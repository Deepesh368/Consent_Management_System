import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import DashBoard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import ConsentDashBoard from './components/DashboardConsent/consentDashBoard';
const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/maruthi" element={<DashBoard />} />
                    <Route path="/maruthi/profile" element={<Profile />} />
                    <Route
                        path="/maruthi/consent"
                        element={<ConsentDashBoard />}
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
