import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserContext from "./components/ContextComponents/ContextComponent";

import Index from './components/Index/index';
import LoginPage from './components/Login/login';
import RegisterPage from './components/Register/register';
import Header from './components/Header/header';
import Home from './components/HomePage/home';

function App() {
  // user details pass
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path='' element={<Index />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/home/:id' element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
