import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Button from '@mui/material/Button'; 
import Box from '@mui/material/Box';

import "react-datepicker/dist/react-datepicker.css";  



const initialState = {
    doctorId : '0000',
    patientId : '0000',
    hospitalId: '0000',
    requestDate: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    reqValid: new Date(),
    consentStart: new Date(),
    consentEnd: new Date(),
    consentValid: new Date()
};

export default function AddressForm() {

    const history = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(patientlogin(formData, history));
    };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Consent Form creation
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="doctorId"
            name="doctorId"
            label="Doctor id"
            fullWidth
            variant="outlined"
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            required
            id="patientId"
            name="patientId"
            label="Patient id"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="hospitalId"
            name="hospitalId"
            label="Hospital id"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            id="startDate"
            name="startDate"
            label="Start date"
            fullWidth
            variant="outlined"
            selected={formData.startDate} 
            onChange={(date) => setFormData({ ...formData, startDate: date})}    
            dateFormat="MM/dd/yyyy"
            style={{
                width: "100%",
                boxSizing: "border-box",
                height: "26px"
              }}
              containerStyle={{
                width: "100%"
              }}
              calendarPosition="bottom-center"
            />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            id="endDate"
            name="endDate"
            label="End date"
            fullWidth
            variant="outlined"
            selected={formData.endDate} 
            onChange={(date) => setFormData({ ...formData, endDate: date})}    
            dateFormat="MM/dd/yyyy"
            style={{
                width: "100%",
                boxSizing: "border-box",
                height: "26px"
              }}
              containerStyle={{
                width: "100%"
              }}
              calendarPosition="bottom-center"
            />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            id="reqValid"
            name="reqValid"
            label="reqValid"
            fullWidth
            variant="outlined"
            selected={formData.reqValid} 
            onChange={(date) => setFormData({ ...formData, reqValid: date})}    
            dateFormat="MM/dd/yyyy"
            style={{
                width: "100%",
                boxSizing: "border-box",
                height: "26px"
              }}
              containerStyle={{
                width: "100%"
              }}
              calendarPosition="bottom-center"
            />
        </Grid>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
            Submit
        </Button>
    </Grid>
    </Box>
    </React.Fragment>
  );
}