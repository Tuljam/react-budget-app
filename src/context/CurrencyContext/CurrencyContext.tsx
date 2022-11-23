import { createContext, ReactNode, useContext, useState } from "react";
import { Currency } from "../../ui/currency";
export interface ICurrencyContextProviderProps {
  children: ReactNode;
}
export interface ICurrencyContext {
  currentCurrency: ICurrencyOption;
  currencies: ICurrencyOption[];
  setNewCurrency: (currency: ICurrencyOption) => void;
}

export type ICurrencyOption = {
  value: Currency;
  label: keyof typeof Currency;
};
export const CurrensyContext = createContext<ICurrencyContext>(
  {} as ICurrencyContext
);
export const useCurrencytContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(
    () => ({
      currentCurrency: { value: Currency.USD, label: "USD" },
      currencies: [
        { value: Currency.USD, label: "USD" },
        { value: Currency.EUR, label: "EUR" },
        { value: Currency.GBR, label: "GBR" },
        { value: Currency.BYN, label: "BYN" },
      ],
      setNewCurrency: (currentCurrency: ICurrencyOption) => {
        setCurrencyContext((ctx) => ({
          ...ctx,
          currentCurrency,
        }));
      },
    })
  );
  return currencyContext;
};

export const useCurrencyContext = () =>
  useContext<ICurrencyContext>(CurrensyContext);
export const CurrencyContextProvider = ({
  children,
}: ICurrencyContextProviderProps) => {
  return (
    <CurrensyContext.Provider value={useCurrencytContextValue()}>
      {" "}
      {children}
    </CurrensyContext.Provider>
  );
};
