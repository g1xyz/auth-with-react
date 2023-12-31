import { signOut } from "firebase/auth";
import { auth } from "../api/firebase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = auth.currentUser === null ? { email: "user" } : auth.currentUser;
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <div className="border h-[70vh] w-[60vw] m-auto bg-blue-100">
      <section className="text-center my-2 h-[80%]">
        Welcome {user.email}!
      </section>
      <button
        className="border text-white bg-red-600 p-1 rounded block m-auto"
        onClick={(e) => {
          e.preventDefault();
          handleLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
