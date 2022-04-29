import React from 'react';

const Loading = () => {
    return (
        <div style={{ height: '300px' }} className='w-100 d-flex justify-content-center align-items-center'>
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm p-2" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    );
};

export default Loading;