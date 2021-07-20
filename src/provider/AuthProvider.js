import { createContext, useContext } from "react";
import { useSelector } from "react-redux";

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useSelector((state) => state.currentToken);
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
