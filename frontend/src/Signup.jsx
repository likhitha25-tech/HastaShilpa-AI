import { useState } from "react";
import axios from "axios";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signupUser = async () => {

    try {

      const res = await axios.post(
        "https://hastashilpa-backend.onrender.com/auth/signup/",
        {
          name,
          email,
          password
        }
      );

      setMessage(res.data.message);

      window.location.href = "/";

    } catch (error) {

      console.log(error);

      setMessage("Signup Failed");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-4"
          onChange={(e) => setName(e.target.value)}
        />

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
          onClick={signupUser}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
        >
          Signup
        </button>

        <p className="mt-4 text-center text-green-600">
          {message}
        </p>

        <p className="mt-4 text-center">

          Already have an account?

          <a
            href="/"
            className="text-blue-600 ml-2"
          >
            Login
          </a>

        </p>

      </div>

    </div>

  );

}

export default Signup;