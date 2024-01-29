import { useSelector } from "react-redux";
function Bonus() {
  const points = useSelector((state) => state.bonus.points);
  return (
    <>
      <h4>Bonus Component</h4>
      <h3>Bonus Amount: ${points}</h3>
      <button> Increment+ </button>
    </>
  );
}
export default Bonus;
