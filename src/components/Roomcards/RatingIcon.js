import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingIcon = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const starClass = i < rating ? 'star-filled' : 'star-empty';
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={`star ${starClass}`}
      />
    );
  }

  return <div className="rating-icon">{stars}</div>;
};

export default RatingIcon;
