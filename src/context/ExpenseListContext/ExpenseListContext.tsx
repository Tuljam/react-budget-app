import { createContext, useContext, useState } from "react";
import { IExpenseContext, IExpensesContextProviderProps } from "./types";

export const ExpensesContext = createContext<IExpenseContext>(
  {} as IExpenseContext
);

export const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpenseContext>(
    () => ({
      expenses: [
        {
          id: "23abc",
          title: "Lopata",
          price: 100,
        },
      ],
      setNewExpense: (newExpense) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: [...ctx.expenses, newExpense],
        }));
      },
      deleteExpense: (id: string) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: ctx.expenses.filter((exp) => exp.id! === id),
        }));
      },
    })
  );
  return expensesContext;
};

export const useExpensesContext = () =>
  useContext<IExpenseContext>(ExpensesContext);

export const ExpensesContextProvider = ({
  children,
}: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
