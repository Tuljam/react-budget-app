import styled from "styled-components";

export const ExpenseListStyled = styled.ul`
  max-height: 200px;
  overflow-y: auto;
  &::scroll {
    display: none;
  }
`;
export const EmptyListStyled = styled.p`
  text-align: center;
`;
