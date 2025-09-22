import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";

export const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const handleDelete = (movieId) => {
    dispatch(removeMovie(movieId));
  };

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <h4>{movie.name}</h4>
            <button onClick={() => handleDelete(movie.id)}>Delete Movie</button>
          </div>
        );
      })}
    </div>
  );
};
