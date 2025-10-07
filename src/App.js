import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const API_URL = "http://localhost:5000/users";

  // 🔹 Fetch users on load
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setUsers(data);
  };

  // 🔹 Add new user
  const addUser = async (user) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const newUser = await res.json();
    setUsers([...users, newUser]);
  };

  // 🔹 Delete user
  const deleteUser = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setUsers(users.filter((u) => u.id !== id));
  };

  // 🔹 Update user
  const updateUser = async (updatedUser) => {
    const res = await fetch(`${API_URL}/${updatedUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });
    const data = await res.json();
    setUsers(users.map((u) => (u.id === data.id ? data : u)));
    setEditUser(null);
  };

  const editHandler = (user) => {
    setEditUser(user);
  };

  return (
    <div className="app-container">
      <h1>✨ User Management Dashboard ✨</h1>
      <UserForm addUser={addUser} editUser={editUser} updateUser={updateUser} />
      <UserList users={users} deleteUser={deleteUser} editHandler={editHandler} />
    </div>
  );
}

export default App;
