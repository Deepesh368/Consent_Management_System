import { Container, Typography } from '@mui/material';
import React from 'react';
import TextField from './TextField';
// import Search from './searchBar';


// var image = './client/src/components/Patient/PatientDashboard/photo.jpeg'

// var messages = []
const PatientDashbooard = () => {
    return (
        <Container style={{background:'#F0F3F4'}}>
            <Typography variant='h2'align='left' color={'indigo'}>
            Welcome! 
            </Typography>
            <TextField name='Maruthi'/>
            <img src={''} alt="cur"
                height={350}
                width={700}
                style={{ alignSelf: 'center' }}
            /> 
            {/* <Search/>        */}
            </Container>
    );
};

export default PatientDashbooard;
