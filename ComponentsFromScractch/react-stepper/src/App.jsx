import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stepper from './components/Stepper'

function App() {
  const [count, setCount] = useState(0)
  const step = [
    {
      label:"Personal Info",
      content:<div>Personal Info</div>
    },
    {
      label:"Account Info",
      content:<div>Account Info Contact</div>
    },
    {
      label:"Payment",
      content:<div>Payment Conent</div>
    },
    {
      label:"Confirmation",
      content:<div>Confirmation Content</div>
    },
    {
      label:"Review",
      content:<div>Review Content</div>
    },
  ]
  return (
    <>
      <Stepper step={step}/>
    </>
  )
}

export default App
