import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import Spinner from '../LoadingStatus/Spinner/Spinner'
import './Register.css'
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Register = () => {
    const nameRef = useRef('')
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);

    const [sendEmailVerification] = useSendEmailVerification(auth);

    if (loading || updating) {
        return <Spinner></Spinner>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        await updateProfile({ displayName: name });
    }

    const navigateRegister = event => {
        navigate('/login')
    }

    return (
        <div className='container text-center responsive-width mx-auto'>
            <h2 className=' text-color text-center my-5 fw-bold'>PLEASE REGISTER</h2>
            <Form onSubmit={handleRegister} className='form-align'>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Email Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='btn-design' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            {errorElement}
            <p className='mt-3'>Already have an account?<span className='text-primary btn' onClick={navigateRegister}>Click to Login</span></p>
            <div className='d-flex align-items-center w-25  mx-auto'>
                <div className='divider-bg w-100'></div>
                <p className='mt-2 px-2 fw-bold'>OR</p>
                <div className='divider-bg w-100'></div>
            </div>
            <GoogleSignIn></GoogleSignIn>
        </div>

    );
};

export default Register;