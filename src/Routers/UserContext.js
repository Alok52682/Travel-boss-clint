import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, GithubProvider);
    }

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const updateUserProfile = (username, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: username, photoURL: photoURL
        })
    }

    const userVarification = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const userSignIn = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const handleForgetPass = (userEmail) => {
        if (!userEmail) {
            alert('please enter your email!')
            return
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email sent')
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])



    const authInfo = {
        user,
        setUser,
        loading,
        signInWithGoogle,
        signInWithGithub,
        createUser,
        updateUserProfile,
        userVarification,
        userSignIn,
        handleForgetPass,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;