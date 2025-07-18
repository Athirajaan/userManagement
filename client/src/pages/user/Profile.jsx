import React from 'react'
import { useState } from "react";

const Profile=()=> {
  const [user, setUser] = useState({
    name: "Athira",
    email: "athira@example.com",
    avatar: "",
  });

  const [editing, setEditing] = useState(false);
  const [preview, setPreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleCancel = () => {
    setEditing(false);
    setPreview("");
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 flex justify-center items-center px-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-5">
        <h1 className="text-xl font-semibold text-blue-600">Profile</h1>

        {/* Avatar */}
        <div className="flex justify-center">
          <label className="relative cursor-pointer group">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              disabled={!editing}
            />
            {preview || user.avatar ? (
              <img
                src={preview || user.avatar}
                alt="Avatar"
                className="h-20 w-20 rounded-full object-cover border-2 border-blue-500 shadow-sm"
              />
            ) : (
              <div className="h-20 w-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-sm">
                {user.name[0].toUpperCase()}
              </div>
            )}
            {editing && (
              <span className="absolute -bottom-2 right-0 bg-blue-500 text-white px-2 py-0.5 text-xs rounded opacity-90 group-hover:opacity-100 transition">
                Change
              </span>
            )}
          </label>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={user.name}
              disabled={!editing}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                editing ? "bg-white" : "bg-gray-100"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={user.email}
              disabled={!editing}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                editing ? "bg-white" : "bg-gray-100"
              }`}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            {editing ? (
              <>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 rounded border text-gray-600 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setEditing(false);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Save
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setEditing(true)}
                className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}


export default Profile