import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 335px;
  padding: 20px 0;

  .form-field__error {
    color: red;
  }
`;
export const StyledInputForm = styled.input`
  border-radius: 10px;
  border: none;
  padding: 20px 15px;
  &::placeholder {
    color: #999999;
  }
  &:focus-visible {
    outline: none;
  }
  @media (max-width: 390px) {
    font-size: 12px;
    padding: 15px 10px;
  }
`;
