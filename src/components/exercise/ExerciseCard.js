import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ id, title, image }) => {
  return (
    <div className='column is-one-quarter-desktop is-one-third-tablet px-4'>
      <Link to={`/exercises/${id}`}>
        <h2 className='is-centered card-header-title is-size-5 mb-2 has-text-black'>
          {title}
        </h2>

        {/* <div className="card-image"> */}
        <figure className='image is-1by1 exercise-img'>
          <img src={image} alt={title} className='is-rounded' />
        </figure>
        {/* </div> */}
      </Link>
    </div>
  );
};

export default ExerciseCard;
