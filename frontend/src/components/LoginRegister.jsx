import { useState } from "react";
import { loginUser, registerUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  const submit = async (e) => {
    e.preventDefault();

    if (isLogin) await loginUser(form);
    else await registerUser(form);

    navigate("/movies");
  };

  return (
    <div className="min-h-screen bg-[#0e3b44] flex items-center justify-center">
      <form
        onSubmit={submit}
        className="bg-[#174c56] p-8 rounded-lg w-80 flex flex-col gap-3"
      >
        <h2 className="text-white text-2xl font-semibold text-center">
          {isLogin ? "Sign in" : "Register"}
        </h2>

        {!isLogin && (
          <input
            placeholder="Name"
            className="input"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        )}

        <input
          placeholder="Email"
          className="input"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Password"
          type="password"
          className="input"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-green-500 py-2 rounded text-white">
          {isLogin ? "Login" : "Register"}
        </button>

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm text-center text-gray-300 cursor-pointer"
        >
          {isLogin ? "Create account" : "Back to login"}
        </p>
      </form>
    </div>
  );
}
