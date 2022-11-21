import React, { useState } from "react";
import { BudgetCardStyled } from "./styles";

export const BudgetCard = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
  };
  return (
    <BudgetCardStyled>
      {isEditMode ? (
        <>
          <input type="text" className="form-control" />
          <button className="budget__button" onClick={handleSave}>
            {" "}
            Save
          </button>
        </>
      ) : (
        <>
          <p className="budget__descr"> Budget: 3500</p>
          <button className="budget__button" onClick={handleEdit}>
            {" "}
            Edit
          </button>
        </>
      )}
    </BudgetCardStyled>
  );
};
