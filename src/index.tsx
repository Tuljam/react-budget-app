import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";
import { ExpensesContextProvider } from "./context/ExpenseListContext/ExpenseListContext";
import { GlobalStyles } from "./GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BudgetContextProvider>
    <ExpensesContextProvider>
      <GlobalStyles />
      <App />
    </ExpensesContextProvider>
  </BudgetContextProvider>
);
