import { DOCTOR_REGISTER } from '../constants/actionTypes';

const authReducer = (state = { authData: null, docData: null }, action) => {
    switch (action.type) {
        case DOCTOR_REGISTER:
            return { ...state, docData: action?.data };
        default:
            return state;
    }
};

export default authReducer;
