import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Dashboard,
  Projects,
  SignUp,
  SignIn,
  CreatePost,
} from "./pages";
import {
  Header,
  FooterCom,
  PrivateRoute,
  AdminPrivateRoute,
  SignPrivateRoute,
} from "./components";

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
        <Route element={<AdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route element={<SignPrivateRoute />}>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
};

export default App;
