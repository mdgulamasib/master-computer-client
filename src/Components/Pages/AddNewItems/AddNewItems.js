import React from 'react';

const AddNewItems = () => {
    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;


        const newItem = { name, price, description, img, quantity, supplier };

        // send data new added item data
        fetch('http://localhost:5000/item', {
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
            <h2>Add New Items</h2>
            <form onSubmit={handleAddItem}>
                <input type="text" name="name" placeholder='Item Name' required />
                <br />
                <input type="number" name="price" placeholder='Item Price' required />
                <br />
                <textarea type="text" name="description" placeholder='Item Description' required cols="30" rows="10"></textarea>
                <br />
                <input type="text" name="img" placeholder='Item Image URL' required />
                <br />
                <input type="number" name="quantity" placeholder='Quantity' required />
                <br />
                <input type="text" name="supplier" placeholder='Item supplier' required />
                <br />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddNewItems;