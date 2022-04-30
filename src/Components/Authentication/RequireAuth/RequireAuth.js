import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../LoadingStatus/Spinner/Spinner'

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    const refreshPage = () => {
        window.location.reload(false);
    }

    if (loading || sending) {
        return <Spinner></Spinner>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    if (!user.emailVerified) {
        return <div className='verify-style'>
            <h2>Your Email Is Not Verified Yet!!!</h2>
            <button className='btn-primary' variant="primary"
                onClick={async () => {
                    await sendEmailVerification();
                    toast.success("Email Sent, Please Check Inbox Or Spam Folder", {
                        position: toast.POSITION.TOP_CENTER,
                        theme: 'colored'
                    });
                }}
            >
                Get Verify Email
            </button><br />
            <p className='mt-3'>Once you have confirmed the Email, Please reload the page</p>
            <button className='btn-primary' variant="primary" onClick={refreshPage}>
                Page Reload
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};


export default RequireAuth;