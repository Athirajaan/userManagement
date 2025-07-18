import React from "react";
import { useEffect, useState } from "react";

export default function UserModal({ user, onClose, onSave }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "user",
    password: "",
  });

  const isEdit = Boolean(user);

  useEffect(() => {
    if (isEdit) {
      setForm({
        name: user.name,
        email: user.email,
        role: user.role,
        password: "", // password not needed in edit mode
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || (!isEdit && !form.password)) return;

    onSave({
      ...user,
      ...form,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md space-y-4">
        <h2 className="text-lg font-bold">
          {isEdit ? "Edit User" : "Create User"}
        </h2>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-md"
          />

          {!isEdit && (
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md"
            />
          )}

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </form>

        <div className="flex justify-end gap-3 pt-2">
          <button onClick={onClose} className="text-gray-600 hover:underline">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
