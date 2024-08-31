import React from 'react';
import './LocationInput.css';

const LocationInput = ({ search, setSearch, onSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    onSearch();
  };

  return (
    <div className="location-input">
      <input 
        type="text" 
        value={search} 
        onChange={handleChange} 
        placeholder="Search locations..." 
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default LocationInput;
