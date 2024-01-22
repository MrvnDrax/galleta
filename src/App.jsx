import React, { useState, useEffect } from 'react';
import Fortuna from './components/Fortuna';
import Button from './components/Button';
import './App.css';
import phrase from './utils/phrase.json';

const bgArray = [1, 2, 3, 4];

function App() {
  const totalPhrase = phrase.length;
  const [index, setIndex] = useState(0);
  const [bgApp, setBgApp] = useState(1);
  
   useEffect(() => {
    setBgApp(1)
  }, [])

  const randomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * (totalPhrase + 1));
    setIndex(randomIndex);

    const randomBgIndex = Math.floor(Math.random() * bgArray.length);
    setBgApp(bgArray[randomBgIndex]);
  };

  const bgStyle = {
    backgroundImage: `url('../public/fondo${bgApp}.png')`
  };

  return (
    <div className='app' style={bgStyle}>
      <div className='container'>
      <h1 className='text'>Galleta de la fortuna</h1>
      <button onClick={randomPhrase}>
        <Button setBgApp={setBgApp} />
      </button>
      <Fortuna data={phrase[index]} />
      </div>
    </div>
  );
}

export default App;
