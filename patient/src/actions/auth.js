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

// import * as api from '../api';
// import { AUTH } from '../constants/actionTypes';

// export const signin = (formData, history) => async (dispatch) => {
//     try {
//         const { data } = await api.signIn(formData);
//         dispatch({ type: AUTH, data });
//         history.push('/');
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const signup = (formData, history) => async (dispatch) => {
//     try {
//         const { data } = await api.signUp(formData);
//         dispatch({ type: AUTH, data });
//         history.push('/');
//     } catch (error) {
//         console.log(error);
//     }
// };
