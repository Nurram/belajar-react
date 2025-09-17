import { StrictMode } from "react";
import Timer from "./Timer";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Timer />
  </StrictMode>
);
