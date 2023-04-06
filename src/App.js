import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Globalstyles from "./Globalstyles";
import Login from "./Pages/Login";
import { ThemeProvider } from "styled-components";
import { theme } from "./Components/Theme";
import {BrowserRouter,Routes,Route,Navigate,} from "react-router-dom";
import Profile from "./Pages/Profile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {

const {currentUser} = useContext(AuthContext)
console.log(currentUser)

const ProtectedRoute = ({children}) => {
  if(!currentUser){
    return<Navigate to="/login"/>
  }
  return children
}

  return (

      <  BrowserRouter>
    <ThemeProvider theme = {theme}>
    <Globalstyles />
      <Routes>
    <Route path="/">
      <Route index  element={
      <ProtectedRoute>
          <Home/>
        </ProtectedRoute>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="profile" element={<Profile/>}/>
    </Route>
      </Routes>
    </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
