import { useState } from "react";
import { useImmer } from "use-immer";

export default function ContactForm() {
  const [contact, setContact] = useImmer({
    name: "",
    message: "",
  });

  function handleNameChange(e) {
    setContact((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleMessageChange(e) {
    setContact((draft) => {
      draft.message = e.target.value;
    });
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input
          type="text"
          name="name"
          id="name"
          value={contact.name}
          placeholder="Name"
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          name="message"
          id="message"
          value={contact.message}
          placeholder="Message"
          onChange={handleMessageChange}
        />
      </form>
      <h2>Contact Detail</h2>
      <p>Name: {contact.name}</p>
      <p>Message: {contact.message}</p>
    </div>
  );
}
