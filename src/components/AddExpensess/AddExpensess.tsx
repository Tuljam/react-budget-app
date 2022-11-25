import { FormEvent } from "react";
import { Input } from "../Input/Input";
import { Submit } from "../Submit/Submit";
import { Title } from "../Title/Title";
import { StyledForm, StyledInputForm } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { v4 } from "uuid";

interface IFormData {
  title: string;
  price: number;
}
export const AddExpensess = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const { setNewExpense } = useExpensesContext();
  const onSubmit: SubmitHandler<IFormData> = ({ title, price }) => {
    setNewExpense({ title, price, id: v4() });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title label="Add Expenses" />

      <StyledInputForm
        type="text"
        {...register("title", { required: "title is required" })}
      />
      <span className="form-field__error">
        {errors.title && errors.title.message}
      </span>
      <StyledInputForm
        type="text"
        {...register("price", { required: "price is required" })}
      />
      <span className="form-field__error">
        {errors.price && errors.price.message}
      </span>
      <Submit />
    </StyledForm>
  );
};
