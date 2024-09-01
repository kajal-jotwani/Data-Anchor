import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

// Custom hook to update the map view
const ChangeMapView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom, { animate: true }); // Animate for smooth zoom
    }
  }, [center, zoom, map]);
  return null;
};

const MapComponent = ({ locations }) => {
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]);
  const [mapZoom, setMapZoom] = useState(13);

  useEffect(() => {
    if (locations.length > 0 && locations[0].latitude && locations[0].longitude) {
      const newCenter = [locations[0].latitude, locations[0].longitude];
      setMapCenter(newCenter);
      setMapZoom(15); // Adjust zoom level as needed
    }
  }, [locations]);

  return (
    <div className="map-container">
      <h2 className="map-heading">Locations for Data Centers</h2>
      <p className="map-description">
        The map below displays locations best suited for the establishment of renewable and sustainable data centers. 
        These locations have been selected based on critical factors such as climate conditions, water supply, and low carbon emissions.
      </p>
      <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '500px', width: '100%' }} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ChangeMapView center={mapCenter} zoom={mapZoom} />
        {locations.map((location) => (
          location.latitude && location.longitude && (
            <Marker
              key={location.name}
              position={[location.latitude, location.longitude]} // Use latitude and longitude
            >
              <Popup>
                <strong>{location.name}</strong><br />
                Climate Conditions: {location.climateConditions}<br />
                Water Supply: {location.waterSupply ? 'Yes' : 'No'}<br />
                Low Carbon Emission: {location.lowCarbonEmission ? 'Yes' : 'No'}<br />
                Other Factors: {location.otherFactors}<br />
                Coordinates: {location.latitude}, {location.longitude}
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
