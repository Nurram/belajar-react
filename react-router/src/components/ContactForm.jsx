import React from "react";

function ContactForm() {
  return (
    <form>
      <input type="text" placeholder="Your Name" />
      <br />
      <input type="email" placeholder="Your Email" />
      <br />
      <textarea placeholder="Message" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
