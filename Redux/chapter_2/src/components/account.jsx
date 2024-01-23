import { useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import "./account.css";
import { increment } from "../actions";
import { decerement } from "../actions";
function Account() {
  // useSelector
    const amount = useSelector(state=>state.account.amount);
  // useDispatch 
    const dispath = useDispatch(); 

  return (
    <div className="card">
      <h4>Account component</h4>
      <h3>Amount: ${amount}</h3>
      <button onClick={()=>dispath(increment())}>increment +</button>
      <button onClick={()=>dispath(decerement())}>decrement -</button>
      {/* <input type="text" placeholder={value} onChange={settingValue}></input>
      <button onClick={incrementByAmount}>Increase By Amount</button> */}
    </div>
  );
}

export default Account;
