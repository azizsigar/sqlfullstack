import React from "react";
import {  Route, Routes } from "react-router-dom";
import Student from "./comps/Student";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Student />} exact />
        </Routes>

    </div>
  );
}

export default App;
