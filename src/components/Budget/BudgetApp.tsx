import React from 'react'
import { BudgetCard } from '../BudgetCard/BudgetCard'
import { CurrensySelect } from '../CurrensySelect/CurrensySelect'
import { RemainingCard } from '../RemainingCard/RemainingCard'
import { Spentcard } from '../SpentCard/Spentcard'

import { Title } from '../Title/Title'



export const BudgetApp = () => {
  return (
    <div>
      <Title/>
      <CurrensySelect/>
      <BudgetCard/>
      <RemainingCard/>
      <Spentcard/>

    </div>
  )
}
