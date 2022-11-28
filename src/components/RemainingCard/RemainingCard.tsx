import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { RemainingCardStyled, SubTitle } from "./styles";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const remaning =
    budget - expenses.reduce((total, { price }) => total + price, 0);

  const isOverspending = remaning < 0;

  return (
    <RemainingCardStyled $isOverBudget={isOverspending}>
      <SubTitle $isOverBudget={isOverspending}>
        {isOverspending
          ? `Overspending by ${currentCurrency.value} ${Math.abs(remaning)}`
          : `Remaining:${currentCurrency.value} $
        {remaning}`}
      </SubTitle>
    </RemainingCardStyled>
  );
};

// export const RemainingCard = () => {
//   const { currentCurrency } = useCurrencyContext();
//   const { remaining } = useBudgetContext();
//   if (remaining < 0) {
//     return (
//       <RemainingCardStyled danger>
//         Overspending by {currentCurrency.value}
//         {Math.abs(remaining)}
//       </RemainingCardStyled>
//     );
//   }
//   return (
//     <RemainingCardStyled>
//       Remaining: {currentCurrency.value}
//       {remaining}{" "}
//     </RemainingCardStyled>
//   );
// };
