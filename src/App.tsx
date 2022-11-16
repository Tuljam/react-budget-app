import React from 'react'
import { AppWrapper } from './AppWrapperStyles'
import { AddExpensess } from './components/AddExpensess/AddExpensess'
import { BadgetApp } from './components/Budget/BadgetApp'
import { Expensess } from './components/Expensess/Expensess'



export const App = () => {
  return (
    <AppWrapper>
    <BadgetApp/>
    <Expensess/>
   <AddExpensess/>
    </AppWrapper>
  )
}
