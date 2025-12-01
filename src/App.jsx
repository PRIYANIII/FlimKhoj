import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Movie from './components/Movie'
import Watch from "./components/Watch"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
