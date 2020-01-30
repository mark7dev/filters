import React from 'react'
import './styles/LocationCard.css'

function LocationCard({ location, bathsOptions, typesOptions }) {
  const baths = bathsOptions.find(baths => baths.id === location.baths);
  const types = typesOptions.find(types => types.id === location.types);

  return (
    <div className="location__card">
      <h1 className="location__card__address">{location.address}</h1>
      <div className="location__card__options">
        {types && <span>{types.name}</span>}
        {baths && <span>{baths.name}</span>}
      </div>
    </div>
  );
}

export default LocationCard;
