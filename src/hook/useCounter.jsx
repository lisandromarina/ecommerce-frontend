import { useState } from "react";

const useCounter = (initialValue) => {
    const [value, setValue] = useState(initialValue);
  
    const increment = () => setValue(c => c + 1);
    const decrement = () => {
      if (value > 1) {
        setValue((c) => c - 1);
      }
    };
    const reset = () => setValue(initialValue);
  
    return { value, increment, decrement, reset };
  };

export default useCounter;