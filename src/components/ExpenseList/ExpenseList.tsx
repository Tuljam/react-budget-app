import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { ExpenseListItem } from "../ExpenseListItem/ExpenseListItem";

export const ExpenseList = () => {
  const { expenses } = useExpensesContext();


  return (
    <div>
      <ul>
        {expenses.map(({ id, title, price }) => {
          return <ExpenseListItem key={id} title={title} price={price} />;
        })}
      </ul>
    </div>
  );
};
