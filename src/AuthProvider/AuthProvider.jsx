import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase";

export const AuthContext = createContext(null)
function AuthProvider({children}) {
    const auth = getAuth(app)
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const register = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoader(false)
            setUser(currentUser)
        });
        return () => unsubscribe()
    },[])

    const userInfo = {
        user,
        loader,
        register,
        login,
        logOut
    }

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
