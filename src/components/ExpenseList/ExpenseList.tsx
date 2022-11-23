import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { ExpensesListItem } from "../ExpenseListItem/ExpenseListItem";

// export const ExpenseList = () => {
//   const { expenses } = useExpensesContext();

//   return (
//     <div>
//       <ul>
//         {expenses.map(({ id, title, cost }) => {
//           return <ExpensesListItem />;
//         })}
//       </ul>
//     </div>
//   );
// };

export const ExpenseList = () => {
  return (
    <ul>
      <ExpensesListItem />;
    </ul>
  );
};
