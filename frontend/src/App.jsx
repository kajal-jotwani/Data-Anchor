import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import LocationInput from './components/LocationInput';
import LocationList from './components/LocationList';
import EfficiencyPerformance from './components/EfficiencyPerformance';
import Home from './components/Home';
import IncentivesList from './components/IncentivesList'; // Make sure this path is correct
import SubscriptionForm from './components/SubscriptionForm';
import CarbonEmissionCalculator from './components/CarbonEmissionCalculator';
import EfficiencyCalculator from './components/EfficiencyCalculator';
import Footer from './components/Footer'; // Import Footer
import './index.css';

const App = () => {
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]); // Initially empty
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch all locations once on mount
    fetch('http://localhost:5000/locations')
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => console.error('Error fetching locations:', error));
  }, []);

  const handleSearch = () => {
    if (search.trim()) {
      const filtered = locations.filter(location =>
        location.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations([]); // Show no results if search is empty
    }
  };

  return (
    <div className="app">
      <Header />
      <Home />
      <EfficiencyPerformance />
      <MapComponent locations={filteredLocations} />
      <LocationInput search={search} setSearch={setSearch} onSearch={handleSearch} />
      <LocationList locations={filteredLocations} />
      <CarbonEmissionCalculator />
      <EfficiencyCalculator />
      <IncentivesList />
      <SubscriptionForm />
      <Footer /> {/* Use Footer component here */}
    </div>
  );
};

export default App;
