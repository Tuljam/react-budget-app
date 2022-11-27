import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useInput } from "../../hooks/useInput";
import {
  BudgetCardStyled,
  ButtonStyled,
  InputStyled,
  SubTitleStyled,
} from "./styles";

export const BudgetCard = () => {
  const inputValue = useInput();
  const { budget, setNewBudget } = useBudgetContext();
  const { currentCurrency } = useCurrencyContext();

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    setNewBudget(+inputValue.value);
  };
  return (
    <BudgetCardStyled>
      {isEditMode ? (
        <>
          <InputStyled type="text" {...inputValue} />
          <button className="budget__button" onClick={handleSave}>
            {" "}
            Save
          </button>
        </>
      ) : (
        <>
          <SubTitleStyled>
            {" "}
            Budget {currentCurrency.value}:{budget}
          </SubTitleStyled>

          <ButtonStyled onClick={handleEdit}> Edit</ButtonStyled>
        </>
      )}
    </BudgetCardStyled>
  );
};
