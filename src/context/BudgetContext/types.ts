import { ReactNode } from "react";

export interface IBudgetContext {
  budget: number;
  setNewBudget: (newBudget: number) => void;
}

export interface IBudgetContextProviderProps {
  children: ReactNode;
}
