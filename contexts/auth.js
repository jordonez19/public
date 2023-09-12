/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
import {
  isAuthenticated,
  setLocalStorage,
  getLocaleStorage,
  removeLocaleStorage,
} from "../lib/session";
import Router from "next/router";

export const AuthContext = createContext();

const Provider = ({ children }) => {
  const [userLoaded, setUserLoaded] = useState(() => isAuthenticated());
  const [user, setUser] = useState(() => getLocaleStorage("user"));
  const [token, setUserToken] = useState(() => getLocaleStorage("token_id"));
  const value = {
    userLoaded,
    user,
    token,
    activateAuth: (authUser, token) => {
      setUser(authUser);
      setUserToken(token);
      setUserLoaded(true);
      setLocalStorage("user", authUser);
      setLocalStorage("token_id", token);
    },
    removeAuth: () => {
      setUserLoaded(false);
      setUser(null);
      setUserToken(null);
      removeLocaleStorage("user");
      removeLocaleStorage("token_id");
      Router.push("/login");
    },
    updateUser: (newUserData) => {
      setLocalStorage("user", newUserData);
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default { Provider, Consumer: AuthContext.Consumer };
