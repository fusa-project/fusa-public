import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Backdrop, CircularProgress} from '@material-ui/core';
import firebaseConfig from "@util/firebaseConfig";

const AuthContext = createContext({
  currentUser: null
});

export function AuthProvider({ children }){
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  const auth = getAuth(firebaseConfig);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return (
      <Backdrop className="backdrop" open={pending}>
        <CircularProgress size={50} color="primary" />
      </Backdrop>
    )
  }
  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}