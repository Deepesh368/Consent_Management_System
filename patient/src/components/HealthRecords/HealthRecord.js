import React from "react";
import Card from '@mui/material/CardContent';
import { CardContent, CardHeader, Typography, Button } from "@material-ui/core";
import Paper from '@mui/material/Paper';

const HealthRecord = (props) =>{

    return (
        <div>
        <Button style={{ maxWidth: '100%', textAlign:"left"}}>
            <Paper variant="outlined" elevation={3} sx={{background:"LightYellow"}}>
                <Card variant="outlined">
                <CardHeader 
                    title={"Health Record Information - " + props.recordNum} 
                    subheader={props.date}

                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <h3>Report Name</h3>
                        <h3>Report Details</h3>
                        <h3>Severity</h3>

                    </Typography>
                </CardContent>
                </Card>
            </Paper>
        </Button>
           
        </div>
    )
}

export default HealthRecord;