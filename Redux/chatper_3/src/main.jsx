import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from "./slices/Accountslices.jsx";
import BonusReducer from "./slices/BonusSlice.jsx";
import rewardReducer from "./reducers/reward.jsx";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: {
    account: AccountReducer,
    bonus: BonusReducer,
    reward: rewardReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
