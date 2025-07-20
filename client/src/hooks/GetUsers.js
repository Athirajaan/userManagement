import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';



export default function GetUsers() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async (page = 1) => {
    const token = localStorage.getItem("token");
     if (!token) {
      toast.error("No token found. Please login again.");
      return;
    }
    const res = await fetch(`/admin/users?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setUsers(data.users);
    setCurrentPage(data.currentPage);
    setTotalPages(data.totalPages);
  };


  const updateUser = async (userData) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const res = await fetch(`/admin/users/${userData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Update failed");
    }

    setUsers((prev) =>
      prev.map((u) => (u._id === data.user.id ? { ...u, ...data.user } : u))
    );

    toast.success(data.message || "User updated successfully");
  } catch (err) {
    console.error("Update error:", err);
    toast.error(err.message || "Something went wrong");
  }
};


const createUser = async (userData) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`/admin/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Create failed");

    setUsers((prev) => [data.user, ...prev]); 
    toast.success("User created successfully");
  } catch (err) {
    console.error("Create error:", err.message);
    toast.error(err.message || "Failed to create user");
  }
};



const toggleBlock = async (user) => {
  confirmAlert({
    title: user.isBlocked ? 'Unblock User' : 'Block User',
    message: `Are you sure you want to ${user.isBlocked ? 'unblock' : 'block'} this user?`,
    buttons: [
      {
        label: 'Yes',
        onClick: async () => {
          try {
            const token = localStorage.getItem('token');
            const res = await fetch(`/admin/users/${user._id}/block`, {
              method: 'PATCH',
              headers: { Authorization: `Bearer ${token}` },
            });

            const data = await res.json();

            if (!res.ok) {
              throw new Error(data.message || 'Action failed');
            }
            setUsers((prev) =>
              prev.map((u) =>
                u._id === user._id ? { ...u, isBlocked: !u.isBlocked } : u
              )
            );

            toast.success(data.message);
          } catch (err) {
            toast.error(err.message);
          }
        },
      },
      {
        label: 'Cancel',
      },
    ],
  });
};

  useEffect(() => {
    fetchUsers(currentPage);
  }, []);

  return {
    users,
    setEditingUser,
    editingUser,
    fetchUsers,
    updateUser,
    toggleBlock,
    currentPage,
    totalPages,
    setCurrentPage,
    createUser
  };
}


