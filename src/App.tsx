import React from 'react'
import { AppWrapper } from './AppWrapperStyles'
import { AddExpensess } from './components/AddExpensess/AddExpensess'
import { BudgetApp } from './components/Budget/BudgetApp'
import { Expensess } from './components/Expensess/Expensess'



export const App = () => {
  return (
    <AppWrapper>
    <BudgetApp/>
    <Expensess/>
   <AddExpensess/>
    </AppWrapper>
  )
}
