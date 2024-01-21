// These are difining names of cases
export const inc = "account/increment";
export const dec = "account/decerement";
export const incBYAmt = "account/incrementBYAmount";
export const getAccUserPending = "account/getUser/pending";
export const getAccUserFullfiled = "account/getUser/fulfiled";
export const getAccUserRejected = "account/getUser/rejected";
export const incBonus = "bouns/incBonus";


// These are called actions reducers
export function getUser(id) {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(getAccountUserFullfiled(data.amount));
    } catch (error) {
      dispatch(getAccountUserRejected(error.message));
    }
  };
}
export function getAccountUserFullfiled(value) {
  return { type: getAccUserFullfiled, payload: value };
}
export function getAccountUserRejected(error) {
  return { type: getAccUserRejected, error: error };
}
export function getAccountUserPending(value) {
  return { type: getAccUserPending, payload: value };
}
export function increment() {
  return { type: "increment" };
}

export function decerement() {
  return { type: "decerement" };
}
export function incrementBYAmount() {
  return { type: "incrementBYAmount", payload: 5 };
}
