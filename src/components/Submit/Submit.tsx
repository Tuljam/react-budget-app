import React from 'react'
import { useExpensesContext } from '../../context/ExpenseListContext/ExpenseListContext';

export const Submit = () => {
 const {setNewExpense} = useExpensesContext();

    const handleSubmit= () => {
    setNewExpense ({id:"32bsd", title:"Shapka", cost: 80})
    }

  return (
     <button onClick={handleSubmit}> Done</button>
  
  )
}
