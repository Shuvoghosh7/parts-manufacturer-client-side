import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ShowReview from '../ShowReview';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('review', () => fetch('https://agile-eyrie-75679.herokuapp.com/get-review').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='my-16'>
            <h1 className='text-xl font-bold text-center text-success'>Customers Reviews:</h1>

            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-12 mx-12'>
                {
                    reviews?.slice(Math.max(reviews.length - 3, 1)).map(rev => <ShowReview
                        key={rev._id}
                        rev={rev}
                    />)
                }

            </div>
        </div>
    );
};

export default Reviews;