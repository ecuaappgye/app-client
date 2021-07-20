import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";

const authContext = createContext();

// const AuthProvider = {
//   signIn: (callback) => {
//     setTimeout(callback, 100);
//   },
//   signOut: (callback) => {
//     setTimeout(callback, 100);
//   },
// };

const useProvideAuth = () => {
  const token = useSelector((state) => state.currentToken);

  // const signIn = (cb) => {
  //   AuthProvider.signIn(() => {
  //     setUser("user");
  //     cb();
  //   });
  // };
  // const signIn = (cb) => {
  //   dispatch(fetchTokenThunk(cb()))
  // };

  const signIn = (cb)=>{
    cb()
  }
  // const signOut = (cb) => {
  //   AuthProvider.signOut(() => {
  //     setUser(null);
  //     cb();
  //   });
  // };

  return {
    token,
    signIn,
    //signOut,
  };
};

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
