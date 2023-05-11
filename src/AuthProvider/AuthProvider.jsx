import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase";

export const AuthContext = createContext(null)
function AuthProvider({children}) {
    const auth = getAuth(app)
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        });
        return () => unsubscribe()
    },[])

    const userInfo = {
        user,
        loader,
        register,
        login,
    }

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
