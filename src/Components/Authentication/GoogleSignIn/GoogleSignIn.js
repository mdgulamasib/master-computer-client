import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../LoadingStatus/Spinner/Spinner'
import google_icon from '../../../images/google_icon.png'
import './GoogleSignIn.css'
const GoogleSignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;



    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        return <Spinner></Spinner>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        const email = user?.user?.email;
        fetch('https://tranquil-escarpment-61810.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => { localStorage.setItem('accessToken', data.accessToken) });
    }

    if (user) {
        navigate(from, { replace: true });
        window.location.reload(false);
    }

    return (
        <div>
            {errorElement}
            <button onClick={() => signInWithGoogle()}
                className='btn mx-auto my-2 googlelogin-btn'>
                <img src={google_icon} alt="" />
                <span className='px-2'>Login Using Google Account</span>
            </button>
        </div>
    );
};

export default GoogleSignIn;