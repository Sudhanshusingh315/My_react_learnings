import { useSelector } from "react-redux";
import "./App.css";
import Account from "./components/accounts";
import Bonus from "./components/bonus";
function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  return (
    <>
      <h1>This is Just for practice</h1>
      <h2>Current Ammount: ${amount}</h2>
      <h2>Bonus Ammount: ${points}</h2>
      <hr />
      <Account></Account>
      <hr />
      <Bonus></Bonus>
    </>
  );
}

export default App;
