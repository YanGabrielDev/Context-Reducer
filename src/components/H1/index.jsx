import { useContext } from "react"
import { GlobalContext } from "../../context/AppContext";
export const H1 = () => {
  const theContext = useContext(GlobalContext);
  return (
    <h1>{theContext.state.title}</h1>
  );
};