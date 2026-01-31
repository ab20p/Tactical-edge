import MovieForm from "../components/MovieForm";
import { createMovie } from "../api/movieApi";
import { useNavigate } from "react-router-dom";

export default function CreateMovie() {
  const navigate = useNavigate();

  return (
    <MovieForm
      onSubmit={async (fd) => {
        await createMovie(fd);
        navigate("/movies");
      }}
    />
  );
}
