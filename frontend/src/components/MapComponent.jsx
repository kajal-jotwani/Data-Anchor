// import React, { useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import './MapComponent.css';

// const MapComponent = () => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (mapRef.current === null) {
//       mapRef.current = L.map('map').setView([51.505, -0.09], 13);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; OpenStreetMap contributors'
//       }).addTo(mapRef.current);
//     }

//     // Clean up on component unmount
//     return () => {
//       if (mapRef.current !== null) {
//         mapRef.current.remove();
//         mapRef.current = null;
//       }
//     };
//   }, []);

//   return <div id="map" className="map"></div>;
// };

// export default MapComponent;
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

// Custom hook to update the map view
const ChangeMapView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom);
    }
  }, [center, zoom, map]);
  return null;
};

const MapComponent = ({ locations }) => {
  // Default center and zoom
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]);
  const [mapZoom, setMapZoom] = useState(13);

  // Update center and zoom based on locations
  useEffect(() => {
    if (locations.length > 0 && locations[0].coordinates) {
      setMapCenter(locations[0].coordinates);
      setMapZoom(15); // Adjust zoom level as needed
    }
  }, [locations]);

  return (
    <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '400px', width: '100%' }}>
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
  );
};

export default MapComponent;
