import React, { useState, useEffect } from "react";

function UserForm({ addUser, editUser, updateUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editUser) {
      setName(editUser.name);
      setEmail(editUser.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Please fill all fields");
    if (editUser) {
      updateUser({ id: editUser.id, name, email });
    } else {
      addUser({ name, email });
    }
    setName("");
    setEmail("");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="👤 Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="📧 Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">
        {editUser ? "💾 Update User" : "➕ Add User"}
      </button>
    </form>
  );
}

export default UserForm;
