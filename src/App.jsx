import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Profile from "./pages/profile/Profile.jsx";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AdminRoute from "./components/AdminRoute";
import AdminDashboard from "./pages/admindashboard/AdminDashboard";
import EmployeeRoute from "./components/EmployeeRoute";
import EmployeeDashboard from "./pages/employeedashboard/EmployeeDashboard";
import Login from "./pages/login/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/employee"
          element={
            <EmployeeRoute>
              <EmployeeDashboard />
            </EmployeeRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
