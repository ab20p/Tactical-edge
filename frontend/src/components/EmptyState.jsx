import { useNavigate } from "react-router-dom";

export default function EmptyState() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#0e3b44] flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl mb-6">Your movie list is empty</h2>

      <button
        onClick={() => navigate("/movies/new")}
        className="bg-green-500 px-6 py-2 rounded"
      >
        Add a new movie
      </button>
    </div>
  );
}
