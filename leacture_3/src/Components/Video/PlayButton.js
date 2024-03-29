import ThemeContext from "../../context/ThemeContext";
import "./PlayButton.css";
import { useContext, useState } from "react";

// here i have passed onClick function as a prop simply because we can do that in JS
function PlayButton({ message, children, onPlay, onPause }) {
  const [playing, statePlaying] = useState(false);

  //  using Context
const theme = useContext(ThemeContext);

  function handleClick(e) {
    // stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed.
    
    e.stopPropagation();
    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    // toggling playing and now playing
    statePlaying((playing) => !playing);
  }
  return (
    <button className={`${theme}`} onClick={handleClick}>
      {children} : {playing ? "⏩" : "⏸️"}
    </button>
  );
}

export default PlayButton;
