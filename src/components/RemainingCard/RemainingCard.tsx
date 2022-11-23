import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { RemainingCardStyled } from "./styles";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { remaining } = useBudgetContext();
  // if (remaining < 0) {
  //   return (
  //     <RemainingCardStyled danger>
  //       Overspending by {currentCurrency.value}
  //       {Math.abs(remaining)}
  //     </RemainingCardStyled>
  //   );
  // }
  return (
    <RemainingCardStyled>
      Remaining {currentCurrency.value}:{remaining}{" "}
    </RemainingCardStyled>
  );
};
