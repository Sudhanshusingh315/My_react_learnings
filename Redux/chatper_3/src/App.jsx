import { useSelector } from "react-redux";
import Account from "./components/Account";
import Bouns from "./components/Bonus";
import Reward from "./components/Reward";
import Admin from "./components/Admin";
function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const value = useSelector((state) => state.reward.points);
  return (
    <>
      <h1>App</h1>
      <h4>Current Ammount:{amount}</h4>
      <h4>Bonus Ammount:{points}</h4>
      <h4>Reward Ammount: {value}</h4>
      <Account />
      <Bouns />
      <Reward />
      <Admin />
    </>
  );
}

export default App;
