import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/LoginRegister";
import Movies from "./pages/Movies";
import CreateMovie from "./pages/CreateMovie";
import EditMovie from "./pages/EditMovie";
import { isAuthenticated } from "./api/authApi";

function Protected({ children }) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />

        <Route
          path="/movies"
          element={<Protected><Movies /></Protected>}
        />

        <Route
          path="/movies/new"
          element={<Protected><CreateMovie /></Protected>}
        />

        <Route
          path="/movies/:id/edit"
          element={<Protected><EditMovie /></Protected>}
        />
      </Routes>
    </BrowserRouter>
  );
}
