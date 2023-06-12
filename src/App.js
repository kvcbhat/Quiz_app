import React from "react";
import { Routes, Route } from "react-router-dom";

import Quiz from "./components/Quiz";
import Home from "./components/Home";
import Results from "./components/Results";

const App = (app) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/Quiz" element={<Quiz />} />

      <Route path="/Results" element={<Results />} />
    </Routes>
  );
};
export default App;
