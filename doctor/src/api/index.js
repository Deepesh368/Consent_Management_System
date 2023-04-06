import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9006' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem('profile')).token
        }`;
    }
    return req;
});

export const logIn = (formData) =>  API.post('/api/v1/auth/authenticate', formData);