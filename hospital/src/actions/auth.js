import * as api from '../api';
import { DOCTOR_REGISTER } from '../constants/actionTypes';

export const doctorRegister = (formData) => async (dispatch) => {
    try {
        const { data } = await api.doctorRegister(formData);
        dispatch({ type: DOCTOR_REGISTER, data });
    } catch (error) {
        console.log(error);
    }
};
