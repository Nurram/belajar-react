import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [showCounter, setShowCounterDua] = useState(true);

  function handleChange(e) {
    setShowCounterDua(e.target.checked);
  }

  return (
    <div>
      {showCounter ? (
        <Counter name="Dua" key="Dua" />
      ) : (
        <Counter name="Satu" key="Satu" />
      )}
      <input type="checkbox" checked={showCounter} onChange={handleChange} />
      Tampilkan Counter dua
    </div>
  );
}
