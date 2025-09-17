import "./HelloWorld.css";

export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld text="Hello World"/>
      <ParagraphHelloWorld text="Selamat Belajar ReactJS" />
    </div>
  );
}

function HeaderHelloWorld(props) {
  return (
    <div>
      <h3 className="title">{props.text.toUpperCase()}</h3>
    </div>
  );
}

function ParagraphHelloWorld({ text = "Pharagraph" }) {
  return (
    <div>
      <p className="content">{text.toLowerCase()}</p>
    </div>
  );
}
