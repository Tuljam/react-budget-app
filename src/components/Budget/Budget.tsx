import { BudgetCard } from "../BudgetCard/BudgetCard";
import { CurrensySelect } from "../CurrensySelect/CurrensySelect";
import { RemainingCard } from "../RemainingCard/RemainingCard";

import { Spentcard } from "../SpentCard/Spentcard";
import { Title } from "../Title/Title";
import { BudgetStyled, HeadStyled } from "./styles";

export const Budget = () => {
  return (
    <BudgetStyled>
      <HeadStyled>
        <Title label="Budget App" />
        <CurrensySelect />
      </HeadStyled>
      <BudgetCard />
      <RemainingCard />
      <Spentcard />
    </BudgetStyled>
  );
};
