import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItems = () => {
    const { itemId } = useParams();

    const [itemData, setItemData] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItemData(data));
    });

    const handleDelivered = event => {
        event.preventDefault();
        const quantity = parseInt(itemData.quantity) - 1;
        console.log(quantity)
        const updateItem = { quantity };

        // sending data for decrease data by 1
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
            })
    }

    const handleUpdateQuantity = (event, newQuantity) => {
        event.preventDefault();
        const quantity = parseInt(event.target.quantity.value) + parseInt(itemData.quantity);
        console.log(quantity)
        const updateItem = { quantity };

        // sending data for adding quantity
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                event.target.reset();
            })
    }

    return (
        <div className=" container w-50 card mt-5 mb-5" style={{ width: "auto" }}>
            <img src={itemData.img} className="card-img-top img-sizing" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{itemData.name}</h4>
                <h6 className="card-text fw-bold">Approximate Fees: ${itemData.price}</h6>
                <p className="card-text">{itemData.description}</p>
                <p>Quantity: {itemData.quantity}</p>
                <p>Supplier: {itemData.supplier}</p>

            </div>

            <button onClick={handleDelivered} className='mb-3 w-50 mx-auto'>Delivered</button>

            <form onSubmit={handleUpdateQuantity} className="text-center">
                <input type="number" name="quantity" placeholder='quantity' required /><br />
                <input className='mt-3 w-50' type="submit" value="Add Quantity" />
            </form>
        </div>
    );
};

export default UpdateItems;