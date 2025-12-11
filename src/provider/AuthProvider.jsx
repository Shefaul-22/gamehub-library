
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';


const auth = getAuth(app);
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user, loading);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // update user data
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    // reset password

    const resetPassword = (email) => {
        
        return sendPasswordResetEmail(auth, email)
    };
    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, []);


    const authInfo = {
        user,
        setUser,
        createUser,
        updateUser,
        logOutUser,
        signIn,
        signInWithGoogle,
        resetPassword,
        loading,
        setLoading,

    }
    return (

        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>

    )
};

export default AuthProvider;
