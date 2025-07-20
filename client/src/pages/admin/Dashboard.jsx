import React from 'react';
import { useState, useEffect } from 'react';
import GetUsers from '../../hooks/GetUsers';
import SearchBar from '../../components/SearchBar';
import UserTable from '../../components/UserTable';
import UserModal from '../../components/UserModal';

export default function Dashboard() {
  const {
    users,
    editingUser,
    setEditingUser,
    updateUser,
    createUser,
    toggleBlock,
    toast,
    setToast,
    fetchUsers,
    currentPage,
    totalPages,
    setCurrentPage,
  } = GetUsers();

  const [search, setSearch] = useState('');

  // 🟦 Filtered users for search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCreate = () => {
    setEditingUser({ name: '', email: '', role: 'user' });
  };

  const handleSave = async (data) => {
    if (editingUser && editingUser._id) {
      await updateUser(data);
    } else {
      await createUser(data);
    }
    setEditingUser(null);
  };

  return (
    <div className="p-6 space-y-6">
      {/* 🟨 Search & Create */}
      <SearchBar
        search={search}
        onSearch={handleSearch}
        onCreate={handleCreate}
      />

      {/* 🟩 Table */}
      <UserTable
        users={filteredUsers}
        onEdit={(u) => setEditingUser(u)}
        onBlock={toggleBlock}
        onUnblock={toggleBlock}
      />

      {editingUser && (
        <UserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSave}
        />
      )}

      {/* 🟧 Pagination */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => {
              fetchUsers(i + 1);
              setCurrentPage(i + 1);
            }}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
