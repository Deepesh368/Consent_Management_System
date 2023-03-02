import * as api from '../api';
import { CREATE_CONSENT } from '../constants/actionTypes';

export const createconsent = (doctor_id, formData) = async(dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createConsent(doctor_id, formData);
        dispatch({ type: CREATE_CONSENT, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}