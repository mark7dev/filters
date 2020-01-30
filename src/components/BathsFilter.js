import React from 'react'
import './styles/Filters.css'

function BathsFilter({ baths, saveBaths, bathsOptions }) {
  return (
    <div className="bathsFilter__container">
      <select value={baths} onChange={e => saveBaths(e.target.value)}>
        <option value="">Select Baths</option>
        {bathsOptions.map(bath => (
          <option key={bath.id} value={bath.id}>
            {bath.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BathsFilter;
