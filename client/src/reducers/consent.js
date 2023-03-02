import {
    START_LOADING,
    END_LOADING,
    VIEW_CONSENTS,
    CREATE_CONSENT,
} from '../constants/actionTypes';

const reducer = (state = { isLoading: true, consent: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };

        case VIEW_CONSENTS:
            console.log(action.payload.data);
            return {
                ...state,
                consent: action.payload.data,
            };
        case CREATE_CONSENT:
            return { ...state, consent: [...state.consent, action.payload] };
        default:
            return state;
    }
};

export default reducer;
