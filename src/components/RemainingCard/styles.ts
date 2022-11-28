import styled from "styled-components";

export interface IStyles {
  $isOverBudget: boolean;
}
export const RemainingCardStyled = styled.div<IStyles>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  width: 335px;
  padding: 20px;

  background-color: ${({ $isOverBudget }) =>
    $isOverBudget ? "#FF0E27" : "#9E2DFC"};
  border: none;
  border-radius: 10px;
  /* стиль для const Title */
  font-weight: ${({ $isOverBudget }) => ($isOverBudget ? "700" : "500")};
  font-size: 20px;
  line-height: 24px;
  color: ${({ $isOverBudget }) => ($isOverBudget ? "#fff" : "000")};
`;

//  ${(props: IProps) => (props.danger ? "#FF0E27" : "#9E2DFC")};
//  color: ${(props: IProps) => (props.danger ? "#FFF" : "black")};
//  border: none;
//  border-radius: 10px;

export const SubTitle = styled.p<IStyles>`
  font-weight: ${({ $isOverBudget }) => ($isOverBudget ? "700" : "500")};
  font-size: 20px;
  line-height: 24px;
  color: ${({ $isOverBudget }) => ($isOverBudget ? "#fff" : "000")};
`;
