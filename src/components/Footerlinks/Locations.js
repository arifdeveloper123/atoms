import React from 'react';
import "./styles.css";

const tabs = [
  "Popular", "Arts & culture", "Outdoors", "Mountains", "Beach",
  "Unique stays", "Categories", "Things to do"
];

const locations = [
  { name: "Canmore", description: "Pet-friendly rentals" },
  { name: "Benalmádena", description: "Flat rentals" },
  { name: "Marbella", description: "Cottage rentals" },
  { name: "Mijas", description: "Holiday rentals" },
  { name: "Prescott", description: "House rentals" },
  { name: "Scottsdale", description: "House rentals" },
  { name: "Tucson", description: "Holiday rentals" },
  { name: "Jasper", description: "Cabin rentals" },
  { name: "Mountain View", description: "Pet-friendly rentals" },
  { name: "Devonport", description: "Cottage rentals" },
  { name: "Mallacoota", description: "Pet-friendly rentals" },
  { name: "Ibiza", description: "Holiday rentals" },
  { name: "Anaheim", description: "Flat rentals" },
  { name: "Monterey", description: "Cottage rentals" },
  { name: "Paso Robles", description: "Holiday rentals" },
  { name: "Santa Barbara", description: "Beach house rentals" },
  { name: "Sonoma", description: "Beach house rentals" },
];

function Locations () {
  return (
    <div className="container">
    <div className="header">Inspiration for future getaways</div>
    <div className="tabs">
      {tabs.map((tab, index) => (
        <div key={index} className={`tab ${index === 0 ? 'active' : ''}`}>{tab}</div>
      ))}
    </div>
    <div className="links-grid">
      {locations.map((location, index) => (
        <div key={index} className="link-item">
          <a href="#">{location.name}</a>
          <span>{location.description}</span>
        </div>
      ))}
    </div>
    <a href="#" className="show-more">Show more</a>
  </div>

  );
}

export default Locations;
