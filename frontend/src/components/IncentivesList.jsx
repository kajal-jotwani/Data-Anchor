import React, { useEffect, useState } from 'react';
import './IncentivesList.css';
import axios from 'axios';

const IncentivesList = () => {
  const [incentives, setIncentives] = useState([]);

  useEffect(() => {
    const fetchIncentives = async () => {
      try {
        const response = await axios.get('http://localhost:5000/incentives');
        setIncentives(response.data);
      } catch (error) {
        console.error('Error fetching incentives:', error);
      }
    };

    fetchIncentives();
  }, []);

  const handleRedirect = () => {
    window.open('https://mnre.gov.in/schemes', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="incentives-list">
      <h1>Incentives and Subsidies Tracker</h1>
      <p>
        Data centers are essential for our digital world. Find out how you can benefit from state and central government incentives and subsidies designed to support the establishment and operation of data centers using renewable and sustainable energy sources.
      </p>
      <button onClick={handleRedirect} className="redirect-button">
        Check MNRE Subsidies
      </button>
      <div className="incentives-cards">
        {incentives.map((incentive) => (
          <div key={incentive._id} className="incentive-card">
            <h2>{incentive.state}</h2>
            <p><strong>Central Incentives:</strong> {incentive.centralIncentives}</p>
            <p><strong>Tax Benefits:</strong> {incentive.taxBenefits}</p>
            <p><strong>Subsidies:</strong> {incentive.subsidies}</p>
            <p><strong>Last Updated:</strong> {new Date(incentive.updatedAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncentivesList;
