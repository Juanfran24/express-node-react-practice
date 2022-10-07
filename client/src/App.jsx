import "./App.css";
import LoginForm from "./components/loginForm";
import { useAuth } from "./hooks/useAuth";
import { userContext, UserContextProvider } from "./context/userContext";
import { useContext } from "react";

function App() {
  const { token, setToken } = useContext(userContext);
  const { isAutenticated, username } = useAuth(token);
  console.log(isAutenticated)
  return (
    <UserContextProvider>
      {
        isAutenticated ? 
        <div>{token}</div>
        :
        <LoginForm/>
      }
    </UserContextProvider>
  )
}

export default App;
