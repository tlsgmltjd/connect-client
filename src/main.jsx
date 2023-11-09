import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  background-color: #1f1e2b;
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyled />
    <App />
  </>
);
