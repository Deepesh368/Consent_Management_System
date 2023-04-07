import React from 'react';
import Card from '@mui/material/CardContent';
import { CardContent, CardHeader, Typography, Button } from '@material-ui/core';
import Paper from '@mui/material/Paper';

const Consent = (props) => {
    return (
        <div>
            <Button style={{ maxWidth: '100%', textAlign: 'left' }}>
                <Paper
                    variant="outlined"
                    elevation={3}
                    sx={{ background: 'LightYellow' }}
                >
                    <Card variant="outlined">
                        <CardHeader
                            title={'Consent Information - ' + props.consentNum}
                            subheader="September 14, 2016"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <h3>Patient ID:</h3>
                                <h3>Doctor ID:</h3>
                                <h3>Hospital ID:</h3>
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Button>
        </div>
    );
};

export default Consent;
