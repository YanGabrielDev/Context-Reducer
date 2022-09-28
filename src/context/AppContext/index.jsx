import { createContext, useReducer, useState } from "react";
import { globalState } from "./data";
import { reducer } from "./reducer";
export const GlobalContext = createContext();

export const AppCountext = (props) => {
  const [state, dispatch] = useReducer(reducer, globalState)
  console.log(state)
  return <GlobalContext.Provider value={{state, dispatch}}>{props.children}</GlobalContext.Provider>
}