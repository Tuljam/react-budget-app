import { useEffect } from "react";
import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { ExpensesSearchStyled } from "./styles";

export const ExpensesSearch = () => {
  const { searchExpense } = useExpensesContext();
  const search = useInput();
  const debounceValue = useDebounce<string>(search.value, 700);
  useEffect(() => {
    searchExpense(debounceValue);
  }, [debounceValue, searchExpense]);
  return (
    <ExpensesSearchStyled placeholder="search ..." type="search" {...search} />
  );
};
