import { Input } from "../Input/Input";
import { Submit } from "../Submit/Submit";
import { Title } from "../Title/Title";

export const AddExpensess = () => {
  return (
    <form>
      <Title label="Add Expenses" />
      <Input />
      <Input />
      <Submit />
    </form>
  );
};
