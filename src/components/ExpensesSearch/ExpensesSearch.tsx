import { ChangeEvent } from "react";
import { ExpensesSearchStyled } from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const ExpensesSearch = ({ value, onChange }: IProps) => {
  return (
    <ExpensesSearchStyled
      placeholder="search ..."
      type="search"
      value={value}
      onChange={onChange}
    />
  );
};
