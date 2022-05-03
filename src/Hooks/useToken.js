import { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            const email = user?.user?.email;
            if (email) {
                await fetch('https://tranquil-escarpment-61810.herokuapp.com/login', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                })
                    .then(res => res.json())
                    .then(data => {
                        setToken(data.accessToken);
                        localStorage.setItem('accessToken', data.accessToken)
                    });
            }
        }
        getToken();
    }, [user]);
    return [token];
};
export default useToken;