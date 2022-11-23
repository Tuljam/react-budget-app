import { ExpenseList } from "../ExpenseList/ExpenseList";
import { ExpensesSearch } from "../ExpensesSearch/ExpensesSearch";
import { Title } from "../Title/Title";
import { ExpensesStyled } from "./styles";

export const Expenses = () => {
  return (
    <ExpensesStyled>
      <Title label="Expenses" />
      <ExpensesSearch />
      <ExpenseList />
    </ExpensesStyled>
  );
};
