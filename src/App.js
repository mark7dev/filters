import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import { getLocations, getBaths, getTypes } from './utils/calls'
import ListLocations from './components/ListLocations'
import BathsFilter from './components/BathsFilter'
import TypeFilter from './components/TypeFilter'
import AddressFilter from './components/AddressFilter'


function App() {
  const [locations, saveLocations] = useState([]);
  const [types, saveTypes] = useState("");
  const [baths, saveBaths] = useState("");
  const [search, saveSearch] = useState("");
  const [loading, saveLoading] = useState(false);
  const [bathsOptions, saveBathsOptions] = useState(null);
  const [typesOptions, saveTypesOptions] = useState(null);

  useEffect(() => {
    const loadOptions = async () => {
      const bathsResponse = await getBaths();
      const typesResponse = await getTypes();
      saveBathsOptions(bathsResponse.data);
      saveTypesOptions(typesResponse.data);
    };
    loadOptions();
  }, []);

  useEffect(() => {
    const loadLocations = async () => {
      saveLoading(true);
      const response = await getLocations({ baths, types });
      saveLocations(response.data);
      saveLoading(false);
    };
    loadLocations();
  }, [baths, types]);

  let filteredLocations = locations;
  if(search) {
    filteredLocations = locations.filter(search => search.address.toLowerCase().includes(search.trim().toLowerCase()));
  }

  if(loading || !bathsOptions || !typesOptions) {
    return (
      <div className="Loading">
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="filters__container">
        <AddressFilter search={search} saveSearch={saveSearch} />
        <BathsFilter baths={baths} saveBaths={saveBaths} bathsOptions={bathsOptions} />
        <TypeFilter types={types} saveTypes={saveTypes} typesOptions={typesOptions} />
      </div>
      <h3>Results: {filteredLocations.length}</h3>
      <ListLocations locations={filteredLocations} bathsOptions={bathsOptions} typesOptions={typesOptions} />
    </div>
  );
}

export default App;
