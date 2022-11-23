import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const CurrensySelect = () => {
  const { setNewCurrency, currencies, currentCurrency } = useCurrencyContext();
  const handleSelect = (option: SingleValue<typeof currentCurrency>) => {
    if (option) {
      setNewCurrency(option);
    }
  };

  return (
    <Select
      options={currencies}
      value={currentCurrency}
      onChange={handleSelect}
      isSearchable={false}
    />
  );
};
