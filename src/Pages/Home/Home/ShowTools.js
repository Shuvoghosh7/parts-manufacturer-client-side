import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Style/ShowTools.css'

const ShowTools = ({ part }) => {
    const { _id, picture, pname, description, minimum_order_quantity, available_quantity, price_per_unit
    } = part

    const navigate = useNavigate()
    const purchaseDetails = (DetailsId) => {
        navigate(`/purchase/${DetailsId}`)
    }
    return (
        <div>
            <div class="card lg:w-[450px] bg-base-100 drop-shadow-2xl">
                <figure>
                    <div class="avatar mt-5 card-img">
                        <div class="w-52 rounded-full border-4 border-indigo-600 p-8">
                            <img src={picture} />
                        </div>
                    </div>
                </figure>
                <div class="card-body">
                    <h2 class="card-title flex justify-center text-3xl font-bold">{pname}</h2>
                    <p className='text-lg font-medium'>{description}</p>
                    {/* <p><span className='font-bold'>minimumQuantity:</span>{minimum_order_quantity}</p> */}
                    <div class="card-actions justify-center mt-5">
                        <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary card-button" onClick={() => purchaseDetails(_id)}>Order Now</button>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <p className='text-xl'><span className='font-bold text-xl'>Quantity:</span>{available_quantity}</p>
                        <p className='text-xl ml-28'><span className='font-bold text-xl'>Price:</span> ${price_per_unit}</p>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default ShowTools;