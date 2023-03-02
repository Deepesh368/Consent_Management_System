import { combineReducers } from 'redux';
import patientAuth from './patientAuth';
import patient from './patient';

export default combineReducers({ patientAuth, patient });
