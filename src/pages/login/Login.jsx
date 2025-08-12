import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login({ username: form.username, password: form.password });
    if (!res.ok) setError(res.message);
  };

  return (
    <div className="center">
      <div className="card login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            placeholder="Username"
            type="username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
        <p className="muted">Use admin/admin123 or emp/emp123 for demo</p>
      </div>
    </div>
  );
};

export default Login;
