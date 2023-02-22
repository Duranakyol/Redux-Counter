import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
