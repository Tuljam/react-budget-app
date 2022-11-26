import { useState } from "react";
import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { ExpensesListItem } from "../ExpenseListItem/ExpenseListItem";
import { ExpenseListStyled } from "./styles";

export const ExpenseList = () => {
  const { expenses } = useExpensesContext();

  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  return (
    <ExpenseListStyled>
      {expenses.map(({ name, price, id }) => (
        <ExpensesListItem key={id} name={name} price={price} id={id} />
      ))}
    </ExpenseListStyled>
  );
};
