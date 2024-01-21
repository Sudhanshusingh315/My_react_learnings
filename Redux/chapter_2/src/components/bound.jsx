import { useState } from "react";

function Bouns() {
  const [bouns, setBouns] = useState({ points: 0 });
  const increment = () => {
    setBouns({ points: bouns.points + 1 });
  };
  return (
    <div className="card">
      <h3>Bound Component</h3>
      <h2>Total points: {bouns.points}</h2>
      <button onClick={increment}>Increment + </button>
    </div>
  );
}

export default Bouns;
