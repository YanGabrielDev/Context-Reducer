import { useContext, useRef } from "react"
import { GlobalContext } from "../../context/AppContext";
export const H1 = () => {
  const inputRef = useRef()
  const theContext = useContext(GlobalContext);
  return (
    <>
    <h1 onClick={() => console.log(theContext.changeTitle(inputRef.current.value))}>{theContext.state.title}</h1>
    <input type="text" ref={inputRef}/>
    </>
  );
};