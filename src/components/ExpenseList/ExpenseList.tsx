import { useEffect, useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { ExpensesListItem } from "../ExpenseListItem/ExpenseListItem";
import { ExpenseListStyled } from "./styles";

export const ExpenseList = () => {
  const { expenses, searchValue } = useExpensesContext();

  const [searchExpenses, setSearchExpenses] = useState(expenses);

  useEffect(() => {
    setSearchExpenses(
      expenses.filter((exp) => exp.name.toLowerCase().includes(searchValue))
    );
  }, [searchValue, expenses]);
  return (
    <ExpenseListStyled>
      {searchExpenses.map(({ name, price, id }) => (
        <ExpensesListItem key={id} name={name} price={price} id={id} />
      ))}
    </ExpenseListStyled>
  );
};
