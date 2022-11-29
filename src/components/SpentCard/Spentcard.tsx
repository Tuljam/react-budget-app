import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { SpentcardStyled } from "./styles";

export const Spentcard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const spentSumm = expenses.reduce((total, { price }) => total + +price, 0);

  return (
    <SpentcardStyled>
      Spent so far: {currentCurrency.value} {spentSumm}
    </SpentcardStyled>
  );
};
//2 var
// export const Spentcard = () => {
//   const { currentCurrency } = useCurrencyContext();
//   const { spending } = useBudgetContext();

//   return (
//     <SpentcardStyled>
//       Spent so far: {currentCurrency.value} {spending}
//     </SpentcardStyled>
//   );
// };
