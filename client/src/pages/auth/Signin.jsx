import React from 'react'

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data", form);
  };

  return (
    <div className="flex h-screen">
      {/* Left Side Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="/gojo.jpg"
          alt="Sign In"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Sign in to your account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-100"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-100"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

