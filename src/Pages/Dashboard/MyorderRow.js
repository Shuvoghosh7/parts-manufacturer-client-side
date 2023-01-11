import React from 'react';
import { Link } from 'react-router-dom';

const MyorderRow = ({ order }) => {
    console.log(order)
    const { _id, pname, email, quantity, price_per_unit, paid, transactionId, userName } = order

    const handealDelete = (deletId) => {

        const url = `https://vertex-technology.onrender.com/orders/${deletId}`
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
            <th>1</th>
            <th>{pname}</th>
            <th>{userName}</th>
            <th>{email}</th>
            <th>{quantity}</th>
            <th>{price_per_unit}</th>
            <th>{(price_per_unit && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                {(price_per_unit && paid) && <div>
                    <p><span className=' text-success'>paid</span></p>
                    <p><span className=' text-success'>transactionId:{transactionId}</span></p>

                </div>}
                {(price_per_unit && !paid) && <>
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

                </>}
            </th>

        </tr >
    );
};

export default MyorderRow;