import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "@util/firebaseConfig";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

function Login() {
  const signIn = () => {
    const auth = getAuth(firebaseConfig);
    signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error)
    })
  }

  return (
    <button onClick={signIn} className="google-button">
      <img src="icons/google.svg" alt="google login" className="google-icon"></img>
      <span className="google-button-text">Inicia sesión con Google</span>
    </button>
  );
}

export default Login;