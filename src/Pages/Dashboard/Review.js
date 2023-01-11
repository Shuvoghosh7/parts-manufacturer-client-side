import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';
import swal from 'sweetalert';
import Loading from '../Shared/Loading/Loading';
import { FaStar } from "react-icons/fa";

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
}

const Review = () => {
  const [user, loading, error] = useAuthState(auth)
  const [load, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();


  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [comment, setComment] = useState('');
  const stars = Array(5).fill(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  if (load) {
    return <Loading />
  }
  const handleComment = (e) => {
    const limit = 120;

    // 👇️ only take 50 characters
    setComment(e.target.value.slice(0, limit));
  };

  const handleClick = (value) => {
    setRating(value);
  }
  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  }
  if (loading) {
    return <Loading />
  }

  const onSubmit = (data) => {
    setLoading(true);
    const email = user?.email;
    const photoURL = user?.photoURL;
    const displayName = user?.displayName;
    const review = { ...data, rating, email, photoURL, displayName }
    console.log(review);

    fetch("https://vertex-technology.onrender.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review)
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.message === 'review inserted successfully') {
          swal("Thanks For Your Feedback", `You Are Adding ${rating} Star Reviews`, "success");
        } else {
          setLoading(true);
          swal("Thanks For Your Feedback", `You Are Adding ${rating} Star Reviews`, "success");
          setLoading(false);

        }
      })
    reset()
  }
  return (
    <div className='w-full p-10 lg:w-1/2 mx-auto'>
      <h2 className='text-[#00AAB3] text-center text-3xl font-bold'>Add Your Review</h2>

      <form onSubmit={handleSubmit(onSubmit)} className='card-body pb-0'>
        <div className="avatar mx-auto flex-col items-center gap-3">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={`${user?.photoURL ? user?.photoURL : 'https://i.pravatar.cc/300'}`} alt={`${user?.displayName}`} />
          </div>
          <h2 className="text-2xl font-bold">{user?.displayName}</h2>
        </div>

        <div className="flex flex-row justify-center">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || rating) > index ? colors.orange : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>

        <textarea
          {...register("review", { required: false, maxLength: 500 })}
          className="textarea textarea-primary h-40 my-3 w-full"
          value={comment}
          onChange={handleComment}
          placeholder="Please Your Feedback only take 120 characters"
        ></textarea>
        {/* <input type="submit" className='btn btn-primary' value='Add Review' disabled={!rating} /> */}


        <input type="submit" className='btn btn-primary' value='Add Review' disabled={!rating} />

      </form>

    </div>
  );
};

export default Review;