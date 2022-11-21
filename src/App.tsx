import React from "react";
import { AppWrapper } from "./AppWrapperStyles";
import { AddExpensess } from "./components/AddExpensess/AddExpensess";
import { Budget } from "./components/Budget/Budget";
import { Expensess } from "./components/Expensess/Expensess";
import { ExpensesContext } from "./context/ExpenseListContext/ExpenseListContext";

export const App = () => {
  return (
    <AppWrapper>
      <Budget />
      <Expensess />
      <AddExpensess />
    </AppWrapper>
  );
};
