import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import { Dashboard } from "./pages/Dashboard/Dashboard";
import { styleVar } from "./utils/styleVariables";
import reportWebVitals from "./reportWebVitals";

async function initApp() {
  ReactDOM.render(
    <React.StrictMode>
      <GlobalStyle />

      <Dashboard />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    color: ${styleVar.neutral900};
    font-family: Roboto, system-ui, Helvetica, sans-serif;
    font-weight: 500;

    scroll-behavior: smooth;
  }

  #root {
    max-width: 1440px;
    margin: auto;
  }
`;

initApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
