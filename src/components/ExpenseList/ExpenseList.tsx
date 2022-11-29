import { useEffect, useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { IExpense } from "../../types/types";
import { ExpensesListItem } from "../ExpenseListItem/ExpenseListItem";
import { EmptyListStyled, ExpenseListStyled } from "./styles";

interface IProps {
  searchExpenses: IExpense[];
}

export const ExpenseList = ({ searchExpenses }: IProps) => {
  if (!searchExpenses.length) {
    return <EmptyListStyled>Oooops! 🙈</EmptyListStyled>;
  }
  return (
    <ExpenseListStyled>
      {searchExpenses.map(({ name, price, id }) => (
        <ExpensesListItem key={id} name={name} price={price} id={id} />
      ))}
    </ExpenseListStyled>
  );
};
