import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import accountReducer from "./reducres/accountReducer.jsx";
import bonusReducer from "./reducres/bonusReducer.jsx";
const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
