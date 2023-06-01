import {useEffect, useRef, useCallback} from 'react';

import Cev from "../Assets/Cev_H2.mp3";
import Dsc from "../Assets/Dsc_Oh.mp3";
import Heater1 from "../Assets/Heater-1.mp3";
import Heater2 from "../Assets/Heater-2.mp3";
import Heater3 from "../Assets/Heater-3.mp3";
import Heater4 from "../Assets/Heater-4.mp3";
import Heater6 from "../Assets/Heater-6.mp3";
import KicknHat from "../Assets/Kick_n_Hat.mp3";
import Rp4Kick from "../Assets/RP4_KICK_1.mp3";

const drumBeats = [
   {
      id: 0,
      innerText: "Q",
      clip: Cev,
      name: "High Hat",
   },
   {
      id: 1,
      innerText: "W",
      clip: Dsc,
      name: "Open High Hat",
   },
   {
      id: 2,
      innerText: "E",
      clip: Heater1,
      name: "Heater 1",
   },
   {
      id: 3,
      innerText: "A",
      clip: Heater2,
      name: "Heater 2",
   },
   {
      id: 4,
      innerText: "S",
      clip: Heater3,
      name: "Heater 3",
   },
   {
      id: 5,
      innerText: "D",
      clip: Heater4,
      name: "Heater 4",
   },
   {
      id: 6,
      innerText: "Z",
      clip: Heater6,
      name: "Heater 6",
   },
   {
      id: 7,
      innerText: "X",
      clip: KicknHat,
      name: "Kick n Hat",
   },
   {
      id: 8,
      innerText: "C",
      clip: Rp4Kick,
      name: "Rp4 Kick",
   },
];

function DrumPads ({getPlayed, volume, power}) {
   const currAudio = useRef(null);

   const playAudio = (id, name) => {
      if(power) {
         const map = getMap();
         const node = map.get(id);
         node.volume = volume;
         node.play();
         getPlayed(name);
      }
   }

   const playAudioAlt = useCallback((audio) => {
      if(audio && power) {
         const name = audio.getAttribute("name");
         audio.volume = volume;
         audio.play();
         getPlayed(name);
      }
   }, [power, getPlayed, volume])

   useEffect(() => { 
      const handleKeydown = (event) => {
         const id = event.key.toUpperCase();
         const audio = document.getElementById(id);
         playAudioAlt(audio);
      };
      document.addEventListener("keydown", handleKeydown);

      return () => {
         document.removeEventListener("keydown", handleKeydown);
      }
   }, [playAudioAlt])

   const getMap = () => {
      if(!currAudio.current) {
         currAudio.current = new Map()
      }
      return currAudio.current;
   }

   const drmbsStyle = {
      maxWidth: "576px",
      gap: "0.04px",
   }

   const drmPadStyle = {
      color:"#00B8D4",
      fontWeight: "500",
      backgroundColor: "#ECEFF1",
      boxShadow: "0px 0px 6px 0px #9E9E9E",
   }

   return (
      <div id="drum-pads" className="h-75 row px-2 rounded-bottom w-100" style={drmbsStyle}>
         {drumBeats.map((beat, id) => 
            <button id={id} key={beat.id} className="drum-pad h-25 col-3 mx-auto rounded-2 border-0" onClick={()=>playAudio(beat.id, beat.name)} style={drmPadStyle}>
               {beat.innerText}
               <audio ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(beat.id, node);
                } else {
                  map.delete(beat.id);
                }
              }} src={beat.clip} id={beat.innerText} className="clip" type="audio" name={beat.name}/>
            </button>
         )}
      </div>
   );
}
export default DrumPads;