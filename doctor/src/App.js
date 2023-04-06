import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

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
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
