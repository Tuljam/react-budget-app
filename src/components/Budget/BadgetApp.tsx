import React from 'react'
import { BadgetCard } from '../BadgetCard/BadgetCard'
import { CurrensySelect } from '../CurrensySelect/CurrensySelect'
import { RemainingCard } from '../RemainingCard/RemainingCard'
import { Spentcard } from '../SpentCard/Spentcard'

import { Title } from '../Title/Title'



export const BadgetApp = () => {
  return (
    <div>
      <Title/>
      <CurrensySelect/>
      <BadgetCard/>
      <RemainingCard/>
      <Spentcard/>

    </div>
  )
}
