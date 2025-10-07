import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import './App.css';


function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
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
