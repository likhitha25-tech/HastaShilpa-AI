import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const loginUser = async () => {

    try {

      const res = await axios.post(
        "https://hastashilpa-backend.onrender.com/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem("token", res.data.token);

      setMessage("Login Successful");

      window.location.href = "/home";

    } catch (error) {

      console.log(error);

      setMessage("Login Failed");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginUser}
          className="bg-green-600 text-white px-4 py-2 rounded-lg w-full"
        >
          Login
        </button>

        <p className="mt-4 text-center text-green-600">
          {message}
        </p>

        <p className="mt-4 text-center">

          Don't have an account?

          <a
            href="/signup"
            className="text-blue-600 ml-2"
          >
            Signup
          </a>

        </p>

      </div>

    </div>

  );

}

export default Login;