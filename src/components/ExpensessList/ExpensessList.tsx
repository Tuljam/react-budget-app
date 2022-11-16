import React from 'react'
import { Badge } from '../Badge/badge'
import { ExpensListItem } from '../ExpensListItem/ExpensListItem'

export const ExpensessList = () => {
  return (
    <ul>
   <ExpensListItem/>
   <Badge/>

    </ul>
  )
}
