//import './App.css';
import { useState } from 'react';
import Display from './Components/display.js';
import DrumPads from './Components/drumPads.js';


function App() {
  const [played, setPlayed] = useState(null);
  const getPlayed = (clip) => {
    setPlayed(clip);
  }
  return (
    <div id="drum-machine" className='w-100 vh-100 bg-light d-flex flex-column align-items-center justify-content-center'>
      <Display content={played}/>
      <DrumPads getPlayed={(clip) =>getPlayed(clip)}/>
    </div>
  );
}

export default App;
