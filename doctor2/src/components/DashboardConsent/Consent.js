import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/CardContent';
import { CardContent, CardHeader, Typography, Button } from '@material-ui/core';
import Paper from '@mui/material/Paper';

import { useDispatch } from 'react-redux';
import { GET_PATIENT_RECORD } from '../../constants/actionTypes';
import { getPatientRecordByConsent } from '../../actions/healthRecord';

const Consent = (props) => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const goToHealthRecord = async () => {
        await dispatch(getPatientRecordByConsent(props.requestId));
        navigate(`/doctor/records/${props.requestId}`);
    };

    return (
        <div>
            <Paper
                variant="outlined"
                elevation={3}
                sx={{ background: 'LightYellow', margin: '4%' }}
            >
                <Card variant="outlined">
                    <CardHeader title={'Consent Information'} />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            <h3>request Id: {props.requestId}</h3>
                            {/* <h3>doctorId={props.doctorId}</h3> */}
                            <h3>patient Id: {props.patientId}</h3>
                            {/* <h3>
                                requesting Hospital Id=
                                {props.requestingHospitalId}
                            </h3> */}
                            <h3>status: {props.status}</h3>

                            <h3>
                                request Start Date:{' '}
                                {props.reqStartDate
                                    ? props.reqStartDate
                                          .slice(0, 10)
                                          .split('-')
                                          .reverse()
                                          .join('-')
                                    : props.reqStartDate}
                            </h3>
                            <h3>
                                request End Date:{' '}
                                {props.reqEndDate
                                    ? props.reqEndDate
                                          .slice(0, 10)
                                          .split('-')
                                          .reverse()
                                          .join('-')
                                    : props.reqEndDate}
                            </h3>
                            <h3>
                                request Validity:{' '}
                                {props.reqValidity
                                    ? props.reqValidity
                                          .slice(0, 10)
                                          .split('-')
                                          .reverse()
                                          .join('-')
                                    : props.reqValidity}
                            </h3>
                            <h3>
                                consent Start Date:{' '}
                                {props.consentStartDate
                                    ? props.consentStartDate
                                          .slice(0, 10)
                                          .split('-')
                                          .reverse()
                                          .join('-')
                                    : 'Pending'}
                            </h3>
                            <h3>
                                consent End Date:{' '}
                                {props.consentEndDate
                                    ? props.consentEndDate
                                          .slice(0, 10)
                                          .split('-')
                                          .reverse()
                                          .join('-')
                                    : 'Pending'}
                            </h3>
                            <h3>
                                consent Validity:{' '}
                                {props.consentValidity
                                    ? props.consentValidity
                                          .slice(0, 10)
                                          .split('-')
                                          .reverse()
                                          .join('-')
                                    : 'Pending'}
                            </h3>
                        </Typography>
                    </CardContent>
                </Card>
                <Button
                    style={{ background: 'yellow' }}
                    onClick={goToHealthRecord}
                >
                    View Health Record for this consent
                </Button>
            </Paper>
        </div>
    );
};

export default Consent;
