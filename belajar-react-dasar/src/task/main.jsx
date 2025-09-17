import { StrictMode } from "react";
import Task from "./Task";

import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Task />
        </StrictMode>
    )