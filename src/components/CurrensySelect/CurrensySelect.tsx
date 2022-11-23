import Select from "react-select";
import { Currency } from "../../ui/currency";

type CurrencyOption = {
  value: Currency;
  label: keyof typeof Currency; //либо string
};

export const CurrensySelect = () => {
  const options: CurrencyOption[] = [
    { value: Currency.USD, label: "USD" },
    { value: Currency.EUR, label: "EUR" },
    { value: Currency.GBR, label: "GBR" },
    { value: Currency.BYR, label: "BYR" },
  ];

  return <Select options={options} />;
};
