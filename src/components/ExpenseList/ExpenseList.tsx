import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { ExpensesListItem } from "../ExpenseListItem/ExpenseListItem";
import { ExpenseListStyled } from "./styles";

export const ExpenseList = () => {
  const { expenses } = useExpensesContext();
  return (
    <ExpenseListStyled>
      <ExpensesListItem />
    </ExpenseListStyled>
  );
};
