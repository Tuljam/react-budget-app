import { TitleStyled } from "./styles";
interface IProps {
  label: string;
}

export const Title = ({ label }: IProps) => {
  return <TitleStyled>{label}</TitleStyled>;
};
