import styled from "styled-components";

export const ExpenseListItemStyled = styled.li`
  display: grid;
  grid-template-columns: 1fr 0.1fr 0.1fr;
  grid-template-rows: 20px;
  padding: 15px 20px;
  align-items: center;
  border-bottom: 2px solid #ccd5ff;
  @media (max-width: 390px) {
    font-size: 12px;
    padding: 12px 15px;
  }
`;
export const BadgeStyled = styled.span`
  justify-self: center;
  background-color: blue;
  border-radius: 10px;
  padding: 3px 10px;
  font-size: 12px;
  color: #fff;
`;

export const ExpensesDeleteButtonStyled = styled.button`
  justify-self: center;
  width: 5px;
  margin-left: 5px;

  color: red;
  cursor: pointer;
`;

export const TextStyled = styled.p`
  text-transform: lowercase;
  font-weight: 400;
  font-size: 15px;
`;
