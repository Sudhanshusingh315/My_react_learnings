import { useSelector } from 'react-redux'
import './App.css'
import Account from './components/account'
import Bouns from './components/bound'



function App() {
  const amount = useSelector((state)=>state.account.amount);
  const points  = useSelector(state=>state.bonus.points);
  
  return (
    <>
      <h1>App</h1>       
      <h4>Current Ammount:{amount}</h4>
      <h4>Bonus Ammount:{points}</h4>
      <Account/>
      <Bouns />
    </>
  )
}

export default App
