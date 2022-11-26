import { createContext, useContext, useState } from "react";
import { IExpense } from "../../types/types";
import { IExpenseContext, IExpensesContextProviderProps } from "./types";

export const ExpensesContext = createContext<IExpenseContext>(
  {} as IExpenseContext
);

export const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpenseContext>(
    () => ({
      expenses: [
        // {
        //   id: "",
        //   title: "",
        //   price: 0,
        // },
      ],
      setNewExpense: (newExpense: IExpense) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: [...ctx.expenses, newExpense],
        }));
      },
      deleteExpense: (id) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: ctx.expenses.filter((exp) => exp.id! === id),
        }));
      },
      searchValue: "",
      searchExpense: (name) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          searchValue: name.toLowerCase(),
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
