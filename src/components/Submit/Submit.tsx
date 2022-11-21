import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";

export const Submit = () => {
  const { setNewExpense } = useExpensesContext();

  const handleSubmit = () => {
    setNewExpense( { id: "32mfd", title: "Sharf", price: 20 });
  };

  return <button onClick={handleSubmit}> Done</button>;
};
