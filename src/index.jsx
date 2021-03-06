import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Dashboard } from "./pages/Dashboard/Dashboard";
import { styleVar } from "./utils/style/styleVariables";
import reportWebVitals from "./reportWebVitals";

async function initApp() {
  ReactDOM.render(
    <React.StrictMode>
      <GlobalStyle />

      <Router>
        <Route exact path="/">
          <Redirect to="/dashboard/12" />
        </Route>
        <Route path="/dashboard/:userId">
          <Dashboard />
        </Route>
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    
    color: ${styleVar.neutral900};
    font-family: Roboto, system-ui, Helvetica, sans-serif;
    font-weight: 400;

    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  #root {
    max-width: 1440px;
    margin: auto;
    overflow: hidden;

    @media (max-width: 1340px) {
      max-width: 1024px;
      max-height: 780px;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  
    margin: 0;
    padding: 0;
  
    list-style-type: none;
  }
`;

initApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
