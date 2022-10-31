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
            <section className="product-card card card-compact w-96 bg-teal-50 border-[0.5px] hover:shadow-2xl transition-all duration-300 mx-auto">
                <figure className="overflow-hidden">
                    <img src={picture} alt="Shoes" />
                </figure>
                <div className="card-body product-card-body pt-20">
                    <h2 className="card-title py-2">{pname}</h2>
                    <p>{description.slice(0, 120)}...</p>
                    <div className="flex justify-between">
                        <p className="text-left">Available : {available_quantity}</p>
                        <p className="text-right">Minimum Order : {minimum_order_quantity}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-left text-2xl uppercase font-medium">
                            price: <span className="font-bold">${price_per_unit}</span>
                        </p>
                        <button class="btn btn-primary bg-[#125d80] card-button text-white" onClick={() => purchaseDetails(_id)}>Order Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Allproducts;