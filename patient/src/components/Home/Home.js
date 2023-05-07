import { Toolbar } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Toolbar />
            <h1>Welcome citizens!</h1>
            Here you can control who can see you health records.
        </div>
    );
};

export default Home;
