import React from 'react';

const Dashboard = ({ handleHits, handleBalls, handleStrikes, handleFouls }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button data-testid='hit-button' onClick={handleHits}>
        Hit
      </button>
      <button data-testid='strike-button' onClick={handleStrikes}>
        Strike
      </button>
      <button data-testid='ball-button' onClick={handleBalls}>
        Ball
      </button>
      <button data-testid='foul-button' onClick={handleFouls}>
        Foul
      </button>
    </div>
  );
};

export default Dashboard;
