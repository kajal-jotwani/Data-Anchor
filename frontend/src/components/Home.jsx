import React from 'react';
import './Home.css';

const HomeComponent = () => {
  return (
    <div className="home-container">
      <div className="content-container">
        <div className="main-content">
          <h1>Transform data centers for efficiency, resilience and sustainability</h1>
        </div>
        <div className="text-content">
          <p>
          Data centers are essential to our digital world, yet finding the right locations that utilize renewable and sustainable energy remains a challenge. Our project streamlines this process by leveraging smart technology to identify optimal sites for data centers. We focus on integrating renewable energy sources, enhancing efficiency, and ensuring sustainability. Our solution bridges the gap between physical location and digital needs, helping you plan, design, and operate data centers that are both resilient and eco-friendly.
          </p>
        </div>
      </div>

      <div className="image-container">
        <img src="dataCenter.png" alt="Data Center" />
      </div>
    </div>
  );
};

export default HomeComponent;