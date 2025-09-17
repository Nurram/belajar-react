export default function ProfileForm({ name, setName }) {
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h2>Profile Form</h2>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
}
