import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9001' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `${
            JSON.parse(localStorage.getItem('profile')).token
        }`;
    }
    return req;
});

//Patient Specific
export const patientLogIn = (formData) => API.post('/patient/login', formData);
export const viewConsents = (patient_id) =>
    API.get(`/consent/get/patient?patient_id=${patient_id}`);

//Doctor Specific
export const createConsent = (doctor_id, formData) =>
    API.post(`/consent/doctor/create?doctor_id=${doctor_id}`, formData);
