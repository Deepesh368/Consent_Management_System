import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { viewconsents } from '../../../actions/patient';

const GetConsent = () => {
    const dispatch = useDispatch();
    const [consents, setConsents] = useState([]);

    useEffect(() => {
        dispatch(viewconsents(122));
    }, []);

    return <h1>Get Consent</h1>;
};

export default GetConsent;
