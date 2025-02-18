import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebaseConfig";

//social auth providers
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const AuthContext = createContext(null);
const FirebaseProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(false);

//Create Users
const createUser =(email,password,userName,photoURL)=>{
   return createUserWithEmailAndPassword(auth, email, password,userName,photoURL)
}

//update User profile
const updateUserProfile = (name,image)=>{
   return updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: image
      })
}

//Sign in users
const signInUser = (email,password)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
}

//google login
const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}
//github login
const githubLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
}

//logout user
 const logOut = ()=>{
    signOut(auth); 
    setUser(null)    
 }

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)  
      });
      return ()=> unsubscribe()
},[])

    const AllValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user,
        updateUserProfile,
        loading
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