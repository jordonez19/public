import { createContext, useContext, useEffect, useState } from "react";
import { getAuthToken, setAuthToken, removeAuthToken } from "../lib/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authenticate = (userData, token) => {
    setAuthToken(token);
    setUser(userData);
  };

  const signout = () => {
    removeAuthToken();
    setUser(null);
  };

  useEffect(() => {
    getAuthToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, authenticate, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
