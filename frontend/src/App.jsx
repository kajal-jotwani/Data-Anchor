import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import LocationInput from './components/LocationInput';
import AboutUs from './components/AboutUs';
import LocationList from './components/LocationList';

const App = () => {
  const [locations, setLocations] = useState([]);
//   const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/locations')
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error('Error fetching locations:', error));
  }, []);

  const addLocation = (location) => {
    setLocations([...locations, location]);
  };

  return (
    <div className="app">
      <Header />
      <LocationInput onAddLocation={addLocation} />
      <MapComponent />
      <LocationList locations={locations} />
      <AboutUs />
    </div>
  );
};

export default App;
