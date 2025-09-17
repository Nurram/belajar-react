import { useContext, useState } from "react";
import { DispatchContext } from "./NotesContext";

export default function Note({ note }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(DispatchContext);

  let component;

  function handleChangeText(e) {
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      text: e.target.value,
    });
  }

  if (isEditing) {
    component = (
      <div>
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </div>
    );
  } else {
    component = (
      <div>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  function handleChangeDone(e) {
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      done: e.target.checked,
    });
  }

  function handleDelete() {
    dispatch({
      type: "DELETE_NOTE",
      text: note.id,
    });
  }

  return (
    <label>
      <input
        type="checkbox"
        name="ck"
        checked={note.done}
        onChange={handleChangeDone}
      />
      {component}
      <button onClick={handleDelete}>Delete</button>
    </label>
  );
}
