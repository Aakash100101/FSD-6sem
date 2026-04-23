import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/api/users");
    const data = await res.json();
    console.log(data); // 👈 ADD THIS LINE
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => (
          <div key={user._id}>
            {user.name} - {user.email}
          </div>
        ))
      )}
    </div>
  );
}

export default UserList;