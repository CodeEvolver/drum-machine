import toggleOn from "../Assets/icons8-toggle.svg";
import toggleOff from "../Assets/icons8-toggleoff.svg";
import speaker from "../Assets/icons8-volume.svg";

function Display ({content, tuneVolume, toggleSwitch, power}) {
    let dsplyStyle = {
        maxWidth: "576px",
        color:"#00B8D4",
        height: "20%"
    }
    let volControl = {
        width: "90%",
        background:"#00B8D4",
    }
    return (
        <div id="display" className="d-flex flex-column justify-content-center w-100 rounded-top px-4" style={dsplyStyle}>
            <div className="d-flex flex-row align-items-center justify-content-between">
                <h1>{content}</h1>
                <img onClick={toggleSwitch} src={power? toggleOn: toggleOff} style={{cursor: "pointer"}} alt="toggle off or on"/>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-evenly">
                <img src={speaker} alt="speaker"/>
                <input style={volControl} type="range" min="0" max="100" onChange={(event)=>tuneVolume(event.target.value)}/>
            </div>
        </div>
    );
}
export default Display;