import * as api from '../api';
import {
    START_LOADING,
    END_LOADING,
    GET_PATIENT_RECORD,
} from '../constants/actionTypes';

//fetch all health records of a patient by consent ID
export const getPatientRecordByConsent = (consent_id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getRecordByConsentID(consent_id);
        // console.log(data);
        dispatch({ type: GET_PATIENT_RECORD, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
};
