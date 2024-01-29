import PropTypes from 'prop-types';
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googlePopupLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, providerGoogle)
    }

    const githubPopupLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, providerGithub)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateNamePhoto = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgotPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (getUser) => {
            console.log("im spying on", getUser)
            setUser(getUser)
            setLoading(false)
        })
        return ()=> {
            unSubscribe()
        }
    },[])
    const allAuth = { 
        user, 
        createUser, 
        updateNamePhoto, 
        signInUser, 
        logOut, 
        googlePopupLogin, 
        githubPopupLogin, 
        forgotPassword, 
        loading, 
    }
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