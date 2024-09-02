import React, { useState } from 'react';
import axios from 'axios';
import './SubscriptionForm.css'; 

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/subscribe', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Subscription failed');
    }
  };

  return (
    <div className="subscription-form">
      <h2>Subscribe for Updates</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SubscriptionForm;
