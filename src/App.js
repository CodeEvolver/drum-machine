import './App.css';
import { useState } from 'react';
import Display from './Components/display.js';
import DrumPads from './Components/drumPads.js';


function App() {
  const [power, setPower] = useState(true);
  const [played, setPlayed] = useState("Beat");
  const [volume, setVolume] = useState(0.5);
  const toggleSwitch = () => {
    setPower(!power);
    setPlayed("Beat");
  }
  const getPlayed = (clip) => {
    setPlayed(clip);
  }
  const tuneVolume = (currVol) => {
    setVolume(currVol/100);
  }
  const drumStyle = {
    backgroundColor: "#FAFAFA",
    minHeight: "500px"
  }
  return (
    <div id="drum-machine" className="border border-dark vh-100 mx-0 mx-sm-auto px-2 px-sm-0 d-flex flex-column align-items-center justify-content-center w-100" style={drumStyle}>
      <Display content={played} toggleSwitch={()=>toggleSwitch()} power={power} tuneVolume={(currVol) => tuneVolume(currVol)}/>
      <DrumPads getPlayed={(clip) =>getPlayed(clip)} volume={volume} power={power}/>
    </div>
  );
}

export default App;
