import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { SpentcardStyled } from "./styles";

export const Spentcard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { spending } = useBudgetContext();

  return (
    <SpentcardStyled>
      Spent so far: {currentCurrency.value} {spending}
    </SpentcardStyled>
  );
};
