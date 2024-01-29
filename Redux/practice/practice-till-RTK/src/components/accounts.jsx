import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../reducres/accountReducer";
function Account() {
  const amount = useSelector((state) => state.account.amount);
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  return (
    <>
      <h4>Account Component</h4>
      <h3>Account Amount: ${amount}</h3>
      <button onClick={() => dispatch(increment())}> Increment+ </button>
      <button onClick={() => dispatch(decrement())}> Decrement- </button>
      <input
        type="text"
        placeholder="Increment By"
        onChange={(e) => {
          setValue(+e.target.value);
        }}
      ></input>
      <button onClick={() => dispatch(incrementByAmount(value))}>
        Increment by + {value}
      </button>
    </>
  );
}
export default Account;
