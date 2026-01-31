import { useEffect, useState } from "react";
import { getMovies } from "../api/movieApi";
import { logoutUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import EmptyState from "../components/EmptyState";
import Pagination from "../components/Pagination";

export default function Movies() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const fetchMovies = async () => {
    const res = await getMovies(page, 8);

    setMovies(res.data.movies);
    setTotalPages(res.data.totalPages);
  };

  if (!movies.length && page === 1) return <EmptyState />;

  return (
    <div className="min-h-screen bg-[#0e3b44] text-white p-8">
      {/* HEADER */}
      <div className="flex justify-between mb-6 items-center">
        <h1 className="text-2xl font-semibold">My Movies</h1>

        <button
          onClick={() => {
            logoutUser();
            navigate("/");
          }}
          className="bg-red-500 px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>

      {/* ADD BUTTON */}
      <button
        onClick={() => navigate("/movies/new")}
        className="bg-green-500 px-4 py-2 rounded mb-6"
      >
        Add Movie
      </button>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((m) => (
          <MovieCard key={m._id} movie={m} />
        ))}
      </div>

      {/* PAGINATION */}
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}
