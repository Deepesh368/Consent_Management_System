import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('hospital')) {
        req.headers.Authorization = `${
            JSON.parse(localStorage.getItem('hospital')).token
        }`;
    }
    return req;
});

export const doctorRegister = (formData) => API.post('', formData);
