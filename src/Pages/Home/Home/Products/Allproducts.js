import React from 'react';
import { useNavigate } from 'react-router-dom';

const Allproducts = ({ part }) => {
    const { _id, picture, pname, description, minimum_order_quantity, available_quantity, price_per_unit
    } = part

    const navigate = useNavigate()
    const purchaseDetails = (DetailsId) => {
        navigate(`/purchase/${DetailsId}`)
    }
    return (
        <div>
                <div class="card w-96 bg-base-100 drop-shadow-2xl">
                    <figure>
                        <div className='card-img'>
                            <img src={picture} alt="Shoes" />
                        </div>
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{pname}</h2>
                        {/* <p>{description}</p> */}
                        {/* <p><span className='font-bold'>minimumQuantity:</span>{minimum_order_quantity}</p> */}
                        <p><span className='font-bold'>Available_quantity:</span>{available_quantity}</p>
                        <p><span className='font-bold'>price_per_unit:</span> ${price_per_unit}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary card-button" onClick={() => purchaseDetails(_id)}>Order Now</button>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Allproducts;