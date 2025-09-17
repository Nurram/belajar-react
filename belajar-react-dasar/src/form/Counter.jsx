import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0)

  function handleIncrement() {
    setCounter(counter + 1);
  }

  return ( 
    <div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <h1>Counter: {counter}</h1>
    </div>
  );
}
