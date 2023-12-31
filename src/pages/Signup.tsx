import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../api/firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch {
        console.log("error while sign up");
      }
    } else {
      console.log("password didn't match");
    }
  };
  return (
    <>
      <form className="flex items-center justify-center border flex-col h-[70vh] w-[60vw] m-auto bg-blue-100">
        <h2 className="text-3xl mb-4">Signup</h2>
        <input
          type="email"
          className="outline-none border-neutral-400 border p-1 mb-2 w-64"
          placeholder="Email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="outline-none border-neutral-400 border p-1 mb-2 w-64"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <input
          type="password"
          className="outline-none border-neutral-400 border p-1 mb-2 w-64"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          id="confirmpassword"
        />
        <button
          className="border text-white bg-green-600 p-1 rounded"
          onClick={(e) => {
            e.preventDefault();
            handleSignup();
          }}
        >
          Signup
        </button>
        <p>or</p>
        <Link className="text-blue-800" to="/">
          login to your account
        </Link>
      </form>
    </>
  );
}

export default Signup;
