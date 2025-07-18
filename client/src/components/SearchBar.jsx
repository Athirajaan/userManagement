import React from 'react'

export default function SearchBar({ search, onSearch, onCreate }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-6 flex justify-between items-center gap-4 flex-wrap">
      <h2 className="text-xl font-bold text-blue-700">User Management</h2>
      <div className="flex gap-2 flex-grow justify-end">
        <input
          type="text"
          value={search}
          onChange={onSearch}
          placeholder="Search users..."
          className="px-4 py-2 border border-gray-300 rounded-md w-60"
        />
        <button
          onClick={onCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Create User
        </button>
      </div>
    </div>
  );
}
