import { ExpenseList } from "../ExpenseList/ExpenseList";
import { ExpensesSearch } from "../ExpensesSearch/ExpensesSearch";
import { Title } from "../Title/Title";

export const Expensess = () => {
  return (
    <div>
      <Title label="Expenses" />
      <ExpensesSearch />
      <ExpenseList />
    </div>
  );
};
