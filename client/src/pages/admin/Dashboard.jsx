import React from "react";
import { useEffect, useState } from "react";
import demoUsers from "../../data/demoUser";
import SearchBar from "../../components/SearchBar";
import UserTable from "../../components/UserTable";
import UserModal from "../../components/UserModal";
import Toast from "../../components/Toast";

export default function Dashboard() {
  const [users, setUsers] = useState(demoUsers);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [toast, setToast] = useState("");

  const handleSearch = (e) => setSearch(e.target.value);

  const handleCreate = () => {
    setEditingUser(null);
    setShowModal(true);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    setToast("User deleted successfully");
  };

  const handleSave = (data) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === data.id ? data : u)));
      setToast("User updated successfully");
    } else {
      const newUser = { ...data, id: Date.now() };
      setUsers([newUser, ...users]);
      setToast("User created successfully");
    }
    setShowModal(false);
  };

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const timeout = setTimeout(() => setToast(""), 3000);
    return () => clearTimeout(timeout);
  }, [toast]);

  return (
    <div className="p-6 space-y-6">
      <SearchBar
        search={search}
        onSearch={handleSearch}
        onCreate={handleCreate}
      />
      <UserTable users={filtered} onEdit={handleEdit} onDelete={handleDelete} />
      {showModal && (
        <UserModal
          user={editingUser}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
      {toast && <Toast message={toast} />}
    </div>
  );
}
