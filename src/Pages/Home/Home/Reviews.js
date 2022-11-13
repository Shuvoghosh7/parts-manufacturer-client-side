import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ShowReview from '../ShowReview';
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('review', () => fetch('https://agile-eyrie-75679.herokuapp.com/get-review').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='my-16'>
            <SectionTitle>Customers Reviews:</SectionTitle>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-12 lg:mx-12 gap-y-5 mx-auto'>
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