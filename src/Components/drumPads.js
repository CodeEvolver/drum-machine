import {useEffect, useRef, useState} from 'react';

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
      name: "Kick",
   },
   {
      id: 1,
      innerText: "W",
      clip: Dsc,
      name: "VEm",
   },
   {
      id: 2,
      innerText: "E",
      clip: Heater1,
      name: "Karr",
   },
   {
      id: 3,
      innerText: "A",
      clip: Heater2,
      name: "Gimp",
   },
   {
      id: 4,
      innerText: "S",
      clip: Heater3,
      name: "Mone",
   },
   {
      id: 5,
      innerText: "D",
      clip: Heater4,
      name: "Di-nk",
   },
   {
      id: 6,
      innerText: "Z",
      clip: Heater6,
      name: "Mineo",
   },
   {
      id: 7,
      innerText: "X",
      clip: KicknHat,
      name: "Kisar",
   },
   {
      id: 8,
      innerText: "C",
      clip: Rp4Kick,
      name: "Amnax",
   },
];

function DrumPads ({getPlayed}) {
   const [audio, setAudio] = useState(null);
   const currAudio = useRef(null);
   const btnRef = useRef(null)

   const playAudio = (id, name) => {
      const map = getMap();
      const node = map.get(id);
      node.play();
      getPlayed(name);
   }
   const playPressedAudio = (id, name) => {
      const audio = document.getElementById(id);
      if(audio) { 
         audio.play();
         getPlayed(name);
      }
   }
   useEffect(() =>
      document.addEventListener("keydown", (event) => {
         const id = event.key.toUpperCase();
         const audio = document.getElementById(id);
         if(audio) {
            const name = audio.getAttribute("name");
            playPressedAudio(id, name);
         }
      })
   )

   const getMap = () => {
      if(!currAudio.current) {
         currAudio.current = new Map()
      }
      return currAudio.current;
   }

   return (
      <div id="drum-pads" className="border h-50 w-50 text-center row">
         {drumBeats.map((beat, id) => 
            <button id={id} key={beat.id} className="drum-pad col-4 mx-auto" ref={btnRef} onClick={()=>playAudio(beat.id, beat.name)}>
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