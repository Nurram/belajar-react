export default function GuesBootInput({ref, name, setName}) {
    return (
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          ref={ref}
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    );
}