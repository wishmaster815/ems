import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = ({ handleLogin }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    login(email, password); // clear inputs
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 rounded-xl border-2 border-emerald-600 bg-gray-800 px-10 py-10">
        <h1 className="mb-8 text-center text-4xl uppercase text-white">
          Login
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            className="rounded-3xl border-2 border-emerald-600 bg-transparent p-2 text-lg text-white placeholder:text-gray-400 outline-none"
          />

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="rounded-3xl border-2 border-emerald-600 bg-transparent p-2 text-lg text-white placeholder:text-gray-400 outline-none"
          />

          <button
            type="submit"
            className="mt-4 rounded-3xl bg-emerald-600 py-2 text-lg font-semibold text-white transition duration-200 hover:bg-emerald-700 active:scale-95"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
