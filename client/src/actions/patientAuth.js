import * as api from '../api';
import { PATIENT_AUTH, PATIENT_LOGOUT } from '../constants/actionTypes';

export const patientlogin = (formData, history) => async (dispatch) => {
    try {
        console.log(formData);
        const { data } = await api.patientLogIn(formData);
        dispatch({ type: PATIENT_AUTH, data });
        history.push('/patient');
    } catch (error) {
        console.log(error);
    }
};

export const patientlogout = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.patientLogOut(formData);
        dispatch({ type: PATIENT_LOGOUT, data });
        history.push('/');
    } catch (error) {
        console.log(error);
    }
};
