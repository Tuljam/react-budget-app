import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { SpentcardStyled } from "./styles";

export const Spentcard = () => {
  const { currentCurrency } = useCurrencyContext();

  return <SpentcardStyled>Spent {currentCurrency.value}:</SpentcardStyled>;
};
