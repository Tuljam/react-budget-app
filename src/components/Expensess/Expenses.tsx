import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { IExpense } from "../../types/types";
import { ExpenseList } from "../ExpenseList/ExpenseList";
import { ExpensesSearch } from "../ExpensesSearch/ExpensesSearch";
import { Title } from "../Title/Title";
import { ExpensesStyled } from "./styles";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<IExpense[]>([]);
  const debounceValue = useDebounce<string>(search.value, 700);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((exp) =>
        exp.name.toLowerCase().includes(debounceValue.toLowerCase())
      )
    );
  }, [debounceValue, expenses]);

  return (
    <ExpensesStyled>
      <Title label="expenses" />
      <ExpensesSearch {...search} />
      <ExpenseList searchExpenses={filteredExpenses} />
    </ExpensesStyled>
  );
};
