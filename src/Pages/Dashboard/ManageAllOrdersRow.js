import React from 'react';

const ManageAllOrdersRow = ({ product, index }) => {
    const { _id, picture, pname, available_quantity, price_per_unit } = product

    const handealDelete = (deletId) => {

        const url = `http://localhost:5000/detete-parts/${deletId}`
        fetch(url, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
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
            <th>{price_per_unit}</th>
            <th>
                <>
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

                </>
            </th>

        </tr>
    );
};

export default ManageAllOrdersRow;