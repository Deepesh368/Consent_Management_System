import { Toolbar, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Header from './Navbar.js';
import Consent from './Consent.js';
import { Navigate } from 'react-router-dom';

const ConsentDashBoard = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('doctor'))
    );

    let cards = [];
    for (let i = 0; i < 20; i++) {
        cards.push(i);
    }
    let status = 'green';

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />
            <Toolbar />
            <Grid
                style={{ marginTop: '2%' }}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {cards.map((id) => (
                    <Consent key={id} consentNum={id} status={status} />
                ))}
            </Grid>
        </div>
    );
};

export default ConsentDashBoard;
