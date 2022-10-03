import { createContext, useReducer, useState } from "react";
import { globalState } from "./data";
import { actions } from "./actions";
import { reducer } from "./reducer";
export const GlobalContext = createContext();

export const AppCountext = (props) => {
  const [state, dispatch] = useReducer(reducer, globalState)
  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload})
  }
  console.log(state)
  return <GlobalContext.Provider value={{state, changeTitle}}>{props.children}</GlobalContext.Provider>
}