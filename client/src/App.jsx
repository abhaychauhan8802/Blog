import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, Dashboard, Projects, SignUp, SignIn } from "./pages";
import { Header, FooterCom, PrivateRoute } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
};

export default App;
