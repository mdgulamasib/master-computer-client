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
    }, []);

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
        </div>
    );
};

export default UpdateItems;