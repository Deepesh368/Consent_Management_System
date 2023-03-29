import React from "react";
import Card from '@mui/material/CardContent';
import { CardContent, CardHeader, Typography } from "@material-ui/core";
import Paper from '@mui/material/Paper';

const Consent = () =>{
    return (
        <div>
            <Paper variant="outlined" elevation={3} sx={{ marginTop:"5%", maxWidth: 300, background:"LightYellow"}}>
                <Card variant="outlined">
                <CardHeader 
                    title="Consent Information"
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <h3>Patient ID:</h3>
                        <h3>Doctor ID:</h3>
                        <h3>Hospital ID:</h3>
                        <h3>Start Date:</h3>
                        <h3>End Date:</h3>
                        <h3>Validity:</h3>

                    </Typography>
                </CardContent>
                </Card>
            </Paper>
        </div>
    )
}

export default Consent;