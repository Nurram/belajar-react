import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter";
import CounterApp from "./CounerApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>
);