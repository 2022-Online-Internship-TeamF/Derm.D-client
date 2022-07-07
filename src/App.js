import React, { Component } from 'react';
import './App.css';
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import Home from "./routes/Home"
import Header from "./components/Header"
import Result from "./routes/Result"
import Study from "./routes/Study"
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Result" element={<Result />}></Route>
          <Route path="/Study" element={<Study />}></Route>
        </Routes>
    </div>
  );
}

export default App;
