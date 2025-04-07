import React from 'react';

const DestinationCard = ({ destination }) => {
  const { name, location, image, description, price } = destination;

  return (
    <div>
      <img src={image} alt={name} style={{height: "200px"}}/>
      <div>
        <h2>{name}</h2>
        <h4>{location}</h4>
        <p>{description}</p>
        <p><strong>{price}</strong></p>
      </div>
    </div>
  );
};

export default DestinationCard;
