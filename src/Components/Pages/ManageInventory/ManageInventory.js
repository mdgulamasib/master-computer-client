import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryCard from '../ManageInventoryCard/InventoryCard';

const ManageInventory = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

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
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
                })
        }
    }

    return (
        <div className='container'>
            <div>
                <h2 className='text-center mt-5 fw-bold'>ALL STOCK ITEMS</h2>
                <div className='row'>
                    {
                        items.map(item => <InventoryCard key={item._id} item={item} handleItemDelete={handleItemDelete}></InventoryCard>)
                    }
                </div>
                <h5 className='text-center'><Link to="/addnewitem"><button className='my-5 p-2 btn-design'>ADD NEW ITEM</button></Link></h5>
            </div>
        </div>
    );
};

export default ManageInventory;