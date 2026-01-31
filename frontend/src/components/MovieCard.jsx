import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movies/${movie._id}/edit`)}
      className="bg-[#174c56] rounded-lg p-3 cursor-pointer hover:scale-105 transition"
    >
      <img
        src={`http://localhost:5000/${movie.image}`}
        className="h-56 w-full object-cover rounded mb-2"
      />
      <p>{movie.title}</p>
      <p className="text-xs opacity-60">{movie.year}</p>
    </div>
  );
}
