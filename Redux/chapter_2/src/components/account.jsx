import { useState } from "react";
import "./account.css";

function Account() {
    const [account,setAccount] = useState({amount:0})
    const [value,setValue] = useState(0);
    function increment(){
        setAccount({amount:account.amount+1});
    }
    function decrement(){
        setAccount({amount:account.amount-1});
    }
    function settingValue(e){
        console.log(e.target.value);
        setValue((+e.target.value));
    }

    function incrementByAmount(){
        setAccount({amount:account.amount+value})
    } 

  return (
    <div className="card">
      <h4>Account component</h4>
      <h3>Amount: ${account.amount}</h3>
      <button onClick={increment}>increment +</button>
      <button onClick={decrement}>decrement -</button>
      <input type="text" placeholder={value} onChange={settingValue}></input>
      <button onClick={incrementByAmount}>Increase By Amount</button>
    </div>
  );
}

export default Account;
