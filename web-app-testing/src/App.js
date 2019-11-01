import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const resetCount = () => {
    setStrikes(0);
    setBalls(0);
  };

  const handleStrikes = () =>
    strikes < 2 ? setStrikes(strikes + 1) : resetCount();

  const handleBalls = () => (balls < 3 ? setBalls(balls + 1) : resetCount());
  const handleFouls = () =>
    strikes < 2 ? setStrikes(strikes + 1) : console.log(strikes);

  return (
    <div className='App'>
      <Display balls={balls} strikes={strikes} />
      <Dashboard
        handleHits={resetCount}
        handleStrikes={handleStrikes}
        handleBalls={handleBalls}
        handleFouls={handleFouls}
      />
    </div>
  );
}

export default App;
