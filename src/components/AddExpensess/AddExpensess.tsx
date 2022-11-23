import { FormEvent } from "react";
import { Input } from "../Input/Input";
import { Submit } from "../Submit/Submit";
import { Title } from "../Title/Title";
import { StyledForm } from "./styles";

export const AddExpensess = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title label="Add Expenses" />
      <Input />
      <Input />
      <Submit />
    </StyledForm>
  );
};
