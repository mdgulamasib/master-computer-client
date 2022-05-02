import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './AddNewItems.css'

const AddNewItems = () => {
    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const email = user.email;


        const newItem = { name, price, description, img, quantity, supplier, email };

        // send data new added item data
        fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                alert('Item added successfully!!!');
                event.target.reset();
            })
    }
    return (
        <div className='container text-center mx-auto'>
            <h2 className='my-3 fw-bold'>ADD NEW ITEM</h2>
            <form onSubmit={handleAddItem}>
                <input type="text" className='custom-field' name="name" placeholder='Item Name' required />
                <br />
                <input type="number" name="price" className='custom-field' placeholder='Item Price' required />
                <br />
                <textarea type="text" name="description" placeholder='Item Description' className='custom-field' required cols="22" rows="2"></textarea>
                <br />
                <input type="text" name="img" className='custom-field' placeholder='Item Image URL' required />
                <br />
                <input type="number" className='custom-field' name="quantity" placeholder='Quantity' required />
                <br />
                <input type="text" name="supplier" className='custom-field' placeholder='Item supplier' required />
                <br />
                <input type="submit" className='btn-design my-3' value="ADD  ITEM" />
            </form>
        </div>
    );
};

export default AddNewItems;

