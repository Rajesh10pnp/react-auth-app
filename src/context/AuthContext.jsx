import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Simple AuthContext:
 * - stores user { username, role } and token in localStorage
 * - login/signup are "fake" — can be replaced with API calls
 * - provides login, signup, logout
 */

const AuthContext = createContext();

const DUMMY_USERS_KEY = "DUMMY_USERS_V1"; // only for demo

// helper to generate fake token
const genToken = (username) => {
  return btoa(`${username}:${Date.now()}`); // not real JWT, just demo
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const u = localStorage.getItem("auth_user");
    return u ? JSON.parse(u) : null;
  });

  // ensure dummy users exist (admin + employee) — only for demo; normally use backend
  useEffect(() => {
    const stored = localStorage.getItem(DUMMY_USERS_KEY);
    if (!stored) {
      const seed = [
        { username: "admin", password: "admin123", role: "admin", name: "Admin User" },
        { username: "emp", password: "emp123", role: "employee", name: "Employee User" },
      ];
      localStorage.setItem(DUMMY_USERS_KEY, JSON.stringify(seed));
    }
  }, []);

  const signup = ({ username, password, role, name }) => {
    const users = JSON.parse(localStorage.getItem(DUMMY_USERS_KEY)) || [];
    const exists = users.find((u) => u.username === username);
    if (exists) {
      return { ok: false, message: "Username already exists" };
    }
    const newUser = { username, password, role, name };
    users.push(newUser);
    localStorage.setItem(DUMMY_USERS_KEY, JSON.stringify(users));
    return { ok: true, message: "Signup success. Please login." };
  };

  const login = ({ username, password }) => {
    const users = JSON.parse(localStorage.getItem(DUMMY_USERS_KEY)) || [];
    const found = users.find((u) => u.username === username && u.password === password);
    if (!found) {
      return { ok: false, message: "Invalid credentials" };
    }

    const token = genToken(found.username);
    const authUser = { username: found.username, role: found.role, name: found.name };
    localStorage.setItem("auth_token", token);
    localStorage.setItem("auth_user", JSON.stringify(authUser));
    setUser(authUser);

    // redirect based on role
    if (found.role === "admin") navigate("/admin");
    else navigate("/employee");

    return { ok: true, user: authUser, token };
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    setUser(null);
    navigate("/login");
  };

  // helper to check token exist
  const isAuthenticated = () => !!localStorage.getItem("auth_token");

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
