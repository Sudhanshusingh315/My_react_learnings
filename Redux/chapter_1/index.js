import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

// import  thunk  from "redux-thunk";

// action name constant

// const init = "account/init";
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk)
);
const history = [];

// reducer: reducer are nothing but simple functions
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case getAccUserFullfiled:
      return { amount: action.payload };
    case getAccUserPending:
      return action.error;
    case getAccUserRejected:
      return "do something else ";
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incBYAmt:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case inc:
      return { points: state.points + 1 };
    default:
        return state;
  }
}

// followings are called action creators
// ye dispatch and getState srif thunks ki whjase access mila hai usko
function getUser(id) {
  return async (dispatch, getState) => {
    try{
      
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(getAccountUserFullfiled(data.amount));

    }catch(error){
      dispatch(getAccountUserRejected(error.message));
    }
  };
}
function getAccountUserFullfiled(value) {
  return { type: getAccUserFullfiled, payload: value };
}
function getAccountUserRejected(error) {
  return { type: getAccUserRejected, error: error};
}
function getAccountUserPending(value) {
  return { type: getAccUserPending, payload: value };
}
function increment() {
  return { type: "increment" };
}

function decerement() {
  return { type: "decerement" };
}
function incrementBYAmount() {
  return { type: "incrementBYAmount", payload: 5 };
}

setInterval(() => {
  store.dispatch(getUser(1));
}, 2000);
