import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "", name: "", role: "employee" });
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const res = signup(form);
    if (res.ok) {
      setMsg(res.message);
      setTimeout(() => navigate("/login"), 1000);
    } else setMsg(res.message);
  };

  return (
    <div className="center">
      <div className="card signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={submit} className="signup-form">
          <input placeholder="Full name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
          <input placeholder="Username" value={form.username} onChange={(e)=>setForm({...form, username:e.target.value})} required />
          <input placeholder="Password" type="password" value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} required />
          <select value={form.role} onChange={(e)=>setForm({...form, role:e.target.value})}>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Sign Up</button>
        </form>
        {msg && <p className="muted">{msg}</p>}
      </div>
    </div>
  );
};

export default Signup;
