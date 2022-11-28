import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { RemainingCardStyled, SubTitle } from "./styles";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const remaningSumm =
    budget - expenses.reduce((total, { price }) => total + price, 0);

  const isOverspending = remaningSumm < 0;

  return (
    <RemainingCardStyled $isOverBudget={isOverspending}>
      <SubTitle $isOverBudget={isOverspending}>
        {isOverspending
          ? `Overspending by ${currentCurrency.value} ${Math.abs(remaningSumm)}`
          : `Remaining:${currentCurrency.value} 
        ${remaningSumm}`}
      </SubTitle>
    </RemainingCardStyled>
  );
};
