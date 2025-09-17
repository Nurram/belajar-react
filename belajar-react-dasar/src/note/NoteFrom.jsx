import { useContext, useState } from "react";
import { DispatchContext } from "./NotesContext";

export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = useContext(DispatchContext);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick(e) {
    setText("");
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  }

  return (
    <div>
      <input
        type="text"
        name="note"
        id="note"
        value={text}
        onChange={handleChange}
      />

      <button onClick={handleClick}>Add</button>
    </div>
  );
}
