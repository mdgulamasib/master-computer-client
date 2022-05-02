import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import MyItemCard from '../MyItemCard/MyItemCard';

const MyItems = () => {

    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {

        async function fetchMyAPI() {
            const email = user?.email;
            const url = `https://tranquil-escarpment-61810.herokuapp.com/myitems?email=${email}`;
            try {
                await fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => setMyItems(data))
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    Navigate('/login')
                }
            }
        }
        fetchMyAPI()
    }, [user?.email])


    const handleItemDelete = id => {
        const proceed = window.confirm('Deleting Items is Permanent! Think twice before pressing OK...');
        if (proceed) {
            const url = `https://tranquil-escarpment-61810.herokuapp.com/item/${id}`;
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
            <h2 className='fw-bold text-center mt-5'>TOTAL ITEM ADDED - {myItems.length}</h2>
            <div className='row  mb-5'>{
                myItems.map(item => <MyItemCard key={item._id} item={item} handleItemDelete={handleItemDelete}></MyItemCard>)
            }</div>
        </div>
    );
};

export default MyItems;