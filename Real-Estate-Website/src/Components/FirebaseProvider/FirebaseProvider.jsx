import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/firebaseConfig";


//social auth providers
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const AuthContext = createContext(null);
const FirebaseProvider = ({children}) => {
    const [user,setUser] = useState(null)

//Create Users
const createUser =(email,password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
}

//Sign in users

const signInUser = (email,password)=>{
   return signInWithEmailAndPassword(auth, email, password)
}

//google login
const googleLogin = ()=>{
    return signInWithPopup(auth, googleProvider)
}
//github login
const githubLogin = ()=>{
    return signInWithPopup(auth, githubProvider)
}

//logout user
 const logOut = ()=>{
    signOut(auth)
    setUser(null)
 }


useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } 
      });
},[])


    const AllValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user
    }
    return (
        <AuthContext.Provider value={AllValues}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.object
}

export default FirebaseProvider;