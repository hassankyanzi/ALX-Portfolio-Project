// src/components/MapView.js
import React from 'react';
import './MapView.css';

const MapView = () => {
  return (
    <div className="map-view-container">
      <button>Back</button>
      <h2>Map View</h2>
      <div className="map-placeholder">[GPS Map]</div>
      <button>Optimize Route</button>
    </div>
  );
};

export default MapView;
