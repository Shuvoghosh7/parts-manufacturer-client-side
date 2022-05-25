import React from 'react';

const MyorderRow = ({order}) => {
    const{_id,pname,email,quantity,price_per_unit
    }=order

    const handealDelete = (deletId) => {
        const proceed = window.confirm("are you confirm,Delit This Item?")
        if (proceed) {
            const url = `http://localhost:5000/orders/${deletId}`
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
            <th><button class="btn btn-success btn-xs">Pay</button> <button class="btn btn-error btn-xs" onClick={()=>handealDelete(_id)}>X</button></th>
            
        </tr>
    );
};

export default MyorderRow;