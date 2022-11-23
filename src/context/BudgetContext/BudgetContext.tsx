import { createContext, ReactNode, useContext, useState } from "react";
import { Currency } from "../../ui/currency";

interface IBudgetContextProviderProps {
  children: ReactNode;
}

interface IBudgetContext {
  budget: number;
  remaining: number;
  spending: number;
  setRemaining: () => void;
  setSpending: (newSpending: number) => void;
  setNewBudget: (newBudget: number) => void;
}
export const BudgetContext = createContext<IBudgetContext>(
  {} as IBudgetContext
);

export const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: 0,
    setNewBudget: (newBudget) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        budget: newBudget,
      }));
    },
    remaining: 0,
    setRemaining: () => {
      setBudgetContext((ctx) => ({
        ...ctx,
        remaining: ctx.budget - ctx.spending,
      }));
    },
    spending: 0,
    setSpending: (newSpending) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        spending: ctx.spending + newSpending,
      }));
    },
  }));
  return budgetContext;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetContextProvider = ({
  children,
}: IBudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>
      {" "}
      {children}
    </BudgetContext.Provider>
  );
};
