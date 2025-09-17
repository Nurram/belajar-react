import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HelloWorld from "./hello-world/HelloWorld.jsx";
import Container from "./Container.jsx";
import TodoList from "./todo-list/TodoList.jsx";
import AlertButton from "./button/AlertButton.jsx";
import MyButton from "./button/MyButton.jsx";
import Toolbar from "./toolbar/Toolbar.jsx";
import SayHelloForm from "./form/SayHelloForm.jsx";
import Counter from "./form/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <AlertButton text="Click Me" />
      <MyButton text="Smash Me" onSmash={() => alert("SMASH!")} />

      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("Toolbar CLicked");
        }}
      />

      <SayHelloForm />

      <Counter />
    </Container>
  </StrictMode>
);
