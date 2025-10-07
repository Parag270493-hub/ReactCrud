import React from "react";

function UserCard({ user, deleteUser, editHandler }) {
  return (
    <div className="user-card">
      <div className="avatar">{user.name.charAt(0).toUpperCase()}</div>
      <div className="info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <div className="actions">
        <button className="edit" onClick={() => editHandler(user)}>✏️</button>
        <button className="delete" onClick={() => deleteUser(user.id)}>🗑️</button>
      </div>
    </div>
  );
}

export default UserCard;
