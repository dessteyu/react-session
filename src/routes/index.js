

// have two diffent main routes
// private , auth

import React from "react";
import { Route, Routes } from "react-router-dom"
import { DataContext } from "../context/contextData";
import Login from "../pages/login"
import Students from "../pages/students"
import Teachers from "../pages/teachers";

const AuthRoutes = () => {
    return <Routes>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Login />} />
    </Routes>
}

const PrivateRoutes = () => {
    return (
      <Routes>
        <Route path="students" element={<Students />} />
        <Route path="teachers" element={<Teachers />} />
        {/* <Route path="/" element={<Teachers />} /> */}
      </Routes>
    );
}

const AppRoutes = () => {
    const { isAuth } = React.useContext(DataContext);

    return isAuth ? <PrivateRoutes /> : <AuthRoutes />
}

export default AppRoutes;