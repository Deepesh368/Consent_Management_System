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

export const patientLogIn = (formData) => API.post('/patient/login', formData);
export const patientLogOut = (formData) =>
    API.post('/patient/logout', formData);

// export const signUp = (formData) => API.post('/patient/register', formData);
