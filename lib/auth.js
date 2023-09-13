import Cookies from "js-cookie";

const COOKIE_EXPIRATION_DAYS = 1;

export const setAuthToken = (token) => {
  Cookies.set("auth_token", token, { expires: COOKIE_EXPIRATION_DAYS });
};

export const getAuthToken = () => {
  return Cookies.get("auth_token");
};

export const removeAuthToken = () => {
  Cookies.remove("auth_token");
};

const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

const getLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

const removeLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};

const storageType = {
  set: setLocalStorage,
  get: getLocalStorage,
  remove: removeLocalStorage,
};

export default storageType;
