import { useContext } from "react";
import {
  ExpensesContext,
  useExpensesContext,
} from "../../context/ExpenseListContext/ExpenseListContext";
import { Badge } from "../Badge/Badge";

export const ExpenseList = () => {
  const { expenses, setNewExpense, deleteExpense } = useExpensesContext();

  const handleSubmit = () => {
    setNewExpense({ id: "32bsd", title: "Shapka", cost: 80 });
  };

  return (
    <div>
      {/* <button onClick={handleSubmit}> Addddd</button> */}
      <ul>
        {expenses.map(({ id, title, cost }) => {
          return (
            <li key={id} onClick={() => deleteExpense(id)}>
              {title} = {cost}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
