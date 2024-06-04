import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
  const axiosPublic=useAxiosPublic()
    let [user,setUser]=useState('')
    //  let [loading,setLoading]=useState(false)
     let [spinner,setSpinner]=useState(true)

   function createUser(email,password) {
      setSpinner(true)
      return createUserWithEmailAndPassword(auth,email,password)
   }

   function signInUser(email,password) {
     setSpinner(true)
      return signInWithEmailAndPassword(auth,email,password)
   }


   function signInbyGoogle() {
    setSpinner(true)
     return signInWithPopup(auth,googleProvider)
   }

   function signInbyTwitter() {
    setSpinner(true)
      return signInWithPopup(auth,twitterProvider)
   }

   function updateUser(name,photo) {
      return updateProfile(auth.currentUser,{
          displayName:name,photoURL:photo
      })
   }



   function logout() {
    setSpinner(true)
      return signOut(auth)
   }
   useEffect(()=>{
      let unsubscribe= onAuthStateChanged(auth,(user)=>{
        console.log(user);
         setUser(user)
         if (user) {
          // get token and store client
          const userInfo = { email: user.email };
          axiosPublic.post('/jwt', userInfo)
              .then(res => {
                  if (res.data.token) {
                      localStorage.setItem('petoria-access', res.data.token);
                      setSpinner(false);
                  }
              })
      }
      else {
          // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
          localStorage.removeItem('petoria-access');
          setSpinner(false);
      }

        //  setSpinner(false)
      })

      return ()=>{
          unsubscribe()
      }
   },[])
    let info={
    user,
    spinner,
    setSpinner,
    createUser,
    signInUser,
    signInbyGoogle,
    updateUser,
    logout,
    signInbyTwitter
    }
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;