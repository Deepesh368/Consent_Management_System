import {
    START_LOADING,
    END_LOADING,
    GET_HEALTH_RECORDS,
} from '../constants/actionTypes';

const reducer = (state = { isLoading: true, records: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case GET_HEALTH_RECORDS:
            console.log(action.payload.data);
            return { ...state, records: action.payload.data };
        default:
            return state;
    }
};

export default reducer;
