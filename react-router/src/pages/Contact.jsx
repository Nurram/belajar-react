import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact</h1>
      <div className="contact-button">
        <button onClick={() => navigate("info")}>Contact Info</button>
        <button onClick={() => navigate("form")}>Contact Form</button>
      </div>
    </div>
  );
}
