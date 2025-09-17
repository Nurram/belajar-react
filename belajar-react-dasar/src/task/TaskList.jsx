export default function TaskList({items = []}) {
  return (
    <div>
      <h2>List Task</h2>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
