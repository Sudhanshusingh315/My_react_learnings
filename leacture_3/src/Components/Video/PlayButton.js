import "./PlayButton.css";
import { useState } from "react";

// here i have passed onClick function as a prop simply because we can do that in JS
function PlayButton({ message, children, onPlay, onPause }) {
  const [playing, statePlaying] = useState(false);
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
    <button onClick={handleClick}>
      {children} : {playing ? "⏩" : "⏸️"}
    </button>
  );
}

export default PlayButton;
