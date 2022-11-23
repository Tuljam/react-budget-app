import { FormEvent } from "react";
import { Input } from "../Input/Input";
import { Submit } from "../Submit/Submit";
import { Title } from "../Title/Title";

export const AddExpensess = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title label="Add Expenses" />
      <Input />
      <Input />
      <Submit />
    </form>
  );
};
