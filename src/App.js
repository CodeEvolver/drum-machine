import './App.css';
import { useState } from 'react';
import Display from './Components/display.js';
import DrumPads from './Components/drumPads.js';


function App() {
  const [power, setPower] = useState(false);
  const [played, setPlayed] = useState("Beat");
  const [vol, setVol] = useState(0.5);
  const toggleSwitch = () => {
    setPower(!power);
    setPlayed("Beat")
  }
  const getPlayed = (clip) => {
    setPlayed(clip);
  }
  const tuneVolume = (currVol) => {
    setVol(currVol/100);
  }
  const drumStyle = {
    backgroundColor: "#FAFAFA",
  }
  return (
    <div id="drum-machine" className="border border-dark vh-100 mx-0 mx-sm-auto px-2 px-sm-0 d-flex flex-column align-items-center justify-content-center w-100" style={drumStyle}>
      <Display content={played} toggleSwitch={()=>toggleSwitch()} power={power} tuneVolume={(currVol) => tuneVolume(currVol)}/>
      <DrumPads getPlayed={(clip) =>getPlayed(clip)} volume={vol} power={power}/>
    </div>
  );
}

export default App;
