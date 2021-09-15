import { getAuth, signOut } from "firebase/auth";
import app from "@util/base";

function Logout() {
  const logout = () => {
    const auth = getAuth(app);
    signOut(auth)
  }
  return (
    <button onClick={logout} className="google-button">
      <img src="icons/google.svg" alt="google login" className="google-icon"></img>
      <span className="google-button-text">Cerrar sesión</span>
    </button>
  );
}

export default Logout;