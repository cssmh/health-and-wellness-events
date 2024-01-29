import PropTypes from 'prop-types';
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();
    const [user, setUser] = useState(null)

    const googlePopupLogin = () => {
        return signInWithPopup(auth, providerGoogle)
    }

    const githubPopupLogin = () => {
        return signInWithPopup(auth, providerGithub)
    }

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

    const logOut = () => {
        return signOut(auth)
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
    const allAuth = {user, createUser, updateNamePhoto, signInUser, logOut, googlePopupLogin, githubPopupLogin}
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