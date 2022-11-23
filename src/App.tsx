import { AppWrapper } from "./AppWrapperStyles";
import { AddExpensess } from "./components/AddExpensess/AddExpensess";
import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expensess/Expenses";

export const App = () => {
  return (
    <AppWrapper>
      <Budget />
      <Expenses />
      <AddExpensess />
    </AppWrapper>
  );
};
