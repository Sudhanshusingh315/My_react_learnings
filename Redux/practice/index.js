import { applyMiddleware } from "redux";
import { createStore } from "redux";
import logger from "redux-logger";
import axios from "axios";
import { thunk } from "redux-thunk";
const store = createStore(reducer, applyMiddleware(logger.default, thunk));
function reducer(state = { amount: 1 }, action) {
  // write your swtich cases with what you want to do with them, usuall updates the state
  switch (action.type) {
    case "getaccuser":
      return {amount: action.payload};
    case "getAccUserFailed":
      return action.error; 
    case "increment":
      return { amount: state.amount + 1 };
    default:
      console.log("default case ran");
  }
}

// make the asyn function
function getUser(id) {
  return async (dispatch, getState) => {
    try{
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(getAccountUserDone(data.amount));

    }catch(error){
      dispatch(getAccountUserFailed(error.message));
    }
  };
}



function getAccountUserDone(value) {
  return { type: "getaccuser", payload:value};
}
function getAccountUserFailed(error){
  return {type:"getAccUserFailed", error:error}
}

// this is what plan function is
function increment() {
  return { type: "increment", payload: 1 };
}

setTimeout(() => {
  store.dispatch(getUser(2));
}, 2000);
