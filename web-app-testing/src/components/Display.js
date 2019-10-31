import React from 'react';

const Display = ({ strikes, balls }) => {
  return (
    <div>
      <h2>
        Balls: <span>{balls}</span>
      </h2>
      <h2>
        Strikes <span>{strikes}</span>
      </h2>
    </div>
  );
};

export default Display;
