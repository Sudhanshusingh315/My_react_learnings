import { useDispatch, useSelector } from "react-redux";
import { incrementBounus } from "../actions";
function Bouns() {
  const points = useSelector(state=>state.bonus.points);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <h3>Bound Component</h3>
      <h2>Total points: {points}</h2>
      <button onClick={()=>dispatch(incrementBounus())}>Increment + </button>
    </div>
  );
}

export default Bouns;
