import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {

    const [user] = useAuthState(auth)

    const [myItems, setMyItems] = useState([]);
    console.log(myItems)
    useEffect(() => {

        async function fetchMyAPI() {
            const email = user?.email;
            let data = await fetch(`http://localhost:5000/myitems?email=${email}`)
            data = await data.json()
            setMyItems(data)
        }
        fetchMyAPI()
    }, [user])

    return (
        <div>
            <h1>My added Items: {myItems.length}</h1>
        </div>
    );
};

export default MyItems;