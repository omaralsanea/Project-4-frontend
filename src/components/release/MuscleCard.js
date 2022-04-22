import React from 'react';
import { Link } from 'react-router-dom';

const MuscleCard = ({ id, title, artwork }) => {
  return (
    <div className='column is-one-quarter-desktop is-one-third-tablet'>
      <Link to={`/muscles/${id}`}>
        <div className='card'>
          <div className='card-image'>
            <figure className='image is-1by1'>
              <img src={artwork} alt={title} />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MuscleCard;
