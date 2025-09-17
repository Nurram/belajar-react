import { useRef } from "react";

export default function AlertButton({ text }) {
  const counter = useRef(0);

  function handleClick() {
    alert(`Button Clicked ${counter.current++} times`);
  }

  return <button onClick={handleClick}>{text}</button>;
}
