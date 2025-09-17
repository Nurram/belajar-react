import { useRef, useState } from "react";
import GuesBootInput from "./GuestbookInput";

export default function Guestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const nameInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setMessage("");

    alert(`Name ${name}, Message ${message}`);
    nameInput.current.focus();
  }
  return (
    <div>
      <h1>Guest Book</h1>
      <form>
        <GuesBootInput ref={nameInput} name={name} setName={setName} />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          type="text"
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
