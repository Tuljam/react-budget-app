import React from "react";
import { BudgetCard } from "../BudgetCard/BudgetCard";
import { CurrensySelect } from "../CurrensySelect/CurrensySelect";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { Spentcard } from "../SpentCard/Spentcard";
import { Title } from "../Title/Title";
import { BudgetStyled } from "./styles";

export const Budget = () => {
  return (
    <BudgetStyled>
      <CurrensySelect />
      <Title label="Budget App:" />
      <BudgetCard />
      <RemainingCard />
      <Spentcard />
    </BudgetStyled>
  );
};
