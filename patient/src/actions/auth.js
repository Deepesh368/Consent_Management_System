import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const login = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(formData);
        dispatch({ type: AUTH, data });
        navigate('/patient');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        navigate('/patient');
    } catch (error) {
        console.log(error);
    }
};
