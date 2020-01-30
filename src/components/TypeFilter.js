import React from 'react'

function TypeFilter({ types, saveTypes, typesOptions }) {
  return (
    <div className="typeFilter__container">
      <select value={types} onChange={e => saveTypes(e.target.value)}>
        <option value="">Select Type</option>
        {typesOptions.map(type => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TypeFilter;
