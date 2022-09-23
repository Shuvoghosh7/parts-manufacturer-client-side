import React from 'react';

const ShowReview = ({ review }) => {
    const { ratings, description } = review
    return (

        <div className="card w-[400px] bg-[#674747] shadow-xl image-full lg:mx-16">
            <div class="card-body">
                <h2 class="card-title font-bold ">Rataing:{ratings} out of 5  </h2>
                <p className='text-lg text-justify text-white'>{description}</p>
                
            </div>
        </div>
    );
};

export default ShowReview;