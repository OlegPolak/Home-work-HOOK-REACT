import { useRef } from "react";

const UseRef = () => {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    }

    const handleBlur = () => {
        inputRef.current.blur();
    }


  return (
    <div>
          <input ref={inputRef} /><br/>
          <button onClick={handleFocus}>Focus</button>
          <button onClick={handleBlur}>Blur</button>
    </div>
  )
}

export default UseRef
