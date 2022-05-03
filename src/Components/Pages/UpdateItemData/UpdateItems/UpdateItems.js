import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './UpdateItems.css'

const UpdateItems = () => {
    const { itemId } = useParams();

    const [itemData, setItemData] = useState({});
    const [reload, setIsReload] = useState(true)


    useEffect(() => {
        const url = `https://tranquil-escarpment-61810.herokuapp.com/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItemData(data));
    }, [reload]);

    const handleDelivered = event => {
        event.preventDefault();
        const num = parseInt(itemData.quantity);
        const quantity = (num > 0) ? num - 1 : num;
        const updateItem = { quantity };

        // sending data for decrease data by 1
        const url = `https://tranquil-escarpment-61810.herokuapp.com/item/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                setIsReload(!reload)
            })
    }

    const handleUpdateQuantity = (event, newQuantity) => {
        event.preventDefault();
        const quantity = parseInt(event.target.quantity.value) + parseInt(itemData.quantity);
        const updateItem = { quantity };

        // sending data for adding quantity
        const url = `https://tranquil-escarpment-61810.herokuapp.com/item/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                setIsReload(!reload)
            })
    }

    return (
        <>
            <div className=" container w-75 card mt-5 mb-5" style={{ width: "auto" }}>
                <img src={itemData.img} className="card-img-top img-sizing" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{itemData.name}</h4>
                    <h6 className="card-text fw-bold">Approximate Fees: ${itemData.price}</h6>
                    <p className="card-text">{itemData.description}</p>
                    <p>Quantity: {itemData.quantity > 0 ?
                        itemData.quantity : 'Out of Stock'}</p>
                    <p>Supplier: {itemData.supplier}</p>

                </div>

                <button onClick={handleDelivered} className='mb-3 mx-auto btn-design'>Delivered</button>

                <form onSubmit={handleUpdateQuantity} className="text-center">
                    <input type="number" name="quantity" placeholder='quantity' required /><br />
                    <input className='mt-3 btn-design' type="submit" value="Add Quantity" />
                </form>
            </div>
            <h5 className='text-center'><Link to="/manageinventory"><button className='my-5 p-2 btn-design'>MANAGE INVENTORY</button></Link></h5>
        </>
    );
};

export default UpdateItems;

