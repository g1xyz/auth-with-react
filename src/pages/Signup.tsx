import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../data/firebase";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
      <div>
        <h2>Signup</h2>
        <form>
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
          <label htmlFor="confirmpassword">
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="confirmpassword"
            />
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSignup();
            }}
          >
            Signup
          </button>
        </form>
        <div>
          Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
