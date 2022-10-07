import { useContext, useEffect } from "react";
import { userContext } from "../context/userContext";
import { loginUser } from "../services/auth";


export const useAuth = (token) => {
  // const { token, setToken } = useContext(userContext);
  let isAutenticated = false;
  let username = '';

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    console.log(token)
    // setToken(token);
    // username = window.sessionStorage.getItem("username");
    isAutenticated = Boolean(token);
  }, [token]);

  return {
    isAutenticated,
    username
  }
}
