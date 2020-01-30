import React from 'react'

function AddressFilter({ search, saveSearch }) {
  return (
    <div className="address__container">
      <input
        placeholder="Address"
        value={search}
        onChange={e => saveSearch(e.target.value)}
      />
    </div>
  );
}

export default AddressFilter;
