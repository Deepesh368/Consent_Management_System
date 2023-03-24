import { combineReducers } from 'redux';
import patientAuth from './patientAuth';
import consent from './consent';

export default combineReducers({ patientAuth, consent });
