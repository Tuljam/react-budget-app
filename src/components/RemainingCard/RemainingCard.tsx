import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { RemainingCardStyled } from "./styles";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { remaining } = useBudgetContext();

  return (
    <RemainingCardStyled>
      Remaining {currentCurrency.value}:{remaining}{" "}
    </RemainingCardStyled>
  );
};
