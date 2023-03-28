import { PATIENT_AUTH, PATIENT_LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case PATIENT_AUTH:
            localStorage.setItem(
                'profile',
                JSON.stringify({ ...action?.data })
            );
            return { ...state, authData: action?.data };
        case PATIENT_LOGOUT:
            localStorage.clear();
            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducer;
