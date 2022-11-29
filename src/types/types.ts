import { ReactNode } from "react";

export interface IExpense {
  id: string;
  name: string;
  price: number;
}

export interface IExpensesContextProviderProps {
  children: ReactNode;
}

export interface IExpenseContext {
  expenses: IExpense[];
  setNewExpense: (expense: IExpense) => void;
  deleteExpense: (id: string) => void;
  searchValue: string;
  searchExpense: (name: string) => void;
}
export interface IBudgetContextProviderProps {
  children: ReactNode;
}

export interface IBudgetContext {
  budget: number;
  //remaining: number;
  //spending: number;
  //setRemaining: () => void;
  // returnRemaining: (value: number) => void;
  //setSpending: (newSpending: number) => void;
  setNewBudget: (newBudget: number) => void;
  // returnSpending: (value: number) => void;
}

export interface IFormData {
  name: string;
  price: number;
}
export interface IFormData {
  name: string;
  price: number;
}
