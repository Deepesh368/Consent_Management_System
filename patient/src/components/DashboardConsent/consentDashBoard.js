import { Toolbar, Grid, CircularProgress } from '@material-ui/core';
import React from 'react';
import Header from './Navbar.js';
import Consent from './Consent.js';
import { useSelector } from 'react-redux';
import decode from 'jwt-decode';

import { getAllConsents } from '../../actions/consent.js';

const ConsentDashBoard = () => {
    const { consents, isLoading } = useSelector((state) => state.consents);
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('patient'))
    );

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            const patient_id = decodedToken.id;
            dispatch(getAllConsents(patient_id));
        }
    }, []);

    let cards = [];
    for (let i = 0; i < 20; i++) {
        cards.push(i);
    }
    let status = 'green';

    if (!consents.length && !isLoading) return 'No consent requests';

    return isLoading ? (
        <CircularProgress />
    ) : (
        <div>
            <Header />
            <Toolbar />
            <Grid
                style={{ marginTop: '2%' }}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {cards.map((id) => (
                    <Consent key={id} consentNum={id} status={status} /> //NEED TO PASS CONSENT PROPERTIES
                ))}
            </Grid>
        </div>
    );
};

export default ConsentDashBoard;
