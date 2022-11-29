import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import {
  BadgeStyled,
  ExpenseListItemStyled,
  ExpensesDeleteButtonStyled,
  TextStyled,
} from "./styles";
import { ReactComponent as DeleteButton } from "../../assets/icon/x.svg";

interface IProps {
  name: string;
  price: number;
  id: string;
}

export const ExpensesListItem = ({ name, price, id }: IProps) => {
  const { currentCurrency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();

  const handleDeleteButton = () => {
    deleteExpense(id);
  };

  return (
    <ExpenseListItemStyled>
      <TextStyled>{name}</TextStyled>
      <BadgeStyled>
        {currentCurrency.value}
        {price}
      </BadgeStyled>
      <ExpensesDeleteButtonStyled onClick={handleDeleteButton}>
        {" "}
        <DeleteButton />
      </ExpensesDeleteButtonStyled>
    </ExpenseListItemStyled>
  );
};
