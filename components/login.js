import { useState, useEffect, useRef , React } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { button, buttonText, icon } from "../style/googleStyles";

// refresh token
import { refreshTokenSetup } from '../utilities/refreshToken';

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function LoginHooks(props) {
  const [login, setLogin] = useState(false)
  function handleLogin(value) {
      props.onLoginChange(value);
  }
  function handleUser(value) {
    props.onUserChange(value);
}
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    setLogin(true)
    handleLogin(true)
    handleUser(res.profileObj)
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline'
  });

  return (
    <button onClick={signIn} style={button}>
      <img src="icons/google.svg" alt="google login" style={icon}></img>
      <span style={buttonText}>Inicia sesión con Google</span>
    </button>
  );
}

export default LoginHooks;