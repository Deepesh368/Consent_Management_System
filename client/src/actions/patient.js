import * as api from '../api';
import { START_LOADING, VIEW_CONSENTS } from '../constants/actionTypes';

export const viewconsents = (patient_id) => async (dispatch) => {
    try {
        console.log(patient_id);
        dispatch({ type: START_LOADING });
        const {
            data: { data },
        } = await api.viewConsents(patient_id);
        dispatch({ type: VIEW_CONSENTS, payload: { data } });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};
