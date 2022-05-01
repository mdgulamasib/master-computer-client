import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import MyItemCard from '../MyItemCard/MyItemCard';

const MyItems = () => {

    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {

        async function fetchMyAPI() {
            const email = user?.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
            await fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setMyItems(data))
        }
        fetchMyAPI()
    }, [user?.email])


    const handleItemDelete = id => {
        const proceed = window.confirm('Deleting Items is Permanent! Think twice before pressing OK...');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myItems.filter(item => item._id !== id);
                        setMyItems(remaining);
                    }
                })
        }
    }

    return (
        <div className='container'>
            <h1>My added Items: {myItems.length}</h1>
            <div className='row'>{
                myItems.map(item => <MyItemCard key={item._id} item={item} handleItemDelete={handleItemDelete}></MyItemCard>)
            }</div>
        </div>
    );
};

export default MyItems;