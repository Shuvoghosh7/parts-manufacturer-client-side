import React from 'react';

const ShowReview = ({ review }) => {
    const { ratings, description } = review
    return (
        <div class="card w-[300px] bg-base-100 shadow-xl image-full lg:mx-16">
            <figure><img className='w-full' src="https://i.ibb.co/5ckpTrF/images.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title font-bold">Rataing:{ratings} out of 5  </h2>
                <p className='font-bold'>{description}</p>
            </div>
        </div>
    );
};

export default ShowReview;