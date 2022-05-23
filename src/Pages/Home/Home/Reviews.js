import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h1 className='text-xl font-bold'>Reviews</h1>

            <div class="card w-[300px] bg-base-100 shadow-xl image-full lg:mx-16">
                <figure><img className='w-full' src="https://i.ibb.co/5ckpTrF/images.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
            </div>

        </div>
    );
};

export default Reviews;