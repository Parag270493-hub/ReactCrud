import React from "react";
import UserCard from "./UserCard";

function UserList({ users, deleteUser, editHandler }) {
  if (users.length === 0) {
    return <p className="empty-message">No users added yet 🫥</p>;
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          editHandler={editHandler}
        />
      ))}
    </div>
  );
}

export default UserList;
