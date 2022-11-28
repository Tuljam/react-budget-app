import styled from "styled-components";

interface IProps {
  danger?: boolean;
}
export const RemainingCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  width: 335px;
  padding: 20px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  background-color: ${(props: IProps) =>
    props.danger ? "#FF0E27" : "#9E2DFC"};
  color: ${(props: IProps) => (props.danger ? "#FFF" : "black")};
  border: none;
  border-radius: 10px;
`;
