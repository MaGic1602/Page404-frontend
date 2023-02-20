import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Pages/SignUp/SignUp";
import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";
import Users from "./Pages/Users/Users";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<LogIn />} path={"/login"} />
        <Route element={<SignUp />} path={"/signup"} />
        <Route element={<Homepage />} path={"/"} />
        <Route element={<Users />} path={"/users"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
