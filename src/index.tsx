import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ExpensesContextProvider } from "./context/ExpenseListContext/ExpenseListContext";
import { GlobalStyles } from "./GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ExpensesContextProvider>
    <GlobalStyles />
    <App />
  </ExpensesContextProvider>
);
