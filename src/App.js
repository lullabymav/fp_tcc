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
  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  // console.log(currentUser)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Books />
                </RequireAuth>
              }
            />
          
            {/* <Route path="add">
              <Route
                index
                element={
                  <RequireAuth>
                    <Add />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="/update/:id">
              <Route
                index
                element={
                  <RequireAuth>
                    <Update />
                  </RequireAuth>
                }
              />
            </Route> */}
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
