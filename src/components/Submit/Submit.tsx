import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { SubmitStyled } from "./styles";

export const Submit = () => {
  // const { setNewExpense } = useExpensesContext();

  // const handleSubmit = () => {
  //   setNewExpense( { id: "", title: "", price: {} });
  // };

  //return <button onClick={handleSubmit}> Done</button>;

  return <SubmitStyled type="submit"> Done</SubmitStyled>;
};
