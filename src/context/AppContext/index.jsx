import { createContext, useState } from "react";
import { globalState } from "./data";
export const GlobalContext = createContext();

export const AppCountext = (props) => {
  const [state, setState] = useState(globalState)
  return <GlobalContext.Provider value={{state, setState}}>{props.children}</GlobalContext.Provider>
}