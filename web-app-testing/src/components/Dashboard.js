import React from 'react';

const Dashboard = ({ handleHits, handleBalls, handleStrikes, handleFouls }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleHits}>Hit</button>
      <button onClick={handleStrikes}>Strike</button>
      <button onClick={handleBalls}>Ball</button>
      <button onClick={handleFouls}>Foul</button>
    </div>
  );
};

export default Dashboard;
