import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../../Firebase/firebaseConfig";


export const AuthContext = createContext(null);
const FirebaseProvider = ({children}) => {
    const [user,setUser] = useState(null)
    console.log(user)

//Create Users
const createUser =(email,password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
}

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } 
      });
},[])


    const AllValues = {
        createUser
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