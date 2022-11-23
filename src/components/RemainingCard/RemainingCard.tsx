import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { RemainingCardStyled } from "./styles";

export const RemainingCard = () => {
  const { remaining } = useBudgetContext();

  return <RemainingCardStyled>Remaining:{remaining}</RemainingCardStyled>;
};
