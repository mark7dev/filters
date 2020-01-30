import React from 'react'
import './styles/ListLocations.css'
import LocationCard from './LocationCard'

function List({ locations, bathsOptions, typesOptions }) {
  if (locations.length === 0) {
    return (
      <div className="message">
        <h1>Sorry, there are no results</h1>
      </div>
    );
  }

  return (
    <div className="list__container">
      {locations.map(location => {
        return <LocationCard 
                  key={location.id} 
                  location={location} 
                  bathsOptions={bathsOptions} 
                  typesOptions={typesOptions} 
                />;
      })}
    </div>
  );
}

export default List;
