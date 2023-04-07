import { Grid, Button, Toolbar, TextField, Paper } from '@material-ui/core';
import React from 'react';
import Header from './navbar.js';
import { useNavigate } from 'react-router-dom';


const ConsentCreate = () => {
    let navigate = useNavigate()
    
    const paperStyle = {
        padding: 40,
        height: '45%',
        width: 400,
        margin: '50px auto',
        backgroundColor: '#20CD51',
    };
    const btnstyle = {
        backgroundColor: '#20CD51',
        left: '45%',
        width: '200px',
        borderRadius: 50,
    };
    return (
        <div>
            <Header />
            <Toolbar />
            <div style={{}}>
                <Grid
                    style={{ margin: '80px 0 20px  0' }}
                    alignContent="center"
                >
                    <h1
                        style={{
                            textAlign: 'center',
                            marginLeft: '24%',
                            alignItems: 'center',
                            alignContent: 'center',
                            width: '800px',
                            height: '100px',
                            borderRadius: '40px',
                        }}
                    >
                        Hospital Name
                    </h1>

                    <div>
            <Header />
            <form >
                <Grid style={{ margin: '0 0 50px  0' }}>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align="center">
                            <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                Log In
                            </h2>
                        </Grid>
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                borderRadius: 50,
                                margin: '3px',
                                height: '40px',
                            }}
                            name="Patient ID"
                            label="   Patient ID"
                            fullWidth
                            required
                        />
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                borderRadius: 50,
                                margin: '4px',
                                height: '40px',
                                marginBottom: '30px',
                            }}
                            name="password"
                            label="   Doctor ID"
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                borderRadius: 50,
                                margin: '4px',
                                height: '40px',
                                marginBottom: '30px',
                            }}
                            name="password"
                            label="   Hospital ID"
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                borderRadius: 50,
                                margin: '4px',
                                height: '40px',
                                marginBottom: '30px',
                            }}
                            name="password"
                            label="   Start Date"
                            type="text"
                            fullWidth
                            required
                        />
                                                <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                borderRadius: 50,
                                margin: '4px',
                                height: '40px',
                                marginBottom: '30px',
                            }}
                            name="password"
                            label="  End Date"
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                borderRadius: 50,
                                margin: '4px',
                                height: '40px',
                                marginBottom: '30px',
                            }}
                            name="password"
                            label="   Status"
                            type="text"
                            fullWidth
                            required
                        />
                    </Paper>
                </Grid>
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                >
                    Create Consent
                </Button>
            </form>
        </div>
                </Grid>
            </div>
        </div>
    );
};

export default ConsentCreate;
