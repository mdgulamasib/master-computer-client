import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemsCard.css'

const ItemsCard = ({ item }) => {
    const { name, img, price, description, quantity, supplier } = item;

    const navigate = useNavigate();

    const navigateToUpdate = id => {
        navigate('/updateitems')
    }

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top img-sizing" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6 className="card-text fw-bold">Approximate Fees: ${price}</h6>
                    <p className="card-text">{description}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <button onClick={() => navigateToUpdate()} className="btn-primary update-btn">Update Data</button>
                </div>
            </div>
        </div >
    );
};

export default ItemsCard;


