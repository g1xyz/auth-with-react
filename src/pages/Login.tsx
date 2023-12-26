import { useState } from "react";
import { auth } from "../data/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("./profile");
    } catch {
      console.log("Error while logging in ");
    }
  };
  return (
    <div>
      <h2>login</h2>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
      </label>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        Login
      </button>
      <div>
        Don't have an account?
        <Link to="/signup">Signup now</Link>
      </div>
    </div>
  );
}

export default Login;
