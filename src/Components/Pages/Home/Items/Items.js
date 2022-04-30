import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            <div>
                <h2 className='text-center mt-5'>Top Stock Items</h2>
                <div className='row'>
                    {
                        items.slice(0, 6).map(item => <ItemsCard key={item._id} item={item}></ItemsCard>)
                    }
                </div>
                <h5 className='text-center'><Link to="/manageinventory"><button className='my-5 p-2'>Manage Inventory</button></Link></h5>
            </div>
        </div>
    );
};

export default Items;
