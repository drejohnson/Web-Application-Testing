import React from 'react';

const Display = ({ strikes, balls }) => {
  return (
    <div>
      <h2>Balls:</h2>
      <span data-testid='ballsCount'>{balls}</span>
      <h2>Strikes:</h2>
      <span data-testid='strikesCount'>{strikes}</span>
    </div>
  );
};

export default Display;
