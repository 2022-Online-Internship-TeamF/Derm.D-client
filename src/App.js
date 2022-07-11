import React, { Component } from 'react';
import './App.css';
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import Home from "./routes/Home"
import Infodisease from "./routes/Infodisease"
import Question from "./routes/Question"
import Scrap from "./routes/Scrap"
import Judgment from "./routes/Judgment"
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Scrap" element={<Scrap />}></Route>
          <Route path="/Judgment" element={<Judgment />}></Route>
          <Route path="/Question" element={<Question />}></Route>
          <Route path="/Infodisease" element={<Infodisease />}></Route>
        </Routes>
    </div>
  );
}

export default App;
