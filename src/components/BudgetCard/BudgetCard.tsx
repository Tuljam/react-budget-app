import { FormEvent, useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useInput } from "../../hooks/useInput";
import { BudgetCardStyled, SubTitleStyled } from "./styles";

export const BudgetCard = () => {
  const inputValue = useInput();
  const { budget, setNewBudget } = useBudgetContext();

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
          <input type="text" className="form-control" {...inputValue} />
          <button className="budget__button" onClick={handleSave}>
            {" "}
            Save
          </button>
        </>
      ) : (
        <>
          <SubTitleStyled> Budget :{budget}</SubTitleStyled>

          <button className="budget__button" onClick={handleEdit}>
            {" "}
            Edit
          </button>
        </>
      )}
    </BudgetCardStyled>
  );
};
