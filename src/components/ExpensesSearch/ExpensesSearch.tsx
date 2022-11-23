import { useEffect } from "react";
import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { IExpense } from "../../types/types";

// export const ExpensesSearch = () => {
//   const {} = useExpensesContext();
//   const search = useInput();
//   const debounceValue = useDebounce<string>(search.value, 700);
//   useEffect(() => {
//     searchExpense(debounceValue);
//   }, [debounceValue, searchExpense]);
//   return <input placeholder="search ..." type="search" {...search} />;
// };

export const ExpensesSearch = () => {
  return <input />;
};
