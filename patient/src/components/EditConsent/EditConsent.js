import { Grid, Button, Toolbar, TextField, Paper } from '@material-ui/core';
import React from 'react';
import Header from './navbar.js';
import { useNavigate } from 'react-router-dom';


const EditConsent = () => {
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
        left: '43%',
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

            <div>
            <Header />
            <form >
                <Grid style={{ margin: '70px 0 50px  0' }}>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align="center">
                            <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                Edit Consent
                            </h2>
                        </Grid>
                        <div>
                            <label 
                                style={{
                                        display: 'inline-block',
                                        width: '25%',
                                        textAlign:'right',
                                        color:'white',
                                        fontSize:20
                                    }}>
                                Start Date:
                            </label>
                            <TextField
                                InputProps={{ disableUnderline: true }}
                                style={{
                                    background: 'white',
                                    borderRadius: 50,
                                    margin: '4px',
                                    height: '40px',
                                    marginBottom: '30px',
                                }}
                                name="start Date"
                                type="date"
                                fullWidth
                                required
                            />
                        </div>
                        <label 
                                style={{
                                        display: 'inline-block',
                                        width: '25%',
                                        color:'white',
                                        fontSize:20
                                    }}>
                                End Date:
                            </label>
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                borderRadius: 50,
                                margin: '4px',
                                height: '40px',
                                marginBottom: '30px',
                            }}
                            name="End Date"
                            
                            type="date"
                            fullWidth
                            required
                        />
                        <label 
                                style={{
                                        display: 'inline-block',
                                        width: '10px',
                                        textAlign:'right',
                                        color:'white',
                                        fontSize:20
                                    }}>
                                Status:
                            </label>
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
                    Make Changes
                </Button>
            </form>
        </div>
                </Grid>
            </div>
        </div>
    );
};

export default EditConsent;
