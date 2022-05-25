import React from 'react';
import { Link } from 'react-router-dom';

const MyorderRow = ({ order }) => {
    const { _id, pname, email, quantity, price_per_unit,
        paid, transactionId } = order

    const handealDelete = (deletId) => {
        const proceed = window.confirm("are you confirm,Delit This Item?")
        if (proceed) {
            const url = `https://agile-eyrie-75679.herokuapp.com/orders/${deletId}`
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                })
        }

    }
    return (
        <tr>
            <th>1</th>
            <th>{pname}</th>
            <th>{email}</th>
            <th>{quantity}</th>
            <th>{price_per_unit}</th>
            {/* <th><button class="btn btn-success btn-xs">Pay</button> <button class="btn btn-error btn-xs" onClick={()=>handealDelete(_id)}>X</button></th> */}
            <th>{(price_per_unit && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                {(price_per_unit && paid) && <div>
                    <p><span className=' text-success'>paid</span></p>
                    <p><span className=' text-success'>transactionId:{transactionId}</span></p>

                </div>}

                {(price_per_unit && !paid) && <button class="btn btn-error btn-xs" onClick={() => handealDelete(_id)}>X</button>}
            </th>

        </tr>
    );
};

export default MyorderRow;