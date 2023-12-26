import { signOut } from "firebase/auth";
import { auth } from "../data/firebase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = auth.currentUser === null ? { email: "user" } : auth.currentUser;
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <>
      <div>Welcome {user.email}!</div>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogout();
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Profile;
