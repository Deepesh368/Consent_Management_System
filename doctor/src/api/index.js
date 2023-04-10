import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9005' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('doctor')) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem('doctor')).token
        }`;
    }
    return req;
});

export const logIn = (formData) =>
    API.post('/api/v1/auth/authenticate', formData);
