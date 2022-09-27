import { useContext } from "react";
import { GlobalContext } from "../../context/AppContext";
import { globalState } from "../../context/AppContext/data";

export const P = () => {
  const theContext = useContext(GlobalContext)
  const {state: {body, counter},
  setState
} = theContext;
return(
  <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1}))}>
    {body} {counter}
  </p>
)
}