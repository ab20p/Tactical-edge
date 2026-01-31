import { useEffect, useState } from "react";
import { getMovieById, updateMovie } from "../api/movieApi";
import { useParams, useNavigate } from "react-router-dom";
import MovieForm from "../components/MovieForm";

export default function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMovieById(id).then((res) => setMovie(res.data));
  }, []);

  if (!movie) return null;

  return (
    <MovieForm
      initialData={movie}
      onSubmit={async (fd) => {
        await updateMovie(id, fd);
        navigate("/movies");
      }}
    />
  );
}
