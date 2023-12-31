import { useState } from "react";
import { auth } from "../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("./profile");
    } catch {
      console.log("Error while logging in ");
    }
  };
  return (
    <form className="flex items-center justify-center border flex-col h-[70vh] w-[60vw] m-auto bg-blue-100">
      <h2 className="text-3xl mb-4">Sign in</h2>
      <input
        type="email"
        className="outline-none border p-1 mb-2 w-72"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="outline-none border p-1 w-72"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="border text-white bg-green-600 p-1 rounded m-2"
        onClick={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        Login
      </button>
      <p>or</p>
      <Link to="/signup" className="text-blue-800">
        create an account
      </Link>
    </form>
  );
}

export default Login;
