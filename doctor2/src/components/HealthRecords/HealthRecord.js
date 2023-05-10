import React from 'react';
import Card from '@mui/material/CardContent';
import { CardContent, CardHeader, Typography, Button } from '@material-ui/core';
import Paper from '@mui/material/Paper';

const HealthRecord = (props) => {
    console.log(props.reportDetails);
    return (
        <div>
            <Button style={{ maxWidth: '100%', textAlign: 'left' }}>
                <Paper
                    variant="outlined"
                    elevation={3}
                    sx={{ background: 'LightYellow' }}
                >
                    <Card variant="outlined">
                        <CardHeader title={'Health Record Information'} />
                        <CardContent>
                            {props.reportDetails.includes('not given') ? (
                                <h3>{props.reportDetails}</h3>
                            ) : (
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    <h3>id: {props.id}</h3>
                                    <h3>
                                        date of Visit:{' '}
                                        {props.dateOfVisit
                                            ? props.dateOfVisit
                                                  .slice(0, 10)
                                                  .split('-')
                                                  .reverse()
                                                  .join('-')
                                            : props.dateOfVisit}
                                    </h3>
                                    <h3>record Type: {props.recordType}</h3>
                                    <h3>
                                        report Details: {props.reportDetails}
                                    </h3>
                                    <h3>Severity: {props.severity}</h3>
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Paper>
            </Button>
        </div>
    );
};

export default HealthRecord;
