import {
  getAccUserFullfiled,
  getAccUserPending,
  getAccUserRejected,
  inc,
  dec,
  incBYAmt,
} from "../actions";

export function accountReducer(state = { amount: 1 }, action) {
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
