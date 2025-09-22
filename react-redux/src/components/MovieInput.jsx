import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice";

export const MovieInput = () => {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (movie) {
      dispatch(addMovie(movie));
      setMovie("");
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(text) => {
          setMovie(text.target.value);
        }}
        value={movie}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};
