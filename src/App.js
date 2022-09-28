import "./App.css";
import React, { useReducer } from "react";
import { AppCountext } from "./context/AppContext";
import { Div } from "./components/Div";
import { globalState } from "./context/AppContext/data";
import { H1 } from "./components/H1";

function App() {
  return (
    <>
      <AppCountext>
        <H1 />
      </AppCountext>
    </>
  );
}

export default App;
