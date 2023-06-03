import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { userInputs } from "./formSource";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import "./style.css";

function App() {
  // const currentUser = false;
  // const {currentUser} = useContext(AuthContext);

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // };

  // console.log(currentUser)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Books/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/users" element={<List/>}/>
        {/* <New inputs={userInputs} title="Add New User" /> */}
        <Route path="/new" element={<userInputs/>}/>
        <Route path="/:userId" element={<Single/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
