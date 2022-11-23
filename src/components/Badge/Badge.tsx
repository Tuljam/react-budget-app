import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const Badge = () => {
  const { currentCurrency } = useCurrencyContext();
  return (
    <div>
      <p>{currentCurrency.value}</p>
    </div>
  );
};
