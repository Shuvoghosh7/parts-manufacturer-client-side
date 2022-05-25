import React from 'react';
import { useNavigate } from 'react-router-dom';


const ShowTools = ({ part }) => {
    const {_id, picture, pname, description, minimum_order_quantity, available_quantity, price_per_unit
    } = part

    const navigate=useNavigate()
    const purchaseDetails = (DetailsId) => {
        navigate(`/purchase/${DetailsId}`)
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 drop-shadow-2xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{pname}</h2>
                    <p>{description}</p>
                    <p>minimumQuantity:{minimum_order_quantity}</p>
                    <p>available_quantity:{available_quantity}</p>
                    <p>price_per_unit:{price_per_unit}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary" onClick={()=>purchaseDetails(_id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowTools;