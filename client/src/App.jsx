import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, Dashboard, Projects, SignUp, SignIn } from "./pages";
import { Header } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
