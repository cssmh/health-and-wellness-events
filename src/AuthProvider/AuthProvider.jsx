import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateNamePhoto = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (getUser) => {
            console.log("im spying on", getUser)
            setUser(getUser)
        })
        return ()=> {
            unSubscribe()
        }
    },[])
    const allAuth = {user, createUser, updateNamePhoto, signInUser}
    return (
        <AuthContext.Provider value={allAuth}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;