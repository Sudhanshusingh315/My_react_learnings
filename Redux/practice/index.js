import { applyMiddleware } from "redux";
import { createStore } from "redux";
import logger from "redux-logger";
import axios from "axios";
import { thunk } from "redux-thunk";
const store = createStore(reducer, applyMiddleware(logger.default,thunk));
function reducer(state = { amount: 1 }, action) {
  // write your swtich cases with what you want to do with them, usuall updates the state
  switch (action.type) {
    case "increment":
      return { amount: state.amount + 1 };
    default:
      console.log("default case ran");
  }
}

// make the asyn function
const getUser= async (dispatch,getState)=>{
   const {data} =  await axios.get("http://localhost:3000/accounts/1");
   dispatch({type:"getuser",payload:data.amount});
}
// this is what plan function is
function increment() {
  return { type: "increment", payload: 1 };
}

store.dispatch(getUser);
