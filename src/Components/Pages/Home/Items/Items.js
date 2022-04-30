import React, { useEffect, useState } from 'react';
import ItemsCard from '../ItemsCard/ItemsCard';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center mt-5'>Top Stock Items</h2>
            <div className='row'>
                {
                    items.map(item => <ItemsCard key={item._id} item={item}></ItemsCard>)
                }
            </div>


        </div>
    );
};

export default Items;
