import React from 'react';
import { toast } from 'react-toastify';

const ManageProductsRow = ({ product, index }) => {
    const { _id, picture, pname, available_quantity, price_per_unit } = product

    const handealDelete = (deletId) => {
        const url = `https://manufacturer-website.vercel.app/detete-parts/${deletId}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })


    }
    const handealEdit = (event) => {
        event.preventDefault();
        const pname = event.target.pname.value
        const available_quantity = event.target.available_quantity.value
        const price_per_unit = event.target.price_per_unit.value
        const data = {
            pname,
            available_quantity,
            price_per_unit
        }
        fetch(`https://manufacturer-website.vercel.app/edit-parts/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast("Product update successfully")
                window.location.reload(false);
            })

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th>
                <div class="avatar">
                    <div class="w-24 rounded-xl">
                        <img src={picture} />
                    </div>
                </div>
            </th>
            <th>{pname}</th>
            <th>{available_quantity}</th>
            <th>{price_per_unit}$</th>
            <th>
                <div>
                    <label for="my-modal-6" class="btn modal-button btn-error btn-sm" onClick={() => handealDelete(_id)} >Delete</label>
                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">Are you sure delete this item!</h3>
                            <div class="modal-action">
                                <label for="my-modal-6" class="btn">OK</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <label for="my-modal-3" class="btn modal-button btn-success btn-sm ">Edit</label>
                    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                    <div class="modal mt-12">
                        <div class="modal-box relative">
                            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <div className='login-container'>
                                <form onSubmit={handealEdit}>
                                    <div className='input-field'>
                                        <label>PRODUCT NAME</label>
                                        <input type="text" defaultValue={pname} name="pname" id="" />
                                    </div>
                                    <div className='input-field'>
                                        <label>QUANTITY</label>
                                        <input type="text" defaultValue={available_quantity} name="available_quantity" id="" />
                                    </div>
                                    <div className='input-field'>
                                        <label>PRICE</label>
                                        <input type="text" defaultValue={price_per_unit} name="price_per_unit" id="" />
                                    </div>
                                    <input className='submit-button' type="submit" value="Update Product" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </th>
        </tr>
    );
};

export default ManageProductsRow;