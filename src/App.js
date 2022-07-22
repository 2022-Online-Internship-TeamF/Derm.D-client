import React, { Component } from 'react';
import './App.css';
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import Home from "./routes/Home"
import Infodisease from "./routes/Infodisease"
import Question from "./routes/Question"
import Answer from "./routes/Answer"
import Scrap from "./routes/Scrap"
import Qna from "./routes/Qna"
import Judgment from "./routes/Judgment"
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";

function App() {  
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/scrap" element={<Scrap />}></Route>
          <Route path="/judgment" element={<Judgment />}></Route>
          <Route path="/question" element={<Question />}></Route>          
          <Route path="/answer" element={<Answer />}></Route>
          <Route path="/qna" element={<Qna />}></Route>        
          <Route path="/infodisease/:id" element={<Infodisease />}></Route>
        </Routes>
    </div>
  );

}


export default App;
