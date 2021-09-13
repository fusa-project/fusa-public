import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { button, buttonText, icon } from "../style/googleStyles";

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function LogoutHooks(props) {
  function handleLogin(value) {
      props.onLoginChange(value);
  }
  function handleUser(value) {
    props.onUserChange(value);
}
  const onLogoutSuccess = (res) => {
    handleUser({})
    handleLogin(false)
    console.log('Logged out Success');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} style={button}>
      <img src="icons/google.svg" alt="google login" style={icon}></img>

      <span style={buttonText}>Cerrar sesión</span>
    </button>
  );
}

export default LogoutHooks;