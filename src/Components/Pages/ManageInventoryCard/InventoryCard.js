import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryCard = ({ item, handleItemDelete }) => {
    const { _id, name, img, price, description, quantity, supplier } = item;

    const navigate = useNavigate();

    const navigateToUpdate = id => {
        navigate(`/updateitems/${id}`)
    }

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top img-sizing" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6 className="card-text fw-bold">Approximate Fees: ${price}</h6>
                    <p className="card-text"><small>{description}</small></p>
                    <p><small> Quantity:{quantity}</small> </p>
                    <p><small>Supplier: {supplier}</small></p>
                    <button onClick={() => navigateToUpdate(_id)} className="btn-design">Update Quantity</button>
                    <button onClick={() => handleItemDelete(_id)} className="btn-design ms-1">Delete</button>
                </div>
            </div>
        </div >
    );
};

export default InventoryCard;


