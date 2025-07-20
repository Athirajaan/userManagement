import React from 'react';

import { PencilLine, Ban, CheckCircle } from 'lucide-react';

export default function UserTable({ users, onEdit,  onUnblock, onBlock }) {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-md p-4 mt-4">
      <table className="w-full text-left border-collapse">
        <thead className="text-xs text-gray-500 uppercase tracking-wider bg-gray-50 rounded-t-xl">
          <tr>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Role</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr
              key={user._id}
              className={`border-b border-gray-200 hover:bg-gray-50 transition ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <td className="py-3 px-4 text-gray-800 font-medium">
                {user.name}
              </td>
              <td className="py-3 px-4 text-gray-600">{user.email}</td>
              <td className="py-3 px-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    user.role === 'admin'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {user.role}
                </span>
              </td>
              <td className="py-3 px-4 text-right flex justify-end gap-3">
                <button
                  onClick={() => onEdit(user)}
                  className="text-gray-500 hover:text-gray-700 transition"
                  title="Edit"
                >
                  <PencilLine className="w-5 h-5" />
                </button>

                {user.isBlocked ? (
                  <button onClick={() => onUnblock(user)} title="Unblock">
                    <CheckCircle className="w-5 h-5 text-green-500 hover:text-green-700" />
                  </button>
                ) : (
                  <button onClick={() => onBlock(user)} title="Block">
                    <Ban className="w-5 h-5 text-red-500 hover:text-red-700" />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
