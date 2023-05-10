import { Toolbar, TextField, Button } from '@material-ui/core';
import React, {useEffect,useState} from 'react';
import Header from './Navbar.js';
import './styles.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import decode from 'jwt-decode';

const Profile = () => {
    
    const user = JSON.parse(localStorage.getItem('patient'));
    const [name, setName] = useState('NULL');
     const [password, setPassword] = useState('NULL');
      const [email, setmail] = useState('NULL');
       const [number, setNum] = useState(0);
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            console.log(decodedToken);

            setName(decodedToken?.name);
            setmail(decodedToken?.email)
            setNum(decodedToken?.exp)
        }
        console.log(name)
        console.log(email)
    }, []);
    if (!user) {
        return <Navigate to="/login" />;
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    };

    return (
        <div>
            <Header />
            <Toolbar />
            <Toolbar />
            <Toolbar />
            <form onSubmit={handleSubmit}>
                <TextField
                    InputProps={{ disableUnderline: true }}
                    style={{
                        background: 'white',
                        margin: 'auto auto 1% 40%',
                        width: '20%',
                        color: 'white',
                    }}
                    label="   Name"
                    fullWidth
                    required
                    variant="outlined"
                />
                <TextField
                    InputProps={{ disableUnderline: true }}
                    style={{
                        background: 'white',
                        margin: '1% auto 1% 40%',
                        width: '20%',
                    }}
                    label="   Email"
                    type="Email"
                    fullWidth
                    required
                    variant="outlined"
                />
                
                <TextField
                    InputProps={{ disableUnderline: true }}
                    style={{
                        background: 'white',
                        margin: '1% auto auto 40%',
                        width: '20%',
                    }}
                    label="   Phone Number"
                    type="number"
                    fullWidth
                    required
                    variant="outlined"
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={{
                        background: '#20CD51',
                        margin: 'auto auto 1% 40%',
                        marginTop: '1%',
                        marginLeft: '45%',
                        width: '10%',
                        color: 'white',
                    }}
                >
                    Update Profile
                </Button>
            </form>
        </div>
    );
};

export default Profile;
