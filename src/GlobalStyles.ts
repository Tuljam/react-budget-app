import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{ margin: 0;
  padding: 0;
  box-sizing: border-box}
#root {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
 body {
  font-family: Arial, Helvetica, sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
  font-weight: normal;
  font-style: normal;
}
a {
  text-decoration: none;
}
`;