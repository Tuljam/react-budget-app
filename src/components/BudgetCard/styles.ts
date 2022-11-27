import styled from "styled-components";
export const BudgetCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  width: 335px;
  padding: 20px;

  background: #6495ed;
  border: none;
  border-radius: 10px;
`;
export const SubTitleStyled = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export const ButtonStyled = styled.button`
  width: 85px;
  padding: 10px;
  border-radius: 15px;
  border: none;
`;
export const InputStyled = styled.input`
  width: 50%;
  border: none;
  background-color: transparent;
  color: black;
  font-weight: 500;
  font-size: 20px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  &:focus-visible {
    outline: none;
  }
`;
