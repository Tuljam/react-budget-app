import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { Badge } from "../Badge/Badge";

export const ExpensesListItem = () => {
  const { expenses } = useExpensesContext();
  return (
    <div>
      {expenses.map(({ id, title, price }) => {
        return (
          <li key={id}>
            {title} = {price}
          </li>
        );
      })}
      <Badge />
    </div>
  );
};
