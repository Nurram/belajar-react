import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Guestbook from "./Guestnook";

createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <Guestbook />
    </StrictMode>
)