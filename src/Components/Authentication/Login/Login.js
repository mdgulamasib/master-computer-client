import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Spinner from '../../Authentication/LoadingStatus/Spinner/Spinner'


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Spinner></Spinner>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }




    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast.success("Email Sent, Please Check Inbox Or Spam Folder", {
                position: toast.POSITION.TOP_CENTER,
                theme: 'colored'
            });

        }


        else {
            toast.error("Enter Your Email & Click The Reset Link", {
                position: toast.POSITION.TOP_CENTER,
                theme: 'colored'
            });
        }
    }



    return (
        <div className='container text-center responsive-width mx-auto'>
            <h2 className=' text-color text-center my-5 fw-bold'>Please Login</h2>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Email Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='btn-bg w-50' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}

            <div>
                <p className='mt-3 mb-0'>Don't have an account?<span className='text-primary btn' onClick={navigateRegister}>Click to Register</span></p>
                <p className='m-0'>Forget Password?<span className='btn  text-primary' onClick={resetPassword}>Reset Password</span></p>
            </div>
            <div className='d-flex align-items-center'>
                <div className='divider-bg w-50'></div>
                <p className='mt-2 px-2 fw-bold'>OR</p>
                <div className='divider-bg w-50'></div>
            </div>
            <ToastContainer />

        </div>
    );
};


export default Login;