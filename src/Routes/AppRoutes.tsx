import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Details from "../screens/Details";
import Auth from "../screens/Auth";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<App />} /> */}
      <Route path="/" element={<Auth />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default AppRoutes;
